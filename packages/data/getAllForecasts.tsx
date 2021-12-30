import { request, gql } from "graphql-request";

const endpoint = "https://localhost:7256/graphql";

export type WeatherForecast = {
  id: string;
  summary: string;
  temperatureC: number;
  temperatureF: number;
  date: string;
};

export async function getAllForecasts(): Promise<Array<WeatherForecast>> {
  const { weatherForecasts } = await request(
    endpoint,
    gql`
      query AllForecasts {
        weatherForecasts {
          edges {
            node {
              id
              summary
              temperatureC
              temperatureF
              date
            }
          }
        }
      }
    `
  );

  return (weatherForecasts?.edges ?? []).map((edge: any) => edge.node);
}
