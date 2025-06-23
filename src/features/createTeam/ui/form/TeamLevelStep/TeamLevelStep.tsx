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
import type { TeamLevelContext, SkillLevelOption } from "@/features/createTeam/models/types"
import { teamLevelFormSchema } from "@/features/createTeam/models"
import { TEAM_LEVEL_OPTIONS, TEAM_LEVEL_OPTIONS_DESCRIPTION } from "@/entities/team"
import {
  skillLevelStepDescription,
  skillLevelStepDetailItem,
  skillLevelStepDetailItemLabel,
  skillLevelStepDetailItemValue,
  skillLevelStepDetails,
} from "./TeamLevelStep.css"

interface Props {
  onNext: (context: TeamLevelContext) => void
  onBack: () => void
}

export default function TeamLevelStep({ onNext, onBack }: Props) {
  const { setValue, handleSubmit, watch } = useForm<TeamLevelContext>({
    defaultValues: {
      teamLevel: TEAM_LEVEL_OPTIONS[0],
    },
    resolver: zodResolver(teamLevelFormSchema),
    mode: "onTouched",
  })

  const teamLevel = watch("teamLevel") || []

  const toggleTeamLevel = (teamLevel: SkillLevelOption) => {
    setValue("teamLevel", teamLevel, { shouldValidate: true })
  }

  const onSubmit = (data: TeamLevelContext) => {
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

            <SegmentedControl defaultValue={TEAM_LEVEL_OPTIONS[0]} onValueChange={toggleTeamLevel}>
              <SegmentedControlWrapper>
                <SegmentedControlList>
                  {TEAM_LEVEL_OPTIONS.map((item) => (
                    <SegmentedControlOption key={item} value={item}>
                      {item}
                    </SegmentedControlOption>
                  ))}
                </SegmentedControlList>
              </SegmentedControlWrapper>
              <SegmentedContent value={teamLevel}>
                <p className={skillLevelStepDescription}>{TEAM_LEVEL_OPTIONS_DESCRIPTION[teamLevel].description}</p>
                <ul className={skillLevelStepDetails}>
                  {Object.entries(TEAM_LEVEL_OPTIONS_DESCRIPTION[teamLevel].details).map(([key, value]) => (
                    <li key={key} className={skillLevelStepDetailItem}>
                      <div className={skillLevelStepDetailItemLabel}>{key}</div>
                      <div className={skillLevelStepDetailItemValue}>{value}</div>
                    </li>
                  ))}
                </ul>
              </SegmentedContent>
            </SegmentedControl>

            <FormLayoutButtonLayout>
              <Button type="submit" disabled={teamLevel.length === 0}>
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
