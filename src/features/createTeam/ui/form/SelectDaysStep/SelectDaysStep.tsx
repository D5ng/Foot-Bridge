import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Button,
  Badge,
  FormLayoutRoot,
  FormLayoutButtonLayout,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutHeaderDescription,
  ErrorMessage,
} from "@/shared/ui"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import { selectDaysFormBadgeLayout } from "./SelectDaysStep.css"
import type { ActivityDaysContext, Day } from "../form.type"
import { DAYS } from "../form.constants"
import { activityDaysFormSchema } from "../form.schema"

interface Props {
  onNext: (context: ActivityDaysContext) => void
  onBack: () => void
}

export default function SelectDaysStep({ onNext, onBack }: Props) {
  const {
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ActivityDaysContext>({
    resolver: zodResolver(activityDaysFormSchema),
    mode: "onTouched",
  })

  const activityDays = watch("teamActivityDays") || []

  const toggleActivityDay = (day: Day) => {
    const updatedActivityDays = activityDays.includes(day)
      ? activityDays.filter((currentDay) => currentDay !== day)
      : [...activityDays, day]

    setValue("teamActivityDays", updatedActivityDays, { shouldValidate: true })
  }

  const onSubmit = (data: ActivityDaysContext) => {
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
              <FormLayoutHeaderTitle>주로 어떤 요일에 활동하나요?</FormLayoutHeaderTitle>
              <FormLayoutHeaderDescription>복수 선택이 가능하며, 매칭 추천에 활용돼요.</FormLayoutHeaderDescription>
            </FormLayoutHeader>

            <div className={selectDaysFormBadgeLayout}>
              {DAYS.map((day) => (
                <Badge key={day} asChild variant={activityDays.includes(day) ? "focus" : "default"}>
                  <button type="button" onClick={() => toggleActivityDay(day)}>
                    {day}
                  </button>
                </Badge>
              ))}
            </div>
            <ErrorMessage errors={errors} name="teamActivityDays" />

            <FormLayoutButtonLayout>
              <Button type="submit" disabled={activityDays.length === 0}>
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
