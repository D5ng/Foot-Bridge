/* eslint-disable no-unused-vars */
import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react"
import clsx from "clsx"
import { createScopedContext } from "@/shared/lib"
import { useSelect } from "@/shared/hooks"
import {
  segmentedContent,
  segmentedControlList,
  segmentedControlOption,
  segmentedControlWrapper,
} from "./SegmentedControl.css"

interface SegmentedControlContextValue {
  defaultValue: string
  selectedItem: string | null
  onChange(value: string): void
}

const SegmentedControlsContext = createScopedContext()

const [SegmentedControlsContextProvider, useSegmentedControlsContext] =
  SegmentedControlsContext<SegmentedControlContextValue>()

interface SegmentControlProps extends Pick<SegmentedControlContextValue, "defaultValue"> {
  children: ReactNode
  onValueChange?(value: string): void
}

function SegmentedControl({ children, defaultValue, onValueChange }: SegmentControlProps) {
  const { selectedItem, onChange } = useSelect<string>({ defaultValues: defaultValue, callback: onValueChange })

  return (
    <SegmentedControlsContextProvider value={{ defaultValue, selectedItem, onChange }}>
      {children}
    </SegmentedControlsContextProvider>
  )
}

function SegmentedControlWrapper({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(segmentedControlWrapper, className)} {...restProps}>
      {children}
    </div>
  )
}

function SegmentedControlList({ children, className, ...restProps }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={clsx(segmentedControlList, className)} {...restProps}>
      {children}
    </ul>
  )
}

interface SegmentedControlOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function SegmentedControlOption({ children, className, value, ...restProps }: SegmentedControlOptionProps) {
  const context = useSegmentedControlsContext()
  const isSelected = context.selectedItem === value

  return (
    <li className={clsx(segmentedControlOption, className, isSelected && "selected")}>
      <button type="button" {...restProps} onClick={() => context.onChange(value)}>
        {children}
      </button>
    </li>
  )
}

interface SegmentedContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

function SegmentedContent({ children, className, value, ...restProps }: SegmentedContentProps) {
  const context = useSegmentedControlsContext()
  const isSelected = context.selectedItem === value

  if (!isSelected) {
    return null
  }

  return (
    <div className={clsx(segmentedContent, className)} {...restProps}>
      {children}
    </div>
  )
}

export { SegmentedControl, SegmentedControlWrapper, SegmentedControlList, SegmentedControlOption, SegmentedContent }
