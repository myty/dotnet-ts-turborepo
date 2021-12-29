using GraphQL.Relay.Types;
using Shelter.Api.GraphQL.Data;
using Shelter.Api.GraphQL.GraphQL.Types;

namespace Shelter.Api.GraphQL.GraphQL.Schema
{
    public class Query : QueryGraphType
    {
        public Query()
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

            Connection<TenantGraphType>()
                .Name("tenants")
                .Resolve(
                    ctx =>
                        ConnectionUtils.ToConnection(
                            TentantDatabase.GetTenants(),
                            ctx
                        )
                );
        }
    }
}
