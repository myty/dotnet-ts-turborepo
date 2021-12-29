import React from "react";

export interface CardProps {
  className?: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({ className, title, children }) => {
  return (
    <a
      href="#"
      className={`${className} block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      {getBody(children)}
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
