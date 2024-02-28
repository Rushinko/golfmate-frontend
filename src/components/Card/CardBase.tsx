import { PropsWithChildren } from "react";


type CardBaseProps = {
  align?: 'center' | 'start' | 'end'
  className?: string
}

export default function CardBase({ align = 'start', className, children }: PropsWithChildren<CardBaseProps>) {
  return (
    <div
      className={`w-96 h-[496] p-8 justify-${align} items-center flex-col rounded-xl bg-white backdrop-blur-sm shadow-md flex ${className}`}
    >
      {children}
    </div>
  );
}
