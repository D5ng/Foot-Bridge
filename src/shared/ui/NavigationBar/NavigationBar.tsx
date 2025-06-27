import type { HTMLAttributes } from "react"
import { clsx } from "clsx"
import { createScopedContext } from "@/shared/lib"
import { ArrowIcon } from "../icons"
import { navigationBar, navigationBarBackButton, navigationBarTitle, navigationBarWrapper } from "./NavigationBar.css"

const NavigationBarContext = createScopedContext()

const [NavigationBarProvider] = NavigationBarContext()

function NavigationBar({ children }: { children: React.ReactNode }) {
  return (
    <NavigationBarProvider value={{}}>
      <nav className={navigationBar}>
        <div className={navigationBarWrapper}>{children}</div>
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
