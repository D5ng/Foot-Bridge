import {
  Button,
  FormButtonLayout,
  Badge,
  FormHeader,
  FormHeaderTitle,
  FormHeaderDescription,
  FormRootLayout,
} from "@/shared/ui"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import { useCheckboxGroup } from "@/shared/hooks"
import { selectDaysFormBadgeLayout } from "./SelectDaysStep.css"
import type { Day } from "../form.type"
import { DAYS } from "../form.constants"

interface Props {
  onNext: (teamActivityDays: Day[]) => void
}

export default function SelectDaysStep({ onNext }: Props) {
  const { checkedItems, onChange } = useCheckboxGroup<Day>()

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton />
        <NavigationBarTitle>팀 활동정보</NavigationBarTitle>
      </NavigationBar>
      <main>
        <FormRootLayout>
          <FormHeader>
            <FormHeaderTitle>주로 어떤 요일에 활동하나요?</FormHeaderTitle>
            <FormHeaderDescription>복수 선택이 가능하며, 매칭 추천에 활용돼요.</FormHeaderDescription>
          </FormHeader>

          <div className={selectDaysFormBadgeLayout}>
            {DAYS.map((day) => (
              <Badge key={day} asChild variant={checkedItems.includes(day) ? "focus" : "default"}>
                <button type="button" onClick={() => onChange(day)}>
                  {day}
                </button>
              </Badge>
            ))}
          </div>

          <FormButtonLayout>
            <Button onClick={() => onNext(checkedItems)}>다음</Button>
            <Button variant="terciary">이전 항목</Button>
          </FormButtonLayout>
        </FormRootLayout>
      </main>
    </>
  )
}
