import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useNavigate } from "react-router"
import {
  FormLayoutRoot,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
  FormLayoutHeaderDescription,
  Button,
  NavigationBar,
  NavigationBarTitle,
  NavigationBarBackButton,
  FormLayoutButtonLayout,
} from "@/shared/ui"
import {
  teamCreationErrorFallbackContainer,
  teamCreationErrorFallbackLottieWrapper,
} from "./TeamCreationErrorFallback.css"

export default function TeamCreationErrorFallback() {
  const navigate = useNavigate()

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={() => navigate("/")} />
        <NavigationBarTitle>팀 생성 실패</NavigationBarTitle>
      </NavigationBar>

      <main className={teamCreationErrorFallbackContainer}>
        <div className={teamCreationErrorFallbackLottieWrapper}>
          <DotLottieReact
            src="https://lottie.host/8e9d3c01-0931-4985-a4ee-9d9ad9f80083/HbabseOWvm.lottie"
            loop
            autoplay
          />
        </div>
        <FormLayoutRoot>
          <FormLayoutHeader>
            <FormLayoutHeaderTitle>팀 등록 중 문제가 발생했어요</FormLayoutHeaderTitle>
            <FormLayoutHeaderDescription>
              일시적인 문제로 팀을 등록할 수 없었어요.
              <br />
              잠시 후 다시 시도해 주세요.
            </FormLayoutHeaderDescription>
          </FormLayoutHeader>

          <FormLayoutButtonLayout>
            <Button variant="primary">다시 시도</Button>
            <Button variant="terciary" onClick={() => navigate("/")}>
              홈으로 이동
            </Button>
          </FormLayoutButtonLayout>
        </FormLayoutRoot>
      </main>
    </>
  )
}
