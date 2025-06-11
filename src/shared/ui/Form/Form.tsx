import type { HTMLAttributes } from "react"
import clsx from "clsx"
import { formButtonLayout, formHeader, formHeaderDescription, formHeaderTitle, formRootLayout } from "./Form.css"

function FormButtonLayout({ children, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={formButtonLayout} {...restProps}>
      {children}
    </div>
  )
}

function FormHeader({ children, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={formHeader} {...restProps}>
      {children}
    </div>
  )
}

function FormHeaderTitle({ children, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={formHeaderTitle} {...restProps}>
      {children}
    </h2>
  )
}

function FormHeaderDescription({ children, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={formHeaderDescription} {...restProps}>
      {children}
    </p>
  )
}

function FormRootLayout({ children, className, ...restProps }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={clsx(formRootLayout, className)} {...restProps}>
      {children}
    </section>
  )
}

export { FormHeader, FormHeaderTitle, FormHeaderDescription, FormButtonLayout, FormRootLayout }
