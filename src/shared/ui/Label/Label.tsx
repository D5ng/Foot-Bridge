import type { HTMLAttributes } from "react"
import clsx from "clsx"
import { label } from "./Label.css"

export default function Label({ children, className, ...restProps }: HTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={clsx(label, className)} {...restProps}>
      {children}
    </label>
  )
}
