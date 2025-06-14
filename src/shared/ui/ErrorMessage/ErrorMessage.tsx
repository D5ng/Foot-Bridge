import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message"
import { errorMessage } from "./ErrorMessage.css"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: Record<string, any>
  name: string
}

export function ErrorMessage({ errors, name }: Props) {
  return (
    <HookFormErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className={errorMessage}>{message}</p>}
    />
  )
}
