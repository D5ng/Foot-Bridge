/* eslint-disable no-unused-vars */
import clsx from "clsx"
import { useState, type HTMLAttributes, type ReactNode } from "react"
import { createScopedContext } from "@/shared/lib"
import { CheckIcon } from "@/shared/assets/images"
import {
  selectableListItem,
  selectableListItemIcon,
  selectableListItemLabel,
  selectableListWrapper,
} from "./SelectableList.css"

interface SelectableListContextValue {
  selectedValues: string[]
  onToggleValue: (value: string) => void
}

const SelectableListContext = createScopedContext()

const [SelectableListContextProvider, useSelectableListContext] = SelectableListContext<SelectableListContextValue>()

interface SelectableListProps {
  children: ReactNode
}

function SelectableList({ children }: SelectableListProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleToggleValue = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value]

    setSelectedValues(newSelectedValues)
  }

  return (
    <SelectableListContextProvider value={{ selectedValues, onToggleValue: handleToggleValue }}>
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
  onSelect?: (value: string) => void
  className?: string
}

function SelectableListItem({ children, className, onSelect, value }: SelectableListItemProps) {
  const { selectedValues, onToggleValue } = useSelectableListContext()
  const isSelected = selectedValues.includes(value)

  const handleClick = () => {
    onSelect?.(value)
    onToggleValue(value)
  }

  return (
    <li>
      <button
        className={clsx(selectableListItem({ variant: isSelected ? "selected" : "default" }), className)}
        onClick={handleClick}
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
