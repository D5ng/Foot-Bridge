import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormRootLayout,
  FormHeader,
  FormHeaderTitle,
  FormHeaderDescription,
  FormButtonLayout,
} from "@/shared/ui/Form/Form"
import { Button } from "@/shared/ui"
import { DefaultEmblem } from "@/shared/assets/images"
import { uploadEmblemStepImage, uploadEmblemStepImageWrapper } from "./UploadEmblemStep.css"

interface Props {
  onNext: () => void
}

export default function UploadEmblemStep({ onNext }: Props) {
  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton />
        <NavigationBarTitle>팀 엠블럼 등록</NavigationBarTitle>
      </NavigationBar>

      <main>
        <FormRootLayout>
          <FormHeader>
            <FormHeaderTitle>팀 엠블럼을 선택해 주세요</FormHeaderTitle>
            <FormHeaderDescription>엠블럼이 없으면 기본 이미지로 대신할게요</FormHeaderDescription>
          </FormHeader>

          <div>
            <div className={uploadEmblemStepImageWrapper}>
              <img src={DefaultEmblem} alt="팀 엠블럼" className={uploadEmblemStepImage} />
            </div>
          </div>

          <FormButtonLayout>
            <Button onClick={() => onNext()}>다음</Button>
            <Button variant="terciary">이전 항목</Button>
          </FormButtonLayout>
        </FormRootLayout>
      </main>
    </>
  )
}
