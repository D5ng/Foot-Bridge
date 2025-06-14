import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormLayoutRoot,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutHeaderDescription,
  FormLayoutButtonLayout,
  Button,
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlOption,
  SegmentedContent,
  SegmentedControlWrapper,
} from "@/shared/ui"
import { SKILL_LEVEL_OPTIONS, SKILL_LEVEL_OPTIONS_DESCRIPTION } from "../form.constants"
import type { SkillLevelContext, SkillLevelOption } from "../form.type"
import {
  skillLevelStepDescription,
  skillLevelStepDetailItem,
  skillLevelStepDetailItemLabel,
  skillLevelStepDetailItemValue,
  skillLevelStepDetails,
} from "./SkillLevelStep.css"
import { skillLevelFormSchema } from "../form.schema"

interface Props {
  onNext: (context: SkillLevelContext) => void
  onBack: () => void
}

export default function SkillLevelStep({ onNext, onBack }: Props) {
  const { setValue, handleSubmit, watch } = useForm<SkillLevelContext>({
    defaultValues: {
      skillLevel: SKILL_LEVEL_OPTIONS[0],
    },
    resolver: zodResolver(skillLevelFormSchema),
    mode: "onTouched",
  })

  const skillLevel = watch("skillLevel") || []

  const toggleSkillLevel = (skillLevel: SkillLevelOption) => {
    setValue("skillLevel", skillLevel, { shouldValidate: true })
  }

  const onSubmit = (data: SkillLevelContext) => {
    onNext(data)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={onBack} />
        <NavigationBarTitle>팀 특성 정보</NavigationBarTitle>
      </NavigationBar>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLayoutRoot>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>우리 팀, 평균 나이는 어느 정도인가요?</FormLayoutHeaderTitle>
              <FormLayoutHeaderDescription>대략적인 연령대를 선택해 주세요.</FormLayoutHeaderDescription>
            </FormLayoutHeader>

            <SegmentedControl defaultValue={SKILL_LEVEL_OPTIONS[0]} onValueChange={toggleSkillLevel}>
              <SegmentedControlWrapper>
                <SegmentedControlList>
                  {SKILL_LEVEL_OPTIONS.map((item) => (
                    <SegmentedControlOption key={item} value={item}>
                      {item}
                    </SegmentedControlOption>
                  ))}
                </SegmentedControlList>
              </SegmentedControlWrapper>
              <SegmentedContent value={skillLevel}>
                <p className={skillLevelStepDescription}>{SKILL_LEVEL_OPTIONS_DESCRIPTION[skillLevel].description}</p>
                <ul className={skillLevelStepDetails}>
                  {Object.entries(SKILL_LEVEL_OPTIONS_DESCRIPTION[skillLevel].details).map(([key, value]) => (
                    <li key={key} className={skillLevelStepDetailItem}>
                      <div className={skillLevelStepDetailItemLabel}>{key}</div>
                      <div className={skillLevelStepDetailItemValue}>{value}</div>
                    </li>
                  ))}
                </ul>
              </SegmentedContent>
            </SegmentedControl>

            <FormLayoutButtonLayout>
              <Button type="submit" disabled={skillLevel.length === 0}>
                다음
              </Button>
              <Button variant="terciary" type="button" onClick={onBack}>
                이전 항목
              </Button>
            </FormLayoutButtonLayout>
          </FormLayoutRoot>
        </form>
      </main>
    </>
  )
}
