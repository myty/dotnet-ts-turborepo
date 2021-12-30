import { ImageCard, ImageHeight } from "@monorepo/ui/molecules/card";
import { LoadingIndicator } from "@monorepo/ui/atoms/loading-indicator";
import { getAllForecasts, WeatherForecast } from "@monorepo/data";
import { useQuery } from "react-query";
import { DateTime } from "luxon";
import { getImageUrl } from "../utils/weather-utils";

export default function Web() {
  const { data, isLoading } = useQuery("AllForecasts", getAllForecasts);

  return (
    <div className="m-8">
      <h2 className="mt-8 mb-2 text-xl font-bold">Forecasts</h2>
      <div className="flex flex-wrap gap-4 justify-left">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          data.map((weatherForecast) => (
            <ImageCard
              key={weatherForecast.id}
              title={formatDateTitle(weatherForecast)}
              imageHeight={ImageHeight.Base}
              imageUrl={getImageUrl(weatherForecast)?.src}
            >
              <div className="font-semibold">{weatherForecast.summary}</div>
              <div className="text-sm font-light">
                {weatherForecast.temperatureC} Celcius
              </div>
              <div className="text-sm font-light">
                {weatherForecast.temperatureF} Fahrenheit
              </div>
            </ImageCard>
          ))
        )}
      </div>
    </div>
  );
}

function formatDateTitle({ date }: WeatherForecast): string {
  return DateTime.fromISO(date).toLocaleString({
    month: "long",
    day: "numeric",
  });
}
