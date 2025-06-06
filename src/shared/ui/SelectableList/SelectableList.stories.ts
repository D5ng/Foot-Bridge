import type { Meta, StoryObj } from "@storybook/react-vite"
import SelectableList from "./SelectableList"

const meta = {
  component: SelectableList,
} satisfies Meta<typeof SelectableList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
    isSelected: false,
  },
}

export const Selected: Story = {
  args: {
    children: "Button",
    isSelected: true,
  },
}
