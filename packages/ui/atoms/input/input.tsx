import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { HTMLInputTypeAttribute, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./input.css";

interface InputProps {
  className?: string;
  defaultValue?: string | number | readonly string[];
  errorMessage?: string;
  label: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
}

export const Input: React.FC<InputProps> = ({
  className,
  defaultValue,
  errorMessage,
  label,
  placeholder,
  type,
}) => {
  const id = useRef(`input-${uuidv4()}`).current;
  const errorId = `${id}-error`;
  const hasError = !!errorMessage;
  const inputClassName = `input__${hasError ? "error" : ""}`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={id}
          id={id}
          className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${inputClassName}`}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={hasError}
          aria-describedby={errorId}
        />
        {hasError ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {hasError ? (
        <p className="mt-2 text-sm text-red-600" id={errorId}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};
