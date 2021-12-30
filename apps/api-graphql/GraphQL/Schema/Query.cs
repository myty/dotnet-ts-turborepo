using GraphQL.Relay.Types;
using Monorepo.Api.GraphQL.Data;
using Monorepo.Api.GraphQL.GraphQL.Types;

namespace Monorepo.Api.GraphQL.GraphQL.Schema
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
