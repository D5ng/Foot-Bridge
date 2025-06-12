import { useState } from "react"
import { Button, Input, Label, FormButtonLayout, FormHeader, FormHeaderTitle, FormRootLayout } from "@/shared/ui"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import { basicInfoForm } from "./BasicInfoStep.css"

interface Props {
  onNext: (context: { teamName: string; teamLeaderName: string; teamLeaderPhoneNumber: string }) => void
}

export default function BasicInfoStep({ onNext }: Props) {
  const [teamName, setTeamName] = useState("")
  const [teamLeaderName, setTeamLeaderName] = useState("")
  const [teamLeaderPhoneNumber, setTeamLeaderPhoneNumber] = useState("")

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value)
  }
  const handleTeamLeaderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamLeaderName(e.target.value)
  }
  const handleTeamLeaderPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamLeaderPhoneNumber(e.target.value)
  }

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton />
        <NavigationBarTitle>팀 기본정보</NavigationBarTitle>
      </NavigationBar>
      <main>
        <FormRootLayout className={basicInfoForm}>
          <FormHeader>
            <FormHeaderTitle>
              먼저,
              <br />
              우리 팀 기본 정보를 적어볼까요?
            </FormHeaderTitle>
          </FormHeader>
          <div>
            <Label>팀명</Label>
            <Input type="text" placeholder="팀명을 입력해주세요." value={teamName} onChange={handleTeamNameChange} />
          </div>

          <div>
            <Label>대표 이름</Label>
            <Input
              type="text"
              placeholder="대표 이름을 입력해주세요."
              value={teamLeaderName}
              onChange={handleTeamLeaderNameChange}
            />
          </div>

          <div>
            <Label>연락처</Label>
            <Input
              type="text"
              placeholder="01012345678 (숫자만 입력 - 제외)"
              value={teamLeaderPhoneNumber}
              onChange={handleTeamLeaderPhoneNumberChange}
            />
          </div>

          <FormButtonLayout>
            <Button onClick={() => onNext({ teamName, teamLeaderName, teamLeaderPhoneNumber })}>다음</Button>
          </FormButtonLayout>
        </FormRootLayout>
      </main>
    </>
  )
}
