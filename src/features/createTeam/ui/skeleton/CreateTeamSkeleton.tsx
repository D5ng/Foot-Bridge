import { NavigationBar, NavigationBarBackButton, NavigationBarTitle, Skeleton } from "@/shared/ui"
import {
  createTeamSkeletonContainer,
  createTeamSkeletonForm,
  createTeamSkeletonFormSection,
  createTeamSkeletonHeader,
} from "./CreateTeamSkeleton.css"

export default function TeamExistsFallback() {
  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={() => {}} />
        <NavigationBarTitle>팀 기본정보</NavigationBarTitle>
      </NavigationBar>

      <main className={createTeamSkeletonContainer}>
        <div className={createTeamSkeletonForm}>
          <div className={createTeamSkeletonHeader}>
            <Skeleton variant="title" width="20%" height="27px" />
            <Skeleton variant="title" width="80%" height="27px" />
          </div>

          <div className={createTeamSkeletonFormSection}>
            <Skeleton variant="text" width="30%" height="16px" />
            <Skeleton variant="input" width="100%" />
          </div>

          <div className={createTeamSkeletonFormSection}>
            <Skeleton variant="text" width="30%" height="16px" />
            <Skeleton variant="input" width="100%" />
          </div>

          <div className={createTeamSkeletonFormSection}>
            <Skeleton variant="text" width="30%" height="16px" />
            <Skeleton variant="input" width="100%" />
          </div>

          <Skeleton variant="button" width="100%" />
        </div>
      </main>
    </>
  )
}
