using Cars24API.Models;
using Cars24API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Cars24API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WishlistController : ControllerBase
{
    private readonly UserService _userService;
    private readonly CarService _carService;

    public WishlistController(
        UserService userService,
        CarService carService)
    {
        _userService = userService;
        _carService = carService;
    }

    // GET: api/Wishlist/{userId}
    [HttpGet("{userId}")]
    public async Task<IActionResult> GetWishlist(string userId)
    {
        var user = await _userService.GetByIdAsync(userId);

        if (user == null)
            return NotFound(new { message = "User not found." });

        if (user.Wishlist == null || !user.Wishlist.Any())
            return Ok(new List<Car>());

        var cars = new List<Car>();

        foreach (var carId in user.Wishlist)
        {
            var car = await _carService.GetByIdAsync(carId);

            if (car != null)
                cars.Add(car);
        }

        return Ok(cars);
    }

    // POST: api/Wishlist/add
    [HttpPost("add")]
    public async Task<IActionResult> AddToWishlist([FromBody] WishlistRequest request)
    {
        var user = await _userService.GetByIdAsync(request.UserId);

        if (user == null)
            return NotFound(new { message = "User not found." });

        var car = await _carService.GetByIdAsync(request.CarId);

        if (car == null)
            return NotFound(new { message = "Car not found." });

        if (!user.Wishlist.Contains(request.CarId))
        {
            user.Wishlist.Add(request.CarId);
            await _userService.UpdateAsync(user.Id!, user);
        }

        return Ok(new
        {
            message = "Car added to wishlist."
        });
    }

    // DELETE: api/Wishlist/remove
    [HttpDelete("remove")]
    public async Task<IActionResult> RemoveFromWishlist([FromBody] WishlistRequest request)
    {
        var user = await _userService.GetByIdAsync(request.UserId);

        if (user == null)
            return NotFound(new { message = "User not found." });

        if (user.Wishlist.Contains(request.CarId))
        {
            user.Wishlist.Remove(request.CarId);
            await _userService.UpdateAsync(user.Id!, user);
        }

        return Ok(new
        {
            message = "Car removed from wishlist."
        });
    }

    // GET: api/Wishlist/check/{userId}/{carId}
    [HttpGet("check/{userId}/{carId}")]
    public async Task<IActionResult> CheckWishlist(string userId, string carId)
    {
        var user = await _userService.GetByIdAsync(userId);

        if (user == null)
            return NotFound(new { message = "User not found." });

        return Ok(new
        {
            isWishlisted = user.Wishlist.Contains(carId)
        });
    }

    public class WishlistRequest
    {
        public string UserId { get; set; } = string.Empty;

        public string CarId { get; set; } = string.Empty;
    }
}