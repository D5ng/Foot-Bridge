import { forwardRef } from "react"
import {
  skeletonBase,
  skeletonText,
  skeletonTitle,
  skeletonInput,
  skeletonTextarea,
  skeletonButton,
  skeletonAvatar,
  skeletonCard,
} from "./Skeleton.css"

interface SkeletonProps {
  variant?: "text" | "title" | "input" | "textarea" | "button" | "avatar" | "card" | "base"
  width?: string | number
  height?: string | number
  className?: string
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = "base", width, height, className, ...props }, ref) => {
    const getVariantClass = () => {
      switch (variant) {
        case "text":
          return skeletonText
        case "title":
          return skeletonTitle
        case "input":
          return skeletonInput
        case "textarea":
          return skeletonTextarea
        case "button":
          return skeletonButton
        case "avatar":
          return skeletonAvatar
        case "card":
          return skeletonCard
        default:
          return skeletonBase
      }
    }

    const style = {
      width: width,
      height: height,
    }

    return <div ref={ref} className={`${getVariantClass()} ${className || ""}`} style={style} {...props} />
  }
)

Skeleton.displayName = "Skeleton"

export default Skeleton
