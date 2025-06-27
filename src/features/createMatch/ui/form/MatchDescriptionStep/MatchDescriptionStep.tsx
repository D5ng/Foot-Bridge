import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  FormLayoutRoot,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  NavigationBar,
  NavigationBarBackButton,
  NavigationBarTitle,
  FormLayoutButtonLayout,
  Button,
  Label,
  Textarea,
  ErrorMessage,
} from "@/shared/ui"
import { matchDescriptionFormSchema } from "@/features/createMatch/models"
import type { MatchDescriptionFormContext } from "@/features/createMatch/models"
import { matchDescriptionStepRoot } from "./MatchDescriptionStep.css"

interface Props {
  isPending: boolean
  onNext: (context: MatchDescriptionFormContext) => void
  onBack: () => void
}

export default function MatchDescriptionStep({ isPending, onNext, onBack }: Props) {
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm({
    resolver: zodResolver(matchDescriptionFormSchema),
    mode: "onTouched",
  })

  const onSubmit = (data: MatchDescriptionFormContext) => {
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
          <FormLayoutRoot className={matchDescriptionStepRoot}>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>
                우리 팀을 소개하고, <br />
                어떤 경기를 원하는지 알려주세요
              </FormLayoutHeaderTitle>
            </FormLayoutHeader>

            <div>
              <Label htmlFor="description">상세 내용</Label>
              <Textarea
                id="description"
                placeholder="ex) 위너 풋살장 B구장에서 경기합니다. 안다치게 매너있는팀이면 좋겠습니다."
                {...register("description")}
                error={Boolean(errors.description)}
              />
              <ErrorMessage errors={errors} name="description" />
            </div>

            <FormLayoutButtonLayout>
              <Button type="submit" disabled={!isValid || isPending} isLoading={isPending}>
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
