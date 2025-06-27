import { useState } from "react"

export function useToggle(defaultValue?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultValue || false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const setOpen = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  return { isOpen, toggle, open, close, setOpen }
}
