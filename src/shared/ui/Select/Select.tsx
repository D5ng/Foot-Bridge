import type { HTMLAttributes } from "react"
import { clsx } from "clsx"
import { createScopedContext } from "@/shared/lib"
import { useSelect } from "@/shared/hooks"
import { colorVars } from "@/shared/tokens"
import {
  selectOptionListItem,
  selectOptionListItemButton,
  selectOptionList,
  selectTrigger,
  selectTriggerIcon,
  selectTriggerValue,
  selectWrapper,
} from "./Select.css"
import { ArrowIcon } from "../icons"

const SelectContext = createScopedContext()

interface SelectContextValue {
  selectedItem: string
  onChange(value: string): void
  toggle(): void
  isOpen: boolean
}

const [SelectProvider, useSelectContext] = SelectContext<SelectContextValue>()

interface SelectProps {
  children: React.ReactNode
  defaultValues?: string
  onValueChange?(value: string): void
}

function Select({ children, onValueChange, defaultValues = "" }: SelectProps) {
  const { selectedItem, onChange, toggle, isOpen } = useSelect<string>({ defaultValues, callback: onValueChange })

  return <SelectProvider value={{ selectedItem, onChange, toggle, isOpen }}>{children}</SelectProvider>
}

function SelectWrapper({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(selectWrapper, className)} {...restProps}>
      {children}
    </div>
  )
}

function SelectTrigger({
  children,
  className,
  ...restProps
}: Omit<HTMLAttributes<HTMLButtonElement>, "type" | "onClick">) {
  const { selectedItem, toggle } = useSelectContext()

  return (
    <button
      type="button"
      className={clsx(selectTrigger({ variant: selectedItem ? "selected" : "default" }), className)}
      onClick={toggle}
      {...restProps}
    >
      {selectedItem}
      {children}
    </button>
  )
}

interface SelectTriggerValueProps {
  placeholder?: string
  className?: string
}

function SelectTriggerValue({ className, placeholder }: SelectTriggerValueProps) {
  const { selectedItem } = useSelectContext()

  if (selectedItem) return null

  return <div className={clsx(selectTriggerValue, className)}>{selectedItem || placeholder}</div>
}

function SelectTriggerIcon() {
  const { selectedItem, isOpen } = useSelectContext()

  return (
    <div className={selectTriggerIcon}>
      <ArrowIcon
        direction={isOpen ? "up" : "down"}
        color={selectedItem ? colorVars.highlight[300] : colorVars.neutral.light[300]}
        size={16}
      />
    </div>
  )
}

function SelectOptionList({ children, className, ...restProps }: HTMLAttributes<HTMLUListElement>) {
  const { isOpen } = useSelectContext()

  if (!isOpen) return null

  return (
    <ul className={clsx(selectOptionList, className)} {...restProps}>
      {children}
    </ul>
  )
}

interface SelectOptionProps extends HTMLAttributes<HTMLLIElement> {
  value: string
}

function SelectOption({ children, className, value, ...restProps }: SelectOptionProps) {
  const { onChange } = useSelectContext()

  return (
    <li className={selectOptionListItem}>
      <button type="button" onClick={() => onChange(value)} className={clsx(selectOptionListItemButton, className)}>
        {children}
      </button>
    </li>
  )
}

export { Select, SelectWrapper, SelectTrigger, SelectTriggerIcon, SelectTriggerValue, SelectOptionList, SelectOption }
