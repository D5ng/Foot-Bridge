import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormRootLayout,
  FormHeader,
  FormHeaderTitle,
  FormHeaderDescription,
  Badge,
  FormButtonLayout,
  Button,
} from "@/shared/ui"
import { useSelect } from "@/shared/hooks"
import type { AverageAgeOption } from "../form.type"
import { AVERAGE_AGE_OPTIONS } from "../form.constants"
import { averageAgeFormBadgeLayout } from "./AverageAgeStep.css"

interface Props {
  onNext: (averageAgeOptions: AverageAgeOption | null) => void
}

export default function AverageAgeStep({ onNext }: Props) {
  const { selectedItem, onChange } = useSelect<AverageAgeOption>({ defaultValues: AVERAGE_AGE_OPTIONS[1] })

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton />
        <NavigationBarTitle>팀 특성 정보</NavigationBarTitle>
      </NavigationBar>
      <main>
        <FormRootLayout>
          <FormHeader>
            <FormHeaderTitle>우리 팀, 평균 나이는 어느 정도인가요?</FormHeaderTitle>
            <FormHeaderDescription>대략적인 연령대를 선택해 주세요.</FormHeaderDescription>
          </FormHeader>

          <div className={averageAgeFormBadgeLayout}>
            {AVERAGE_AGE_OPTIONS.map((item) => (
              <Badge key={item} asChild variant={selectedItem === item ? "focus" : "default"}>
                <button type="button" onClick={() => onChange(item)}>
                  {item}
                </button>
              </Badge>
            ))}
          </div>

          <FormButtonLayout>
            <Button onClick={() => onNext(selectedItem)}>다음</Button>
            <Button variant="terciary">이전 항목</Button>
          </FormButtonLayout>
        </FormRootLayout>
      </main>
    </>
  )
}
