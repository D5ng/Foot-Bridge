import { useState } from "react"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import { FormRootLayout, FormHeader, FormHeaderTitle, FormButtonLayout } from "@/shared/ui/Form/Form"
import { Button, Input, Label } from "@/shared/ui"
import { teamIntroStepInputWrapper } from "./TeamIntroStep.css"

interface Props {
  onNext: (teamIntro: string) => void
}

export default function TeamIntroStep({ onNext }: Props) {
  const [teamIntro, setTeamIntro] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamIntro(e.target.value)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton />
        <NavigationBarTitle>팀 소개</NavigationBarTitle>
      </NavigationBar>
      <main>
        <FormRootLayout>
          <FormHeader>
            <FormHeaderTitle>우리 팀을 간단히 소개해주세요</FormHeaderTitle>
          </FormHeader>

          <div className={teamIntroStepInputWrapper}>
            <Label>팀 소개</Label>
            <Input placeholder="팀 소개를 입력해 주세요." value={teamIntro} onChange={handleChange} />
          </div>

          <FormButtonLayout>
            <Button onClick={() => onNext(teamIntro)}>다음</Button>
            <Button variant="terciary">이전 항목</Button>
          </FormButtonLayout>
        </FormRootLayout>
      </main>
    </>
  )
}
