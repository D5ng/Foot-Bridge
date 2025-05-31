import { type HTMLAttributes } from "react"
import clsx from "clsx"
import { Slot, Slottable } from "../lib"
import { badge, badgeContent, type BadgeVariants } from "./Badge.css"

interface Props<T> extends HTMLAttributes<T>, BadgeVariants {
  asChild?: boolean
}

export default function Badge<T extends HTMLElement = HTMLElement>({
  asChild,
  children,
  variant,
  className,
  ...restProps
}: Props<T>) {
  const Element = asChild ? Slot : "span"

  return (
    <Element className={clsx(badge({ variant }), className)} {...restProps}>
      <span className={badgeContent}>
        <Slottable>{children}</Slottable>
      </span>
    </Element>
  )
}
