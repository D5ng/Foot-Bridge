import type { TextareaHTMLAttributes } from "react"
import clsx from "clsx"
import { textarea } from "./Textarea.css"

export default function Textarea({ className, ...restProps }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={clsx(textarea, className)} {...restProps} />
}
