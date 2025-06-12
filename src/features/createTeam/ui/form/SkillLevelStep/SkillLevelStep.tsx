/* eslint-disable no-unused-vars */
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormRootLayout,
  FormHeader,
  FormHeaderTitle,
  FormHeaderDescription,
  FormButtonLayout,
  Button,
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlOption,
  SegmentedContent,
  SegmentedControlWrapper,
} from "@/shared/ui"
import { useSelect } from "@/shared/hooks"
import { SKILL_LEVEL_OPTIONS, SKILL_LEVEL_OPTIONS_DESCRIPTION } from "../form.constants"
import type { SkillLevelOption } from "../form.type"
import {
  skillLevelStepDescription,
  skillLevelStepDetailItem,
  skillLevelStepDetailItemLabel,
  skillLevelStepDetailItemValue,
  skillLevelStepDetails,
} from "./SkillLevelStep.css"

interface Props {
  onNext: (skillLevelOption: SkillLevelOption) => void
}

export default function SkillLevelStep({ onNext }: Props) {
  const { selectedItem, onChange } = useSelect<SkillLevelOption>({ defaultValues: SKILL_LEVEL_OPTIONS[0] })

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

          <SegmentedControl defaultValue={SKILL_LEVEL_OPTIONS[0]} onValueChange={onChange}>
            <SegmentedControlWrapper>
              <SegmentedControlList>
                {SKILL_LEVEL_OPTIONS.map((item) => (
                  <SegmentedControlOption key={item} value={item}>
                    {item}
                  </SegmentedControlOption>
                ))}
              </SegmentedControlList>
            </SegmentedControlWrapper>
            <SegmentedContent value={selectedItem}>
              <p className={skillLevelStepDescription}>{SKILL_LEVEL_OPTIONS_DESCRIPTION[selectedItem].description}</p>
              <ul className={skillLevelStepDetails}>
                {Object.entries(SKILL_LEVEL_OPTIONS_DESCRIPTION[selectedItem].details).map(([key, value]) => (
                  <li key={key} className={skillLevelStepDetailItem}>
                    <div className={skillLevelStepDetailItemLabel}>{key}</div>
                    <div className={skillLevelStepDetailItemValue}>{value}</div>
                  </li>
                ))}
              </ul>
            </SegmentedContent>
          </SegmentedControl>

          <FormButtonLayout>
            <Button onClick={() => onNext(selectedItem)}>다음</Button>
            <Button variant="terciary">이전 항목</Button>
          </FormButtonLayout>
        </FormRootLayout>
      </main>
    </>
  )
}
