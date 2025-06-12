import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormHeader,
  FormHeaderTitle,
  FormHeaderDescription,
  FormButtonLayout,
  Button,
  FormRootLayout,
  SelectableList,
  SelectableListItem,
  SelectableListWrapper,
  SelectableListItemIcon,
  SelectableListItemLabel,
} from "@/shared/ui"
import { useCheckboxGroup } from "@/shared/hooks"
import { MATCH_TIMES_OPTIONS } from "../form.constants"
import type { MatchTimeOption } from "../form.type"

interface Props {
  onNext: (matchTimeOptions: MatchTimeOption[]) => void
}

export default function MatchTimeStep({ onNext }: Props) {
  const { checkedItems: matchTimeOptions, setCheckedItems } = useCheckboxGroup<MatchTimeOption>()

  const handleCheckedItems = (matchTimeOptions: MatchTimeOption[]) => {
    setCheckedItems(matchTimeOptions)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton />
        <NavigationBarTitle>팀 활동정보</NavigationBarTitle>
      </NavigationBar>
      <main>
        <FormRootLayout>
          <FormHeader>
            <FormHeaderTitle>주로 어떤 시간대에 경기를 하시나요?</FormHeaderTitle>
            <FormHeaderDescription>정확하지 않아도 괜찮아요. 대략적인 시간대만 골라주세요</FormHeaderDescription>
          </FormHeader>

          <SelectableList onValueChange={handleCheckedItems}>
            <SelectableListWrapper>
              {MATCH_TIMES_OPTIONS.map((item) => (
                <SelectableListItem key={item} value={item}>
                  {({ isSelected }) => (
                    <>
                      <SelectableListItemLabel>{item}</SelectableListItemLabel>
                      {isSelected && <SelectableListItemIcon />}
                    </>
                  )}
                </SelectableListItem>
              ))}
            </SelectableListWrapper>
          </SelectableList>

          <FormButtonLayout>
            <Button onClick={() => onNext(matchTimeOptions)}>다음</Button>
            <Button variant="terciary">이전 항목</Button>
          </FormButtonLayout>
        </FormRootLayout>
      </main>
    </>
  )
}
