import { Skeleton } from "@/shared/ui"
import { layout } from "../MatchList/MatchList.css"
import { skeletonItemLayout, skeletonItemInfo, skeletonItemRight, skeletonItemTag } from "./MatchListSkeleton.css"

export default function MatchListSkeleton() {
  const skeletonItems = Array.from({ length: 5 }, (_, index) => (
    <li key={index} className={skeletonItemLayout}>
      <div className={skeletonItemInfo}>
        <Skeleton variant="text" width="60px" height="24px" />
        <Skeleton variant="button" width="70px" height="24px" />
      </div>
      <div className={skeletonItemRight}>
        <Skeleton variant="title" width="250px" height="20px" />
        <div className={skeletonItemTag}>
          <Skeleton variant="avatar" width="16px" height="16px" />
          <Skeleton variant="text" width="60px" height="14px" />
          <Skeleton variant="text" width="60px" height="14px" />
          <Skeleton variant="text" width="60px" height="14px" />
        </div>
      </div>
    </li>
  ))

  return <ul className={layout}>{skeletonItems}</ul>
}
