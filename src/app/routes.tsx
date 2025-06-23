import { createBrowserRouter, type RouteObject } from "react-router"
import { MatchListPage, LoginPage, MyPage, CreateTeamPage, CreateMatchPage, MatchDetailPage } from "../pages"
import ProtectedRoute from "./providers/ProtectedRoute"

/** 인증이 필요한 라우트 */
const protectedRoutes: RouteObject[] = [
  {
    path: "/my",
    Component: MyPage,
  },
  {
    path: "/create-team",
    Component: CreateTeamPage,
  },
  {
    path: "/create-match",
    Component: CreateMatchPage,
  },
]

/** 인증이 필요하지 않은 라우트 */
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
    Component: MatchDetailPage,
  },
]

/** 인증이 필요한 라우트를 생성하는 함수 */
const createProtectedRoute = (Component: RouteObject["Component"]) => {
  if (!Component) {
    return null
  }

  return () => (
    <ProtectedRoute fallback={<div>Loading...</div>}>
      <Component />
    </ProtectedRoute>
  )
}

/** 라우터 생성 */
export const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes.map(({ path, Component }) => ({
    path,
    Component: createProtectedRoute(Component),
  })),
])
