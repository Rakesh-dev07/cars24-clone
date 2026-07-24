using Cars24API.Seed;
using Cars24API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Cars24API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SeedController : ControllerBase
{
    private readonly CarService _carService;

    public SeedController(CarService carService)
    {
        _carService = carService;
    }

    [HttpGet]
    public async Task<IActionResult> SeedCars()
    {
        var existingCars = await _carService.GetAllAsync();

        if (existingCars.Any())
        {
            return Ok(new
            {
                message = "Cars already exist in database."
            });
        }

        var cars = CarSeed.GetCars();

        foreach (var car in cars)
        {
            await _carService.CreateAsync(car);
        }

        return Ok(new
        {
            message = $"{cars.Count} cars inserted successfully."
        });
    }
}