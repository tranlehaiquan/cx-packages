import React from "react";

interface Props {
  className?: string;
  label: string;
}

const TextField: React.FC<Props> = ({ label }) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        placeholder=""
      />
    </label>
  );
};

export default TextField;
