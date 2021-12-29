namespace Shelter.Api.GraphQL.Models
{
    public record Tenant(
        Guid Id,
        string Name,
        string Description,
        int? FamilyMemberCount,
        DateTimeOffset AddedOn,
        DateTimeOffset? Deadline,
        string? ImageUrl
    );
}
