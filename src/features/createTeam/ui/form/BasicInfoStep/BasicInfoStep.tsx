import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Button,
  FormLayoutRoot,
  Input,
  Label,
  FormLayoutButtonLayout,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  ErrorMessage,
} from "@/shared/ui"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import { basicInfoForm } from "./BasicInfoStep.css"
import { basicInfoFormSchema } from "../form.schema"
import type { BasicInfoContext } from "../form.type"

interface Props {
  onNext: (context: BasicInfoContext) => void
  onBack: () => void
}

export default function BasicInfoStep({ onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BasicInfoContext>({
    resolver: zodResolver(basicInfoFormSchema),
    mode: "onTouched",
  })

  const onSubmit = (data: BasicInfoContext) => {
    onNext(data)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={onBack} />
        <NavigationBarTitle>팀 기본정보</NavigationBarTitle>
      </NavigationBar>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLayoutRoot className={basicInfoForm}>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>
                먼저,
                <br />
                우리 팀 기본 정보를 적어볼까요?
              </FormLayoutHeaderTitle>
            </FormLayoutHeader>
            <div>
              <Label>팀명</Label>
              <Input
                type="text"
                placeholder="팀명을 입력해주세요."
                {...register("teamName")}
                error={Boolean(errors.teamName)}
              />
              <ErrorMessage errors={errors} name="teamName" />
            </div>

            <div>
              <Label>대표 이름</Label>
              <Input
                type="text"
                placeholder="대표 이름을 입력해주세요."
                {...register("teamLeaderName")}
                error={Boolean(errors.teamLeaderName)}
              />
              <ErrorMessage errors={errors} name="teamLeaderName" />
            </div>

            <div>
              <Label>연락처</Label>
              <Input
                type="text"
                placeholder="01012345678 (숫자만 입력 - 제외)"
                {...register("teamLeaderPhoneNumber")}
                error={Boolean(errors.teamLeaderPhoneNumber)}
              />
              <ErrorMessage errors={errors} name="teamLeaderPhoneNumber" />
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
