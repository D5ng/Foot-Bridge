import clsx from "clsx"
import { forwardRef, type InputHTMLAttributes } from "react"
import { input } from "./Input.css"
import { type InputVariants } from "./input.type"

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & InputVariants>(
  ({ className, error = false, ...restProps }, ref) => {
    return <input ref={ref} className={clsx(input({ error }), className)} {...restProps} />
  }
)

export default Input
