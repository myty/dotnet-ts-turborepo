using Monorepo.Api.GraphQL.Models;

namespace Monorepo.Api.GraphQL.Data
{
    public static class TentantDatabase
    {
        private static readonly Lazy<IList<Tenant>> _tenants =
            new(
                () =>
                    Enumerable
                        .Range(1, 16)
                        .Select(
                            index =>
                                new Tenant(
                                    Id: Guid.NewGuid(),
                                    Name: $"Tenant {index}",
                                    Description: $"Tenant {index} description",
                                    FamilyMemberCount: null,
                                    AddedOn: DateTimeOffset.Now.AddDays(index),
                                    Deadline: DateTimeOffset.Now.AddDays(index + 14),
                                    ImageUrl: $"https://via.placeholder.com/640/6366F1/FFFFFF?text=img_tenant_{index}"
                                )
                        )
                        .ToList()
            );

        public static IEnumerable<Tenant> GetTenants() => _tenants.Value;

        public static Tenant? GetById(string id) =>
            _tenants.Value.FirstOrDefault(t => t.Id == Guid.Parse(id));
    }
}
