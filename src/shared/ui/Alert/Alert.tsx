import clsx from "clsx"
import type { HTMLAttributes, ReactNode } from "react"
import { createScopedContext } from "@/shared/utils"
import { Slot } from "@/shared/lib"
import { alertContent, alertList, alertTitle, alertWrapper, type AlertVariants } from "./Alert.css"

interface AlertContextValue {
  variant?: AlertVariants["variant"]
}

const AlertContext = createScopedContext()

const [AlertContextProvider, useAlertContext] = AlertContext<AlertContextValue>()

interface AlertProps extends AlertContextValue {
  children: ReactNode
}

function Alert({ children, variant = "informative" }: AlertProps) {
  return <AlertContextProvider value={{ variant }}>{children}</AlertContextProvider>
}

function AlertWrapper({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const { variant } = useAlertContext()

  return (
    <div className={clsx(alertWrapper({ variant }), className)} {...restProps}>
      {children}
    </div>
  )
}

function AlertTitle({ children, className, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx(alertTitle, className)} {...restProps}>
      {children}
    </h3>
  )
}

interface AlertContentProps extends HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
}

function AlertContent({ children, className, asChild, ...restProps }: AlertContentProps) {
  const Element = asChild ? Slot : "p"

  return (
    <Element className={clsx(alertContent, className)} {...restProps}>
      {children}
    </Element>
  )
}

function AlertList({ children, className, ...restProps }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={clsx(alertList, className)} {...restProps}>
      {children}
    </ul>
  )
}

function AlertListItem({ children, className, ...restProps }: HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={clsx(alertContent, className)} {...restProps}>
      {children}
    </li>
  )
}

export { Alert, AlertWrapper, AlertTitle, AlertContent, AlertList, AlertListItem }
