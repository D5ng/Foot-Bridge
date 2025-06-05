import type { Meta, StoryObj } from "@storybook/react-vite"
import Button from "./Button"

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
}

export const Terciary: Story = {
  args: {
    children: "Button",
    variant: "terciary",
  },
}
