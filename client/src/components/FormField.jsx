import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSupriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className="font-semiblod text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Suprise Me
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
