import { Button, ButtonSize } from "@shelter/ui/atoms/button";
import { Card } from "@shelter/ui/molecules/card";
import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://localhost:7256/graphql";

type WeatherForecast = {
  id: string;
  summary: string;
  temperatureC: number;
  date: string;
};

function useAllForecasts() {
  return useQuery<Array<WeatherForecast>>("AllForecasts", async () => {
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

    return weatherForecasts.edges.map((edge) => edge.node);
  });
}

export default function Web() {
  const { data, isLoading, error } = useAllForecasts();

  return (
    <div className="m-8">
      <h2 className="text-xl font-bold">Buttons</h2>
      <Button size={ButtonSize.Small} className="mr-2" />
      <Button className="mr-2" />
      <Button size={ButtonSize.Large} />
      <h2 className="mt-8 text-xl font-bold">Cards</h2>
      <div className="flex flex-wrap justify-left">
        {isLoading
          ? null
          : data.map((forecast) => (
              <Card className="m-2" key={forecast.id} title={forecast.summary}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu tincidunt consectetur, nisi urna
                  aliquet nunc, eget porttitor nisl nunc euismod nunc.
                </p>
              </Card>
            ))}
      </div>
    </div>
  );
}
