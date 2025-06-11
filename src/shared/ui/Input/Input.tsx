import clsx from "clsx"
import { forwardRef, type InputHTMLAttributes } from "react"
import { input } from "./Input.css"

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...restProps }, ref) => {
    return <input ref={ref} className={clsx(input, className)} {...restProps} />
  }
)

export default Input
