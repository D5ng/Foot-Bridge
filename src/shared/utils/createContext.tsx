import { createContext, useContext, type ReactNode } from "react"

export function createScopedContext() {
  function createCustomContext<ContextValueType extends object | null>(defaultContext?: ContextValueType) {
    const BaseContext = createContext<ContextValueType | undefined>(defaultContext)

    const Provider = ({ children, value }: { children: ReactNode; value: ContextValueType }) => {
      return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>
    }

    const useCustomContext = () => {
      const context = useContext(BaseContext)

      if (!context) {
        throw new Error("useContext must be used within a Provider")
      }

      return context
    }

    return [Provider, useCustomContext] as const
  }

  return createCustomContext
}
