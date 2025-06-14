import type { HTMLAttributes } from "react"
import clsx from "clsx"
import {
  formLayoutButtonLayout,
  formLayoutHeader,
  formLayoutHeaderDescription,
  formLayoutHeaderTitle,
  formLayoutRoot,
} from "./FormLayout.css"

function FormLayoutButtonLayout({ children, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={formLayoutButtonLayout} {...restProps}>
      {children}
    </div>
  )
}

function FormLayoutHeader({ children, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={formLayoutHeader} {...restProps}>
      {children}
    </div>
  )
}

function FormLayoutHeaderTitle({ children, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={formLayoutHeaderTitle} {...restProps}>
      {children}
    </h2>
  )
}

function FormLayoutHeaderDescription({ children, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={formLayoutHeaderDescription} {...restProps}>
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
