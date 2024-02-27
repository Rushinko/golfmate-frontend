import * as React from "react";

type TextInputProps = {
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
};

export default function TextInput({
  name,
  label,
  className,
  placeholder,
}: TextInputProps) {
  return (
    <>
      label !== null ? (<label>{label}</label>
      ): (<></>)
      <input
        placeholder={placeholder}
        name={name}
        type="text"
        className={`${className}`}
      />
    </>
  );
}
