import type { Meta, StoryObj } from "@storybook/react-vite"
import MonthlyCalendar from "./MonthlyCalender"

const meta = {
  component: MonthlyCalendar,
} satisfies Meta<typeof MonthlyCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
