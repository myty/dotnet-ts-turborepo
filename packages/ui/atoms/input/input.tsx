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
  value?: string | number | readonly string[];
}

export const Input: React.FC<InputProps> = ({
  className,
  defaultValue,
  errorMessage,
  label,
  placeholder,
  type,
  value,
}) => {
  const inputName = useRef(`input-${uuidv4()}`).current;
  const errorId = `${inputName}-error`;
  const hasError = !!errorMessage;
  const inputClassName = `input__${hasError ? "error" : ""}`;

  const inputProps: Partial<React.InputHTMLAttributes<HTMLInputElement>> = {
    ["aria-invalid"]: hasError ? "true" : "false",
  };

  return (
    <div className={className}>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={inputName}
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          {...inputProps}
          aria-describedby={errorId}
          className={`block w-full pr-10 focus:outline-none sm:text-sm rounded-md ${inputClassName}`}
          defaultValue={defaultValue}
          name={inputName}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {hasError ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ExclamationCircleIcon
              aria-hidden="true"
              className="w-5 h-5 text-red-500"
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
