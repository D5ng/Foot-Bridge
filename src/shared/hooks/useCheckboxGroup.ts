import { useState } from "react"

interface Params<T> {
  defaultValues?: T[]
  callback?: (items: T[]) => void
}

export function useCheckboxGroup<T extends string>({ defaultValues = [], callback }: Params<T> = {}) {
  const [checkedItems, setCheckedItems] = useState<T[]>(defaultValues)

  const onChange = (checkedItem: T) => {
    const updatedItems = checkedItems.includes(checkedItem)
      ? checkedItems.filter((item) => item !== checkedItem)
      : [...checkedItems, checkedItem]

    setCheckedItems(updatedItems)
    callback?.(updatedItems)
  }

  return {
    checkedItems,
    setCheckedItems,
    onChange,
  }
}
