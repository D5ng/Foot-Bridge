import type { Meta, StoryObj } from "@storybook/react-vite"
import { Alert, AlertList, AlertListItem, AlertTitle, AlertWrapper } from "./Alert"
import type { AlertVariants } from "./Alert.css"

function AlertStory({ variant }: { variant: AlertVariants["variant"] }) {
  return (
    <Alert variant={variant}>
      <AlertWrapper>
        <AlertTitle>Alert Box</AlertTitle>
        <AlertList>
          <AlertListItem>First</AlertListItem>
          <AlertListItem>Second</AlertListItem>
          <AlertListItem>Third</AlertListItem>
        </AlertList>
      </AlertWrapper>
    </Alert>
  )
}

const meta = {
  component: AlertStory,
  argTypes: {
    variant: {
      control: "select",
      options: ["informative", "success", "warning", "error"],
    },
  },
} satisfies Meta<typeof AlertStory>

export default meta
type Story = StoryObj<typeof meta>

export const Informative: Story = {
  args: {
    variant: "informative",
  },
  render: (args) => <AlertStory {...args} />,
}

export const Success: Story = {
  args: {
    variant: "success",
  },
  render: (args) => <AlertStory {...args} />,
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
  render: (args) => <AlertStory {...args} />,
}

export const Error: Story = {
  args: {
    variant: "error",
  },
  render: (args) => <AlertStory {...args} />,
}
