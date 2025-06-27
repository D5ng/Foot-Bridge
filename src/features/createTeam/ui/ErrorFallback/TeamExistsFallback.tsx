import { Link, useNavigate } from "react-router"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Button, ErrorFallback, NavigationBar, NavigationBarBackButton } from "@/shared/ui"
import {
  teamExistsFallbackContainer,
  teamExistsFallbackSection,
  teamExistsFallbackLottieWrapper,
  teamExistsFallbackButtonWrapper,
  teamExistsFallbackButton,
} from "./TeamExistsFallback.css"

export default function TeamExistsFallback() {
  const navigate = useNavigate()

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={() => navigate(-1)} />
      </NavigationBar>

      <main className={teamExistsFallbackContainer}>
        <section className={teamExistsFallbackSection}>
          <div className={teamExistsFallbackLottieWrapper}>
            <DotLottieReact src="https://lottie.host/a99186c0-dd7d-4338-bdf9-43b926724af0/7fmvQ2NRkX.lottie" autoplay />
          </div>
          <ErrorFallback title="팀이 이미 존재해요" errorMessage="이미 등록된 팀이 있어 새로운 팀을 만들 수 없어요.">
            <div className={teamExistsFallbackButtonWrapper}>
              <Button variant="primary" className={teamExistsFallbackButton} asChild>
                <Link to="/">홈으로 돌아가기</Link>
              </Button>
            </div>
          </ErrorFallback>
        </section>
      </main>
    </>
  )
}
