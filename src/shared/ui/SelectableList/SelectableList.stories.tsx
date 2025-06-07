import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  SelectableList,
  SelectableListWrapper,
  SelectableListItem,
  SelectableListItemLabel,
  SelectableListItemIcon,
} from "./SelectableList"

export const TIME_OPTIONS = [
  { label: "아침 6시 ~ 10시", value: "morning" },
  { label: "낮 10시 ~ 18시", value: "day" },
  { label: "저녁 18시 ~ 21시", value: "evening" },
  { label: "밤 21시 ~ 24시", value: "night" },
] as const

export type TimeOptionValue = (typeof TIME_OPTIONS)[number]["value"]

function SelectableListStory() {
  return (
    <SelectableList>
      <SelectableListWrapper>
        {TIME_OPTIONS.map((option) => (
          <SelectableListItem key={option.value} value={option.value}>
            {({ isSelected }) => (
              <>
                <SelectableListItemLabel>{option.label}</SelectableListItemLabel>
                {isSelected && <SelectableListItemIcon />}
              </>
            )}
          </SelectableListItem>
        ))}
      </SelectableListWrapper>
    </SelectableList>
  )
}

const meta = {
  component: SelectableListStory,
} satisfies Meta<typeof SelectableListStory>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
