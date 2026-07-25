using MongoDB.Driver;
using Cars24API.Services;

var builder = WebApplication.CreateBuilder(args);

// ========================================
// Services
// ========================================

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// MongoDB Connection String
string? connectionString = builder.Configuration.GetConnectionString("Cars24DB");

// Allowed Origins
string[]? allowedOrigins = builder.Configuration
    .GetSection("AllowedOrigins")
    .Get<string[]>();

// Dependency Injection
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<CarService>();
builder.Services.AddSingleton<SearchService>();
builder.Services.AddSingleton<Cars24API.Services.Search.PopularityScore>();
builder.Services.AddSingleton<DynamicPricingService>();
builder.Services.AddSingleton<BookingService>();
builder.Services.AddSingleton<AppointmentService>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(allowedOrigins ?? Array.Empty<string>())
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// ========================================
// Middleware
// ========================================

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

if (app.Urls.Any(url => url.StartsWith("https://", StringComparison.OrdinalIgnoreCase)))
{
    app.UseHttpsRedirection();
}

app.UseCors("AllowFrontend");

// ========================================
// Routes
// ========================================

app.MapGet("/", () => "Welcome to Cars24 API");

app.MapGet("/db-check", async () =>
{
    try
    {
        var client = new MongoClient(connectionString);
        await client.ListDatabaseNamesAsync();

        return Results.Ok("MongoDB connected successfully.");
    }
    catch (Exception ex)
    {
        return Results.Problem($"MongoDB connection failed: {ex.Message}");
    }
});

app.MapControllers();

app.Run();