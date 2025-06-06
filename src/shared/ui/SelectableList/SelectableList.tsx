import clsx from "clsx"
import type { ButtonHTMLAttributes } from "react"
import { CheckIcon } from "@/shared/assets/images"
import { selectableList, selectableListIcon } from "./SelectableList.css"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean
}

export default function SelectableList({ children, isSelected, className, ...restProps }: Props) {
  return (
    <button
      className={clsx(selectableList({ variant: isSelected ? "selected" : "default" }), className)}
      {...restProps}
    >
      <span>{children}</span>
      <span className={selectableListIcon}>
        <img src={CheckIcon} alt="check" />
      </span>
    </button>
  )
}
