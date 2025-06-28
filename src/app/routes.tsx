import { createBrowserRouter, type RouteObject } from "react-router"
import AuthProtectedRoute from "@/app/providers/AuthProtectedRoute"
import CompleteStep from "@/features/createTeam/ui/form/CompleteStep/CompleteStep"
import { MatchListPage, LoginPage, MyPage, CreateTeamPage, CreateMatchPage, MatchDetailPage } from "../pages"

/** 인증이 필요한 라우트 */
const protectedRoutes: RouteObject[] = [
  {
    path: "/my",
    Component: () => {
      return (
        <AuthProtectedRoute fallback={<div>Loading...</div>}>
          <MyPage />
        </AuthProtectedRoute>
      )
    },
  },
  {
    path: "/create-team",
    children: [
      {
        index: true,
        Component: () => {
          return (
            <AuthProtectedRoute fallback={<div>Loading...</div>}>
              <CreateTeamPage />
            </AuthProtectedRoute>
          )
        },
      },
      {
        path: "complete",
        Component: () => {
          return <CompleteStep />
        },
      },
    ],
  },
  {
    path: "/create-match",
    Component: () => {
      return (
        <AuthProtectedRoute fallback={<div>Loading...</div>}>
          <CreateMatchPage />
        </AuthProtectedRoute>
      )
    },
  },
]

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    Component: MatchListPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/match/:matchId",
    Component: () => {
      return <MatchDetailPage />
    },
  },
]

/** 라우터 생성 */
export const router = createBrowserRouter([...publicRoutes, ...protectedRoutes])
