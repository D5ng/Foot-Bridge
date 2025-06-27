import { useCallback, useEffect, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from "react"

interface Params<T> {
  prop?: T
  defaultProp: T
  onChange?: (value: T) => void
}

/**
 * useControllableState
 * @description 외부에서 제어되는 상태를 관리하거나, 내부 상태로 제어하는 훅
 * @param defaultValue 기본값
 * @param prop 외부에서 제어되는 값
 * @param onChange 값이 변경될 때 호출되는 콜백
 * @returns
 */

export function useControllableState<T>({ prop, defaultProp, onChange }: Params<T>) {
  const [unControlledProp, setUnControlledProp, onChangeRef] = useUnControllableState({ defaultProp, onChange })

  const isControlled = prop !== undefined
  const value = isControlled ? prop : unControlledProp

  const setValue = useCallback<Dispatch<SetStateAction<T>>>(
    (nextValue) => {
      if (isControlled) {
        const value = isFunction(nextValue) ? nextValue(prop) : nextValue

        if (value !== prop) {
          onChangeRef.current?.(value)
        }
      } else {
        setUnControlledProp(nextValue)
      }
    },
    [isControlled, prop, onChangeRef, setUnControlledProp]
  )

  return [value, setValue] as const
}

function useUnControllableState<T>({
  defaultProp,
  onChange,
}: Params<T>): [T, Dispatch<SetStateAction<T>>, RefObject<((value: T) => void) | undefined>] {
  const [value, setValue] = useState<T>(defaultProp)

  const prevValueRef = useRef(value)
  const onChangeRef = useRef(onChange)

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value)
      prevValueRef.current = value
    }
  }, [value])

  return [value, setValue, onChangeRef]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === "function"
}
