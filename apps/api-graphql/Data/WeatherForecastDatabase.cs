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
                        "Freezing",
                        "Bracing",
                        "Chilly",
                        "Cool",
                        "Mild",
                        "Warm",
                        "Balmy",
                        "Hot",
                        "Sweltering",
                        "Scorching"
                    }
            );

        private static readonly Lazy<IList<WeatherForecast>> _forecasts =
            new(
                () =>
                    Enumerable
                        .Range(1, 16)
                        .Select(
                            index =>
                            {
                                var tempC = Random.Shared.Next(-20, 55);
                                var tempF = 32 + (int)(tempC / 0.5556);
                                var summary = _summaries.Value[CalculateSummaryIndex(tempC)];

                                return new WeatherForecast(
                                    Id: index + 1,
                                    Date: DateTime.Now.AddDays(index),
                                    TemperatureC: tempC,
                                    TemperatureF: tempF,
                                    Summary: summary
                                );
                            }
                        )
                        .ToList()
            );

        public static IEnumerable<WeatherForecast> GetWeatherForecasts() => _forecasts.Value;

        public static WeatherForecast? GetById(string id) =>
            _forecasts.Value.FirstOrDefault(t => t.Id == long.Parse(id));

        private static int CalculateSummaryIndex(int tempC)
        {
            return Convert.ToInt32(
                Math.Round(
                    (Convert.ToDecimal(tempC) + 20m) / 75m
                        * Convert.ToDecimal(_summaries.Value.Count)
                )
            );
        }
    }
}
