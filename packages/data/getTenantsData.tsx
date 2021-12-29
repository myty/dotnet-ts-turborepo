import { request, gql } from "graphql-request";

const endpoint = "https://localhost:7256/graphql";

type Tenant = {
  id: string;
  name: string;
  description: string;
  addedOn: Date;
  deadline?: Date;
  imageUrl?: string;
};

export async function getTenantsData(): Promise<Array<Tenant>> {
  const { tenants } = await request(
    endpoint,
    gql`
      query GetTenants {
        tenants {
          totalCount
          edges {
            node {
              id
              name
              description
              addedOn
              deadline
              imageUrl
            }
          }
        }
      }
    `
  );

  return tenants.edges.map((edge: any) => edge.node);
}
