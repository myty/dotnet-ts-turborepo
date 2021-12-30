export enum LoadingIndicatorSize {
  Small,
  Base,
  Large,
}

interface LoadingIndicatorProps {
  size?: LoadingIndicatorSize;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = LoadingIndicatorSize.Base,
}) => {
  const sizeClassName = getSizeClassName(size);

  return (
    <div>
      <div
        style={{ borderTopColor: "transparent" }}
        className={`${sizeClassName} border-indigo-500 border-solid rounded-full animate-spin`}
      ></div>
    </div>
  );
};

function getSizeClassName(size: LoadingIndicatorSize): string {
  switch (size) {
    case LoadingIndicatorSize.Small:
      return "w-4 h-4 border";
    case LoadingIndicatorSize.Large:
      return "w-16 h-16 border-4";
    default:
      return "w-8 h-8 border-2";
  }
}
