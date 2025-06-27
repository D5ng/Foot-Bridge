import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type ReactNode,
} from "react"
import clsx from "clsx"
import { createPortal } from "react-dom"
import type { RecipeVariants } from "@vanilla-extract/recipes"
import { createScopedContext } from "@/shared/lib"
import { useControllableState } from "@/shared/hooks"
import { modalButton, modalButtonLayout, modalContent, modalDescription, modalOverlay, modalTitle } from "./Modal.css"
import Button, { type ButtonVariants } from "../Button/Button"

interface ModalContextValue {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const crateModalContext = createScopedContext()

const [ModalProvider, useModalContext] = crateModalContext<ModalContextValue>()

interface ModalProps {
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  children: ReactNode
}

function Modal({ children, isOpen: isOpenProp, onOpenChange }: ModalProps) {
  const [isOpen, setIsOpen] = useControllableState({
    prop: isOpenProp,
    defaultProp: isOpenProp ?? false,
    onChange: onOpenChange,
  })

  return <ModalProvider value={{ isOpen, onOpenChange: setIsOpen }}>{children}</ModalProvider>
}

interface ModalPortalProps {
  containerElement?: HTMLElement
  children: ReactNode
}

function ModalPortal({ containerElement, children }: ModalPortalProps) {
  const { isOpen } = useModalContext()
  const container = containerElement || document.body
  return isOpen ? createPortal(children, container) : null
}

function ModalTrigger({ children, className, onClick, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useModalContext()

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onOpenChange(true)
    onClick?.(event)
  }

  return (
    <Button className={clsx(modalButton, className)} onClick={handleClick} {...restProps}>
      {children}
    </Button>
  )
}

function ModalClose({
  className,
  children,
  variant,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants) {
  const { onOpenChange } = useModalContext()

  return (
    <Button
      variant={variant}
      className={clsx(modalButton, className)}
      onClick={() => onOpenChange(false)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

function ModalOverlay() {
  const { onOpenChange } = useModalContext()
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      onOpenChange(false)
    }
  }

  return (
    <div
      className={clsx(modalOverlay)}
      onClick={() => onOpenChange(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    />
  )
}

function ModalContent({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(modalContent, className)} {...restProps}>
      {children}
    </div>
  )
}

function ModalTitle({ children, className, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx(modalTitle, className)} {...restProps}>
      {children}
    </h3>
  )
}

function ModalDescription({ children, className, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={clsx(modalDescription, className)} {...restProps}>
      {children}
    </p>
  )
}

type ModalButtonLayoutVariants = RecipeVariants<typeof modalButtonLayout>

function ModalButtonLayout({
  children,
  className,
  layout,
  ...restProps
}: HTMLAttributes<HTMLDivElement> & ModalButtonLayoutVariants) {
  return (
    <div className={clsx(modalButtonLayout({ layout }), className)} {...restProps}>
      {children}
    </div>
  )
}

export {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalTitle,
  ModalDescription,
  ModalButtonLayout,
  ModalTrigger,
}
