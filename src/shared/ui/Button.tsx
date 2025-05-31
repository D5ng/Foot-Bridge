import type { ButtonHTMLAttributes } from "react"
import { type RecipeVariants } from "@vanilla-extract/recipes"
import clsx from "clsx"
import { Slot, Slottable } from "../lib"
import { button } from "./Button.css"

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  asChild?: boolean
}

export default function Button({ children, asChild, className, variant = "primary", ...restProps }: Props) {
  const Element = asChild ? Slot : "button"
  return (
    <Element className={clsx(button({ variant }), className)} {...restProps}>
      <Slottable>{children}</Slottable>
    </Element>
  )
}
