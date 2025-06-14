import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormLayoutRoot,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutHeaderDescription,
  Badge,
  FormLayoutButtonLayout,
  Button,
  ErrorMessage,
} from "@/shared/ui"
import type { AverageAgeContext, AverageAgeOption } from "../form.type"
import { AVERAGE_AGE_OPTIONS } from "../form.constants"
import { averageAgeFormBadgeLayout } from "./AverageAgeStep.css"
import { averageAgeFormSchema } from "../form.schema"

interface Props {
  onNext: (context: AverageAgeContext) => void
  onBack: () => void
}

export default function AverageAgeStep({ onNext, onBack }: Props) {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AverageAgeContext>({
    resolver: zodResolver(averageAgeFormSchema),
    mode: "onTouched",
  })

  const averageAgeOptions = watch("averageAge") || []

  const toggleAverageAge = (age: AverageAgeOption) => {
    setValue("averageAge", age, { shouldValidate: true })
  }

  const onSubmit = (data: AverageAgeContext) => {
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

            <div className={averageAgeFormBadgeLayout}>
              {AVERAGE_AGE_OPTIONS.map((age) => (
                <Badge key={age} asChild variant={averageAgeOptions.includes(age) ? "focus" : "default"}>
                  <button type="button" onClick={() => toggleAverageAge(age)}>
                    {age}
                  </button>
                </Badge>
              ))}
            </div>
            <ErrorMessage errors={errors} name="averageAge" />

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
