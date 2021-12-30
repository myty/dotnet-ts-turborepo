using Monorepo.Api.GraphQL.Models;

namespace Monorepo.Api.GraphQL.Data
{
    public static class WeatherForecastDatabase
    {
        private static readonly Lazy<IList<string>> _summaries =
            new(
                () =>
                    new List<string>
                    {
                        "Balmy",
                        "Bracing",
                        "Chilly",
                        "Cool",
                        "Freezing",
                        "Hot",
                        "Mild",
                        "Scorching",
                        "Sweltering",
                        "Warm",
                    }
            );

        private static readonly Lazy<IList<WeatherForecast>> _forecasts =
            new(
                () =>
                    Enumerable
                        .Range(1, 16)
                        .Select(
                            index =>
                                new WeatherForecast(
                                    Id: index + 1,
                                    Date: DateTime.Now.AddDays(index),
                                    TemperatureC: Random.Shared.Next(-20, 55),
                                    Summary: _summaries.Value[Random.Shared.Next(_summaries.Value.Count)]
                                )
                        )
                        .ToList()
            );

        public static IEnumerable<WeatherForecast> GetWeatherForecasts() => _forecasts.Value;

        public static WeatherForecast? GetById(string id) =>
            _forecasts.Value.FirstOrDefault(t => t.Id == long.Parse(id));
    }
}
