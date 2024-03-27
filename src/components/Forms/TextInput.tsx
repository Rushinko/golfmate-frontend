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
  error?: boolean,
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
  error = false,
  ...rest
}: TextInputProps) {
  return (
    <div className="flex flex-col justify-start items-start">
    {
      label !== null ? (<label className="w-32 h-6 text-sm font-semibold dark:text-zinc-100">{label}</label>
      ): (<></>)
    }
      <input
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        name={name}
        type={type}
        className={`border px-3 py-2 ${error ? 'border-red-600 dark:border-red-500' : 'border-zinc-700 dark:border-zinc-700' }border-zinc-700 dark:bg-panelAccent dark:focus:ring-0 ring-0 rounded-md outline-none focus:border-green-700 dark:text-zinc-100 dark:caret-zinc-100 ${className}`}
        {...rest}
      />
    </div>
  );
}
