import { WeatherForecast } from "@monorepo/data";
import balmy from "../images/balmy.jpg";
import bracing from "../images/bracing.jpg";
import chilly from "../images/chilly.jpg";
import cool from "../images/cool.jpg";
import freezing from "../images/freezing.jpg";
import hot from "../images/hot.jpg";
import mild from "../images/mild.jpg";
import scorching from "../images/scorching.jpg";
import sweltering from "../images/sweltering.jpg";
import warm from "../images/warm.jpg";

export function getImageUrl({
  summary,
}: WeatherForecast): StaticImageData | undefined {
  switch (summary) {
    case "Balmy":
      return balmy;
    case "Bracing":
      return bracing;
    case "Chilly":
      return chilly;
    case "Cool":
      return cool;
    case "Freezing":
      return freezing;
    case "Hot":
      return hot;
    case "Mild":
      return mild;
    case "Scorching":
      return scorching;
    case "Sweltering":
      return sweltering;
    case "Warm":
      return warm;
  }

  return undefined;
}
