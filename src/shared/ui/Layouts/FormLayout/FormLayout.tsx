import type { HTMLAttributes } from "react"
import clsx from "clsx"
import {
  formLayoutButtonLayout,
  formLayoutHeader,
  formLayoutHeaderDescription,
  formLayoutHeaderTitle,
  formLayoutRoot,
} from "./FormLayout.css"

function FormLayoutButtonLayout({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(formLayoutButtonLayout, className)} {...restProps}>
      {children}
    </div>
  )
}

function FormLayoutHeader({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(formLayoutHeader, className)} {...restProps}>
      {children}
    </div>
  )
}

function FormLayoutHeaderTitle({ children, className, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={clsx(formLayoutHeaderTitle, className)} {...restProps}>
      {children}
    </h2>
  )
}

function FormLayoutHeaderDescription({ children, className, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={clsx(formLayoutHeaderDescription, className)} {...restProps}>
      {children}
    </p>
  )
}

function FormLayoutRoot({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(formLayoutRoot, className)} {...restProps}>
      {children}
    </div>
  )
}

export { FormLayoutHeader, FormLayoutHeaderTitle, FormLayoutHeaderDescription, FormLayoutButtonLayout, FormLayoutRoot }
