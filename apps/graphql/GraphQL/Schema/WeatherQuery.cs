using GraphQL;
using GraphQL.Relay.Types;
using Shelter.Api.GraphQL.Models;

namespace Shelter.Api.GraphQL.GraphQL.Schema
{
    public class WeatherQuery : QueryGraphType
    {
        public WeatherQuery()
        {
            Name = "Query";

            Connection<WeatherForecastGraphType>()
                .Name("weatherForecasts")
                .Resolve(
                    ctx =>
                        ConnectionUtils.ToConnection(
                            WeatherForecastDatabase.GetWeatherForecasts(),
                            ctx
                        )
                );
        }
    }

    public class WeatherForecastGraphType : NodeGraphType<WeatherForecast>
    {
        public WeatherForecastGraphType()
        {
            Name = "WeatherForecast";

            Id(t => t.Id);
            Field(t => t.Date);
            Field(t => t.TemperatureC);
            Field(t => t.Summary);
        }

        public override WeatherForecast GetById(IResolveFieldContext<object> context, string id) =>
            WeatherForecastDatabase.GetWeatherForecastById(id) ?? throw new Exception("Not found");
    }

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
                                new WeatherForecast(
                                    index + 1,
                                    DateTime.Now.AddDays(index),
                                    Random.Shared.Next(-20, 55),
                                    _summaries.Value[Random.Shared.Next(_summaries.Value.Count)]
                                )
                        )
                        .ToList()
            );

        public static IEnumerable<WeatherForecast> GetWeatherForecasts() => _forecasts.Value;

        public static WeatherForecast? GetWeatherForecastById(string id) =>
            GetWeatherForecasts().FirstOrDefault(t => t.Id == long.Parse(id));
    }
}
