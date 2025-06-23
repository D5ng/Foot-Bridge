import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { format } from "date-fns"
import {
  Badge,
  Button,
  FormLayoutButtonLayout,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutRoot,
  Label,
  MonthlyCalendar,
  NavigationBar,
  NavigationBarBackButton,
  NavigationBarTitle,
  Select,
  SelectOption,
  SelectOptionList,
  SelectTrigger,
  SelectTriggerIcon,
  SelectTriggerValue,
  SelectWrapper,
} from "@/shared/ui"
import { matchDateFormSchema } from "@/features/createMatch/models"
import type { MatchDateFormContext, FieldNameOption, MatchTimeOption } from "@/features/createMatch/models"
import { FOOTBALL_FIELD_NAMES, MATCH_TIME_OPTIONS } from "@/entities/match"
import {
  createMatchFieldWrapper,
  createMatchFormLayout,
  createMatchTimeOptionsWrapper,
  noDefaultPadding,
} from "./MatchDateTimeStep.css"

interface Props {
  onNext: (context: MatchDateFormContext) => void
  onBack: () => void
}

export default function MatchDateTimeStep({ onNext, onBack }: Props) {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(matchDateFormSchema),
    mode: "onTouched",
  })

  const { matchTime: selectedMatchTime, matchDate } = watch()

  console.log(matchDate)

  const handleSelectMatchDate = useCallback(
    (date: Date) => {
      setValue("matchDate", format(date, "yyyy-MM-dd"), { shouldValidate: true })
    },
    [setValue]
  )

  const handleSelectFieldName = useCallback(
    (fieldName: FieldNameOption) => {
      setValue("fieldName", fieldName, { shouldValidate: true })
    },
    [setValue]
  )

  const handleSelectMatchTime = (time: MatchTimeOption) => {
    setValue("matchTime", time, { shouldValidate: true })
  }

  const onSubmit = (data: MatchDateFormContext) => {
    onNext(data)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={onBack} />
        <NavigationBarTitle>매치 등록하기</NavigationBarTitle>
      </NavigationBar>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLayoutRoot className={createMatchFormLayout}>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>어디서 경기를 진행할까요?</FormLayoutHeaderTitle>
            </FormLayoutHeader>

            <div>
              <Label>날짜 및 시간</Label>
              <MonthlyCalendar swiperContainerClassName={noDefaultPadding} onValueChange={handleSelectMatchDate} />
              <div className={createMatchTimeOptionsWrapper}>
                {MATCH_TIME_OPTIONS.map((time) => (
                  <Badge key={time} variant={selectedMatchTime === time ? "focus" : "default"} asChild>
                    <button type="button" onClick={() => handleSelectMatchTime(time)}>
                      {time}
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <div className={createMatchFieldWrapper}>
              <Label>구장</Label>
              <Select onValueChange={handleSelectFieldName}>
                <SelectWrapper>
                  <SelectTrigger>
                    <SelectTriggerValue placeholder="구장을 선택해주세요." />
                    <SelectTriggerIcon />
                  </SelectTrigger>
                  <SelectOptionList>
                    {FOOTBALL_FIELD_NAMES.map((fieldName) => (
                      <SelectOption key={fieldName} value={fieldName}>
                        {fieldName}
                      </SelectOption>
                    ))}
                  </SelectOptionList>
                </SelectWrapper>
              </Select>
            </div>
            <FormLayoutButtonLayout>
              <Button type="submit" disabled={!isValid}>
                다음
              </Button>
            </FormLayoutButtonLayout>
          </FormLayoutRoot>
        </form>
      </main>
    </>
  )
}
