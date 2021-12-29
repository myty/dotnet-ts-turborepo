import React from "react";
import { CardProps } from "./card";

export enum ImageHeight {
  Short,
  Base,
  Tall,
}

interface ImageCardProps extends CardProps {
  imageHeight?: ImageHeight;
  imageUrl?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  className,
  imageHeight = ImageHeight.Base,
  imageUrl,
  title,
  children,
}) => {
  const imageHeightClass = getImageHeightClass(imageHeight);

  return (
    <a
      href="#"
      className={`${className} block max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
    >
      <div className={`w-full ${imageHeightClass} rounded-t-lg bg-indigo-500`}>
        {imageUrl && (
          <img
            className={`object-cover w-full ${imageHeightClass} rounded-t-lg`}
            src={imageUrl}
          />
        )}
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {getBody(children)}
      </div>
    </a>
  );
};

function getBody(children: React.ReactNode): React.ReactNode {
  if (typeof children === "string") {
    return (
      <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
    );
  }

  return children;
}

function getImageHeightClass(imageHeight: ImageHeight): string {
  switch (imageHeight) {
    case ImageHeight.Short:
      return "h-36";
    case ImageHeight.Tall:
      return "h-64";
    default:
      return "h-48";
  }
}
