import type { Meta, StoryObj } from "@storybook/react-vite"
import Textarea from "./Textarea"

const meta = {
  component: Textarea,
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "제목을 입력해주세요",
    disabled: false,
  },
}
