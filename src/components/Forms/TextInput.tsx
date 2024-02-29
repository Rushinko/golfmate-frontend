import * as React from "react";

interface TextInputProps  extends React.ComponentPropsWithoutRef<"input">{
  name: string,
  value?: string,
  required?: boolean,
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
  required = false,
  label,
  className,
  placeholder,
  ...rest
}: TextInputProps) {
  return (
    <div className="flex flex-col justify-start items-start">
    {
      label !== null ? (<label className="w-32 h-6 text-sm font-semibold">{label}</label>
      ): (<></>)
    }
      <input
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        name={name}
        type={type}
        className={`border px-3 py-2 border-gray-300 rounded-md focus:outline-green-600 ${className}`}
        {...rest}
      />
    </div>
  );
}
