using Cars24API.Models;
using MongoDB.Driver;

namespace Cars24API.Services.Search;

public class PopularityScore
{
    private readonly IMongoCollection<User> _users;
    private readonly IMongoCollection<Booking> _bookings;
    private readonly IMongoCollection<Appointment> _appointments;

    public PopularityScore(IConfiguration config)
    {
        var client = new MongoClient(config.GetConnectionString("Cars24DB"));
        var db = client.GetDatabase(config["MongoDB:DatabaseName"]);

        _users = db.GetCollection<User>("Users");
        _bookings = db.GetCollection<Booking>("Bookings");
        _appointments = db.GetCollection<Appointment>("Appointments");
    }

    public async Task<int> CalculateAsync(string carId)
    {
        int score = 0;

        // Wishlist count
        var users = await _users.Find(_ => true).ToListAsync();

        int wishlistCount = users.Count(u =>
            u.Wishlist != null &&
            u.Wishlist.Contains(carId));

        score += wishlistCount * 5;

        // Booking count
        int bookingCount = (int)await _bookings.CountDocumentsAsync(
            b => b.CarId == carId);

        score += bookingCount * 20;

        // Appointment count
        int appointmentCount = (int)await _appointments.CountDocumentsAsync(
            a => a.CarId == carId);

        score += appointmentCount * 10;

        return score;
    }
}