import type { Meta, StoryObj } from "@storybook/react-vite"
import Input from "./Input"

const meta = {
  component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "text",
    disabled: false,
    placeholder: "제목을 입력해주세요",
  },
}
