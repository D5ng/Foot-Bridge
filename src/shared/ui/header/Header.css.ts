import { spacing, typography } from "@/shared/tokens";
import { style } from "@vanilla-extract/css";

export const header = style({
	display: "flex",
	padding: spacing[4],
	justifyContent: "space-between",
	alignItems: "center",
})

export const headerLogo = style({
	...typography.heading.xl
})

export const headerMenu = style({
	display: "flex",
	alignItems: "center",
	gap: spacing[2.5],
})

