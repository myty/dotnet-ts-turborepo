using GraphQL;
using GraphQL.Relay.Types;
using Shelter.Api.GraphQL.Data;
using Shelter.Api.GraphQL.Models;

namespace Shelter.Api.GraphQL.GraphQL.Types
{
    public class TenantGraphType : NodeGraphType<Tenant>
    {
        public TenantGraphType()
        {
            Name = nameof(Tenant);

            Id(t => t.Id);
            Field(t => t.Name);
            Field(t => t.Description);
            Field(t => t.AddedOn);
            Field(t => t.Deadline, nullable: true);
            Field(t => t.ImageUrl);
        }

        public override Tenant GetById(IResolveFieldContext<object> context, string id) =>
            TentantDatabase.GetById(id) ?? throw new Exception("Not found");
    }
}
