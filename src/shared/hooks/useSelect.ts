import { useState } from "react"

interface Params<T> {
  defaultValues: T
  callback?: (item: T) => void
}

export function useSelect<T>({ defaultValues, callback }: Params<T>) {
  const [selectedItem, setSelectedItem] = useState<T>(defaultValues)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const onChange = (item: T) => {
    setSelectedItem(item)
    callback?.(item)
    close()
  }

  return {
    selectedItem,
    isOpen,
    toggle,
    open,
    close,
    onChange,
    setSelectedItem,
  }
}
