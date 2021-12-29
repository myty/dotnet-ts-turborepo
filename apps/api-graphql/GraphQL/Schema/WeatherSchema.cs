using GraphQLSchema = GraphQL.Types.Schema;

namespace Shelter.Api.GraphQL.GraphQL.Schema
{
    public class WeatherSchema : GraphQLSchema
    {
        public WeatherSchema()
        {
            Query = new WeatherQuery();
        }
    }
}
