import { useState } from "react"

interface Params<T> {
  defaultValues: T
  callback?: (item: T) => void
}

export function useSelect<T>({ defaultValues, callback }: Params<T>) {
  const [selectedItem, setSelectedItem] = useState<T>(defaultValues)

  const onChange = (item: T) => {
    setSelectedItem(item)
    callback?.(item)
  }

  return {
    selectedItem,
    setSelectedItem,
    onChange,
  }
}
