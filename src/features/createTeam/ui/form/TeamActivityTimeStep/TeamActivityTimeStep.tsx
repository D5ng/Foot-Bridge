import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormLayoutRoot,
  FormLayoutButtonLayout,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutHeaderDescription,
  Button,
  SelectableList,
  SelectableListItem,
  SelectableListWrapper,
  SelectableListItemIcon,
  SelectableListItemLabel,
} from "@/shared/ui"
import { teamActivityTimeFormSchema } from "@/features/createTeam/models"
import type { TeamActivityTimeContext, MatchTimeOption } from "@/features/createTeam/models/types"
import { MATCH_TIMES_OPTIONS } from "@/entities/team"

interface Props {
  onNext: (context: TeamActivityTimeContext) => void
  onBack: () => void
  prevContext: Partial<TeamActivityTimeContext>
}

export default function TeamActivityTimeStep({ onNext, onBack, prevContext }: Props) {
  const { setValue, watch, handleSubmit } = useForm<TeamActivityTimeContext>({
    resolver: zodResolver(teamActivityTimeFormSchema),
    mode: "onTouched",
    defaultValues: prevContext,
  })

  const matchTimeOptions = watch("matchTime") || []

  const handleCheckedItems = (selectedMatchTimeOptions: MatchTimeOption[]) => {
    setValue("matchTime", selectedMatchTimeOptions, { shouldValidate: true })
  }

  const onSubmit = (data: TeamActivityTimeContext) => {
    onNext(data)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={onBack} />
        <NavigationBarTitle>팀 활동정보</NavigationBarTitle>
      </NavigationBar>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLayoutRoot>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>주로 어떤 시간대에 경기를 하시나요?</FormLayoutHeaderTitle>
              <FormLayoutHeaderDescription>
                정확하지 않아도 괜찮아요. 대략적인 시간대만 골라주세요
              </FormLayoutHeaderDescription>
            </FormLayoutHeader>

            <SelectableList defaultValues={matchTimeOptions} onValueChange={handleCheckedItems}>
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

            <FormLayoutButtonLayout>
              <Button type="submit" disabled={matchTimeOptions.length === 0}>
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
