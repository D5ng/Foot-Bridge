import type { ButtonHTMLAttributes } from "react"
import { type RecipeVariants } from "@vanilla-extract/recipes"
import clsx from "clsx"
import { Slot, Slottable } from "@/shared/lib"
import { button } from "./Button.css"

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>

interface Props<T> extends ButtonHTMLAttributes<T>, ButtonVariants {
  asChild?: boolean
  isLoading?: boolean
}

export default function Button<T extends HTMLButtonElement = HTMLButtonElement>({
  children,
  asChild,
  className,
  variant = "primary",
  isLoading = false,
  ...restProps
}: Props<T>) {
  const Element = asChild ? Slot : "button"
  return (
    <Element className={clsx(button({ variant }), className)} {...restProps}>
      <Slottable>{isLoading ? "Loading..." : children}</Slottable>
    </Element>
  )
}
