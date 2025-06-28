import { NavigationBar, NavigationBarBackButton, NavigationBarTitle, Skeleton } from "@/shared/ui"
import {
  createMatchSkeletonContainer,
  createMatchSkeletonForm,
  createMatchSkeletonFormSection,
  createMatchSkeletonHeader,
  createMatchSkeletonCalendar,
  createMatchSkeletonTimeOptions,
  createMatchSkeletonTimeOption,
  createMatchSkeletonFieldWrapper,
} from "./CreateMatchSkeleton.css"

export default function CreateMatchSkeleton() {
  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={() => {}} />
        <NavigationBarTitle>매치 등록하기</NavigationBarTitle>
      </NavigationBar>

      <main className={createMatchSkeletonContainer}>
        <div className={createMatchSkeletonForm}>
          <div className={createMatchSkeletonHeader}>
            <Skeleton variant="title" width="80%" height="27px" />
          </div>

          <div className={createMatchSkeletonFormSection}>
            <Skeleton variant="text" width="30%" height="16px" />

            {/* Calendar skeleton */}
            <div className={createMatchSkeletonCalendar}>
              {/* Calendar header (요일) */}
              {Array.from({ length: 7 }).map((_, index) => (
                <Skeleton key={`header-${index}`} variant="text" width="100%" height="20px" />
              ))}

              {/* Calendar days */}
              {Array.from({ length: 35 }).map((_, index) => (
                <Skeleton key={`day-${index}`} variant="base" width="100%" height="32px" />
              ))}
            </div>

            {/* Time options skeleton */}
            <div className={createMatchSkeletonTimeOptions}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={`time-${index}`} variant="base" className={createMatchSkeletonTimeOption} />
              ))}
            </div>
          </div>

          <div className={createMatchSkeletonFieldWrapper}>
            <div className={createMatchSkeletonFormSection}>
              <Skeleton variant="text" width="20%" height="16px" />
              <Skeleton variant="input" width="100%" />
            </div>
          </div>

          <Skeleton variant="button" width="100%" />
        </div>
      </main>
    </>
  )
}
