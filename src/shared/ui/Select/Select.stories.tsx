import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Select,
  SelectOption,
  SelectOptionList,
  SelectTrigger,
  SelectTriggerIcon,
  SelectTriggerValue,
  SelectWrapper,
} from "./Select"

const footballFieldNames = [
  "차다 풋살파크 천안메가마트점",
  "천안 어썸 풋살파크",
  "더피치 천안점",
  "매치업 풋살 천안점",
  "제이제이 풋살파크",
  "아트 풋살장",
  "라마시아 풋살장",
] as const

function SelectStory() {
  return (
    <Select onValueChange={(value) => console.log(value)}>
      <SelectWrapper>
        <SelectTrigger>
          <SelectTriggerValue placeholder="풋살장을 선택해주세요." />
          <SelectTriggerIcon />
        </SelectTrigger>
        <SelectOptionList>
          {footballFieldNames.map((fieldName) => (
            <SelectOption key={fieldName} value={fieldName}>
              {fieldName}
            </SelectOption>
          ))}
        </SelectOptionList>
      </SelectWrapper>
    </Select>
  )
}

const meta = {
  component: SelectStory,
} satisfies Meta<typeof SelectStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
