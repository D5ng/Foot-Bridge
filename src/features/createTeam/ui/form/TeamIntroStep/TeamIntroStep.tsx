import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormLayoutRoot,
  FormLayoutButtonLayout,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
} from "@/shared/ui/Layouts/FormLayout/FormLayout"
import { Button, Label, ErrorMessage, Textarea } from "@/shared/ui"
import { teamIntroFormSchema } from "@/features/createTeam/models"
import type { TeamIntroContext } from "@/features/createTeam/models/types"
import { teamIntroStepInputWrapper } from "./TeamIntroStep.css"

interface Props {
  onNext: (context: TeamIntroContext) => void
  onBack: () => void
}

export default function TeamIntroStep({ onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TeamIntroContext>({
    resolver: zodResolver(teamIntroFormSchema),
    mode: "onTouched",
  })

  const onSubmit = (data: TeamIntroContext) => {
    onNext(data)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={onBack} />
        <NavigationBarTitle>팀 소개</NavigationBarTitle>
      </NavigationBar>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLayoutRoot>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>우리 팀을 간단히 소개해주세요</FormLayoutHeaderTitle>
            </FormLayoutHeader>

            <div className={teamIntroStepInputWrapper}>
              <Label htmlFor="teamIntro">팀 소개</Label>
              <Textarea id="teamIntro" placeholder="팀 소개를 입력해 주세요." {...register("teamIntro")} />
              <ErrorMessage errors={errors} name="teamIntro" />
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
