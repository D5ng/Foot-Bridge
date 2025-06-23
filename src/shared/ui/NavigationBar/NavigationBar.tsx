import type { HTMLAttributes } from "react"
import { clsx } from "clsx"
import { createScopedContext } from "@/shared/lib"
import { ArrowIcon } from "../icons"
import { navigationBar, navigationBarBackButton, navigationBarTitle, navigationBarWrapper } from "./NavigationBar.css"

const NavigationBarContext = createScopedContext()

const [NavigationBarProvider] = NavigationBarContext()

interface NavigationBarProps {
  children: React.ReactNode
  navClassName?: string
  wrapperClassName?: string
}

function NavigationBar({ children, navClassName, wrapperClassName }: NavigationBarProps) {
  return (
    <NavigationBarProvider value={{}}>
      <nav className={clsx(navigationBar, navClassName)}>
        <div className={clsx(navigationBarWrapper, wrapperClassName)}>{children}</div>
      </nav>
    </NavigationBarProvider>
  )
}

function NavigationBarBackButton({ className, ...restProps }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(navigationBarBackButton, className)} {...restProps}>
      <ArrowIcon direction="left" size={20} />
    </button>
  )
}

function NavigationBarTitle({ children, className, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={clsx(navigationBarTitle, className)} {...restProps}>
      {children}
    </h4>
  )
}

export { NavigationBar, NavigationBarBackButton, NavigationBarTitle }
