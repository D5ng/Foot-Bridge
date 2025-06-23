import type { TextareaHTMLAttributes } from "react"
import clsx from "clsx"
import { textarea } from "./Textarea.css"

export default function Textarea({
  className,
  error = false,
  ...restProps
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return <textarea className={clsx(textarea({ error }), className)} {...restProps} />
}
