import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  SegmentedControl,
  SegmentedControlWrapper,
  SegmentedControlList,
  SegmentedControlOption,
  SegmentedContent,
} from "./SegmentedControl"

function SegmentedControlStory() {
  return (
    <SegmentedControl defaultValue="section1" onValueChange={() => {}}>
      <SegmentedControlWrapper>
        <SegmentedControlList>
          <SegmentedControlOption value="section1">Section1</SegmentedControlOption>
          <SegmentedControlOption value="section2">Section2</SegmentedControlOption>
          <SegmentedControlOption value="section3">Section3</SegmentedControlOption>
        </SegmentedControlList>
      </SegmentedControlWrapper>
      <SegmentedContent value="section1">Section1</SegmentedContent>
      <SegmentedContent value="section2">Section2</SegmentedContent>
      <SegmentedContent value="section3">Section3</SegmentedContent>
    </SegmentedControl>
  )
}

const meta = {
  component: SegmentedControlStory,
} satisfies Meta<typeof SegmentedControlStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
