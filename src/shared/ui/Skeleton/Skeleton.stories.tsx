import type { Meta, StoryObj } from "@storybook/react"
import Skeleton from "./Skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["text", "title", "input", "textarea", "button", "avatar", "card", "base"],
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "base",
    width: "200px",
    height: "20px",
  },
}

export const Text: Story = {
  args: {
    variant: "text",
    width: "100%",
  },
}

export const Title: Story = {
  args: {
    variant: "title",
    width: "60%",
  },
}

export const Input: Story = {
  args: {
    variant: "input",
    width: "100%",
  },
}

export const Textarea: Story = {
  args: {
    variant: "textarea",
    width: "100%",
  },
}

export const Button: Story = {
  args: {
    variant: "button",
    width: "120px",
  },
}

export const Avatar: Story = {
  args: {
    variant: "avatar",
  },
}

export const Card: Story = {
  args: {
    variant: "card",
    width: "300px",
  },
}

export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "300px" }}>
      <Skeleton variant="title" width="60%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="input" width="100%" />
      <Skeleton variant="textarea" width="100%" />
      <Skeleton variant="button" width="100%" />
    </div>
  ),
}
