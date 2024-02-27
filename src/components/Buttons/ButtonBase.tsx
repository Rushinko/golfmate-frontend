import * as React from "react";

type ButtonBaseProps = {
  className?: string,
};

export default function ButtonBase({
  children,
  className
}: React.PropsWithChildren<ButtonBaseProps>) {
  return <button className={`w-32 h-8 ${className}`} >{children}</button>;
}
