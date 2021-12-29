using GraphQL;
using GraphQL.Relay.Types;
using Shelter.Api.GraphQL.Data;
using Shelter.Api.GraphQL.Models;

namespace Shelter.Api.GraphQL.GraphQL.Types
{
    public class WeatherForecastGraphType : NodeGraphType<WeatherForecast>
    {
        public WeatherForecastGraphType()
        {
            Name = nameof(WeatherForecast);

            Id(t => t.Id);
            Field(t => t.Date);
            Field(t => t.TemperatureC);
            Field(t => t.TemperatureF);
            Field(t => t.Summary);
        }

        public override WeatherForecast GetById(IResolveFieldContext<object> context, string id) =>
            WeatherForecastDatabase.GetById(id) ?? throw new Exception("Not found");
    }
}
