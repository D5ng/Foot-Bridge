import { type HTMLAttributes } from "react"
import clsx from "clsx"
import { Slot, Slottable } from "@/shared/lib"
import { badge, type BadgeVariants } from "./Badge.css"

interface Props<T> extends HTMLAttributes<T>, BadgeVariants {
  asChild?: boolean
}

export default function Badge<T extends HTMLElement = HTMLElement>({
  asChild,
  children,
  variant = "default",
  className,
  ...restProps
}: Props<T>) {
  const Component = asChild ? Slot : "span"

  return (
    <Component className={clsx(badge({ variant }), className)} {...restProps}>
      <Slottable>{children}</Slottable>
    </Component>
  )
}
