using Cars24API.Models;
using MongoDB.Driver;

namespace Cars24API.Services
{
    public class CarService
    {
        private readonly IMongoCollection<Car> _cars;
        private readonly DynamicPricingService _dynamicPricingService;
        public CarService(
            IConfiguration config,
            DynamicPricingService dynamicPricingService)
        {
            var client = new MongoClient(config.GetConnectionString("Cars24DB"));

            var database = client.GetDatabase(config["MongoDB:DatabaseName"]);
            _cars = database.GetCollection<Car>("Cars");

            _dynamicPricingService = dynamicPricingService;
        }
        public async Task<List<Car>> GetAllAsync() =>
            await _cars.Find(_ => true).ToListAsync();
        public async Task<Car?> GetByIdAsync(string id)
        {
            var car = await _cars
                .Find(u => u.Id == id)
                .FirstOrDefaultAsync();

            if (car != null)
            {
                car.RecommendedPrice =
                    _dynamicPricingService.CalculateRecommendedPrice(
                        car.Price,
                        car.City,
                        car.Title
                    );
            }

            return car;
        }
        public async Task CreateAsync(Car car) =>
            await _cars.InsertOneAsync(car);
    }

}