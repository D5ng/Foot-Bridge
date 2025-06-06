import { useState, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react"
import clsx from "clsx"
import { createScopedContext } from "@/shared/utils"
import {
  segmentedContent,
  segmentedControlList,
  segmentedControlOption,
  segmentedControlWrapper,
} from "./SegmentedControl.css"

interface SegmentedControlValueType {
  defaultValue: string
  selectedValue: string
  onSelectedValue: (value: string) => void
}

const SegmentedControlsContext = createScopedContext()

const [SegmentedControlsContextProvider, useSegmentedControlsContext] =
  SegmentedControlsContext<SegmentedControlValueType>()

interface SegmentControlProps extends Pick<SegmentedControlValueType, "defaultValue"> {
  children: ReactNode
}

function SegmentedControl({ children, defaultValue }: SegmentControlProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const onSelectedValue = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <SegmentedControlsContextProvider value={{ defaultValue, selectedValue, onSelectedValue }}>
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
  const isSelected = context.selectedValue === value

  return (
    <li className={clsx(segmentedControlOption, className, isSelected && "selected")}>
      <button type="button" {...restProps} onClick={() => context.onSelectedValue(value)}>
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
  const isSelected = context.selectedValue === value

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
