import clsx from "clsx"
import { type HTMLAttributes, type ReactNode } from "react"
import { createScopedContext } from "@/shared/lib"
import { CheckIcon } from "@/shared/assets/images"
import { useCheckboxGroup } from "@/shared/hooks"
import {
  selectableListItem,
  selectableListItemIcon,
  selectableListItemLabel,
  selectableListWrapper,
} from "./SelectableList.css"

interface SelectableListContextValue {
  defaultValues?: string[]
  _internalSelectedValues: string[]
  onToggleValue(value: string): void
}

const SelectableListContext = createScopedContext()

const [SelectableListContextProvider, useSelectableListContext] = SelectableListContext<SelectableListContextValue>()

interface SelectableListProps extends Omit<SelectableListContextValue, "_internalSelectedValues" | "onToggleValue"> {
  children: ReactNode
  onValueChange?(value: string[]): void
}

function SelectableList({ children, onValueChange, defaultValues }: SelectableListProps) {
  const { checkedItems, onChange } = useCheckboxGroup<string>({ defaultValues, callback: onValueChange })

  return (
    <SelectableListContextProvider value={{ _internalSelectedValues: checkedItems, onToggleValue: onChange }}>
      {children}
    </SelectableListContextProvider>
  )
}

type SelectableListWrapperProps = HTMLAttributes<HTMLUListElement>

function SelectableListWrapper({ children, className, ...restProps }: SelectableListWrapperProps) {
  return (
    <ul className={clsx(selectableListWrapper, className)} {...restProps}>
      {children}
    </ul>
  )
}

type SelectableListItemChildren = ReactNode | ((props: { isSelected: boolean }) => ReactNode)

interface SelectableListItemProps {
  children: SelectableListItemChildren
  value: string
  className?: string
  onSelect?(value: string): void
}

function SelectableListItem({ children, className, value }: SelectableListItemProps) {
  const { _internalSelectedValues, onToggleValue } = useSelectableListContext()
  const isSelected = _internalSelectedValues.includes(value)

  return (
    <li>
      <button
        className={clsx(selectableListItem({ variant: isSelected ? "selected" : "default" }), className)}
        onClick={() => onToggleValue(value)}
        aria-pressed={isSelected}
        type="button"
      >
        {typeof children === "function" ? children({ isSelected }) : children}
      </button>
    </li>
  )
}

type SelectableListItemLabelProps = HTMLAttributes<HTMLSpanElement>

function SelectableListItemLabel({ children, className, ...restProps }: SelectableListItemLabelProps) {
  return (
    <span className={clsx(selectableListItemLabel, className)} {...restProps}>
      {children}
    </span>
  )
}

type SelectableListItemIconProps = Omit<HTMLAttributes<HTMLSpanElement>, "children">

function SelectableListItemIcon({ className, ...restProps }: SelectableListItemIconProps) {
  return (
    <span className={clsx(selectableListItemIcon, className)} {...restProps}>
      <img src={CheckIcon} alt="Selected" />
    </span>
  )
}

export { SelectableList, SelectableListWrapper, SelectableListItem, SelectableListItemLabel, SelectableListItemIcon }
