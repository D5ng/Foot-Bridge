import { createGlobalTheme } from "@vanilla-extract/css"

export const colorVars = createGlobalTheme(":root", {
  highlight: {
    50: "#EAF2FF",
    100: "#B4DBFF",
    200: "#6FBAFF",
    300: "#2897FF",
    400: "#006FFD",
    500: "#0E5FC7", // hover용
  },
  neutral: {
    light: {
      50: "#FFFFFF",
      100: "#F8F9FE",
      200: "#E8E9F1",
      300: "#D4D6DD",
      400: "#C5C6CC",
    },
    dark: {
      500: "#8F9098",
      600: "#71727A",
      700: "#494A50",
      800: "#2F3036",
      900: "#1F2024",
    },
  },
  success: {
    50: "#E7F4E8",
    300: "#3AC0A0",
    500: "#298267",
  },
  warning: {
    50: "#FFF4E4",
    300: "#FFB37C",
    500: "#E86339",
  },
  error: {
    50: "#FFE2E5",
    300: "#FF616D",
    500: "#ED3241",
  },
})
