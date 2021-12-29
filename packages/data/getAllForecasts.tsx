import { request, gql } from "graphql-request";

const endpoint = "https://localhost:7256/graphql";

type WeatherForecast = {
  id: string;
  summary: string;
  temperatureC: number;
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
              date
            }
          }
        }
      }
    `
  );

  return weatherForecasts.edges.map((edge: any) => edge.node);
}
