import * as React from "react";

type TextInputProps = {
  name: string,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  type?: string,
  label?: string,
  className?: string,
  placeholder?: string,
};

export default function TextInput({
  name,
  type = 'text',
  onChange = () => {},
  value,
  label,
  className,
  placeholder,
}: TextInputProps) {
  return (
    <div className="flex flex-col justify-start items-start">
    {
      label !== null ? (<label className="w-24 h-6 text-sm font-semibold">{label}</label>
      ): (<></>)
    }
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        className={`border px-3 py-2 border-gray-300 rounded-md focus:outline-green-600 ${className}`}
      />
    </div>
  );
}
