import { TeamIcon, CalendarCheckIcon, AvatarIcon } from "@/shared/assets/images"

export const HEADER_NAVIGATION_ITEMS = [
  {
    id: "create-team",
    href: "/create-team",
    icon: TeamIcon,
    alt: "팀 만들기 페이지로 이동",
  },
  {
    id: "calendar",
    href: "/calendar",
    icon: CalendarCheckIcon,
    alt: "캘린더 페이지로 이동",
  },
  {
    id: "my",
    href: "/my",
    icon: AvatarIcon,
    alt: "마이 페이지로 이동",
  },
] as const
