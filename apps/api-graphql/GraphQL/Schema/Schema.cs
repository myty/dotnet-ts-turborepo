using GraphQLSchema = GraphQL.Types.Schema;

namespace Monorepo.Api.GraphQL.GraphQL.Schema
{
    public class Schema : GraphQLSchema
    {
        public Schema()
        {
            Query = new Query();
        }
    }
}
