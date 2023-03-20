import React from "react";
import { useFormContext, FieldError } from "react-hook-form";
import clsx from "clsx";

interface Props {
  className?: string;
  label?: string;
  name: string;
  type: string;
}

const TextField: React.FC<Props> = ({ label, name, type, className }) => {
  const formMethods = useFormContext();
  const { errors } = formMethods.formState;
  const error = errors[name] as FieldError;

  return (
    <label className={clsx("block", className)}>
      {label && <span className="text-gray-700">{label}</span>}
      {type === "textarea" ? (
        <textarea
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          {...formMethods.register(name)}
        />
      ) : (
        <input
          type={type}
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          {...formMethods.register(name)}
        />
      )}
      {error && <span className="text-red-600 text-sm">{error.message}</span>}
    </label>
  );
};

export default TextField;
