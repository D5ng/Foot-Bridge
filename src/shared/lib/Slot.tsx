import { Children, cloneElement, type HTMLAttributes, isValidElement, type ReactElement, type ReactNode } from "react"
import Slottable from "./Slottable"

interface SlotProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function Slot({ children, ...restProps }: SlotProps) {
  const childrenArray = Children.toArray(children)
  const slottable = childrenArray.find(
    (children) => isValidElement(children) && children.type === Slottable
  ) as ReactElement<{
    children: ReactNode
  }>

  if (slottable) {
    const newElement = slottable.props.children
    const newChildren = childrenArray.map((child) => {
      if (child !== slottable) {
        return child
      }

      // Note: Children이 단일 요소가 아닌 여러개의 요소를 사용하면 안됨.
      if (Children.count(newElement) > 1) {
        // eslint-disable-next-line no-console
        console.warn("Slottable은 단일 요소로 사용해야 합니다.")
        return Children.only(null)
      }

      if (isValidElement(newElement)) {
        return (newElement.props as { children: ReactNode }).children
      }

      return null
    })

    return isValidElement(newElement) ? cloneElement(newElement, { ...restProps }, newChildren) : null
  }

  if (isValidElement(children)) {
    return cloneElement(children, { ...restProps, ...(children.props || {}) })
  }

  return null
}
