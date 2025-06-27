import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  FormLayoutHeader,
  FormLayoutHeaderDescription,
  FormLayoutHeaderTitle,
  FormLayoutButtonLayout,
  FormLayoutRoot,
  Badge,
  Button,
  NavigationBar,
  NavigationBarBackButton,
  NavigationBarTitle,
} from "@/shared/ui"

import { MATCH_FORMAT_OPTIONS } from "@/entities/match"
import { matchFormatFormSchema } from "@/features/createMatch/models"
import type { MatchFormatFormContext, MatchFormatOption } from "@/features/createMatch/models"
import { matchFormatOptionsWrapper } from "./MatchFormatStep.css"

interface Props {
  onNext: (context: MatchFormatFormContext) => void
  onBack: () => void
}

export default function MatchFormatStep({ onNext, onBack }: Props) {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(matchFormatFormSchema),
    mode: "onTouched",
  })

  const { matchFormat: selectedMatchFormat } = watch()

  const handleSelectMatchFormat = (format: MatchFormatOption) => {
    setValue("matchFormat", format, { shouldValidate: true })
  }

  const onSubmit = (data: MatchFormatFormContext) => {
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
          <FormLayoutRoot>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>몇 명씩 뛰는 경기로 할까요?</FormLayoutHeaderTitle>
              <FormLayoutHeaderDescription>4:4, 5:5 등 팀당 인원을 선택해 주세요</FormLayoutHeaderDescription>
            </FormLayoutHeader>

            <div className={matchFormatOptionsWrapper}>
              {MATCH_FORMAT_OPTIONS.map((format) => (
                <Badge key={format} variant={selectedMatchFormat === format ? "focus" : "default"} asChild>
                  <button type="button" onClick={() => handleSelectMatchFormat(format)}>
                    {format}
                  </button>
                </Badge>
              ))}
            </div>
            <FormLayoutButtonLayout>
              <Button type="submit" disabled={!isValid}>
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
