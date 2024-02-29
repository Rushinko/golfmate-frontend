import { InputHTMLAttributes, PropsWithChildren } from "react";

interface ButtonBaseProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string,
  disabled?: boolean,
  disabledClassName?: string,
}

export default function ButtonBase({
  children,
  className,
  disabled,
  disabledClassName,
  ...rest
}: PropsWithChildren<ButtonBaseProps>) {
  return <button className={`w-32  ${className}`} {...rest}>{children}</button>;
}
