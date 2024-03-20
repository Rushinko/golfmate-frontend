import { Children, PropsWithChildren } from "react"
import CardBase from "./CardBase"

type LoginCardBaseProps = {
  title: string | JSX.Element
  subtitle: string | JSX.Element
  footer: string | JSX.Element
  className?: string
}

export function LoginCardBase({title, subtitle, footer, className, children}: PropsWithChildren<LoginCardBaseProps>) {
  return (
    <CardBase className={className}>
      <div className="text-3xl flex flex-row font-sans mb-4 dark:text-zinc-100">
        {title}
      </div>
      <span className="dark:text-zinc-100">
        {subtitle}
      </span>
      <div className="flex flex-col justify-start items-center mb-4 dark:text-zinc-100">
        {children}
        {footer}
      </div>
    </CardBase>
  )
}