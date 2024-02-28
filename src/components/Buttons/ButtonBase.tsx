import { InputHTMLAttributes, PropsWithChildren } from "react";

interface ButtonBaseProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export default function ButtonBase({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonBaseProps>) {
  return <button className={`w-32 ${className}`} {...rest}>{children}</button>;
}
