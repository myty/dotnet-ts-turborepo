namespace Monorepo.Api.GraphQL.Models
{
    public record WeatherForecast(
        long Id,
        DateTime Date,
        int TemperatureC,
        int TemperatureF,
        string Summary
    ) { }
}
