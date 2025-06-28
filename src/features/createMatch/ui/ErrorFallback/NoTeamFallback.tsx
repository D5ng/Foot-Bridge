import { Link, useNavigate } from "react-router"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Button, ErrorFallback, NavigationBar, NavigationBarBackButton } from "@/shared/ui"
import {
  noTeamFallbackContainer,
  noTeamFallbackSection,
  noTeamFallbackLottieWrapper,
  noTeamFallbackButtonWrapper,
  noTeamFallbackButton,
} from "./NoTeamFallback.css"

export default function NoTeamFallback() {
  const navigate = useNavigate()

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={() => navigate(-1)} />
      </NavigationBar>

      <main className={noTeamFallbackContainer}>
        <section className={noTeamFallbackSection}>
          <div className={noTeamFallbackLottieWrapper}>
            <DotLottieReact src="https://lottie.host/a99186c0-dd7d-4338-bdf9-43b926724af0/7fmvQ2NRkX.lottie" autoplay />
          </div>
          <ErrorFallback title="매치 등록은 팀이 있어야 가능해요." errorMessage="먼저 팀을 만들고 경기를 시작해보세요!">
            <div className={noTeamFallbackButtonWrapper}>
              <Button variant="primary" className={noTeamFallbackButton} asChild>
                <Link to="/create-team">팀 생성하기</Link>
              </Button>
              <Button variant="terciary" className={noTeamFallbackButton} asChild>
                <Link to="/">홈으로 이동</Link>
              </Button>
            </div>
          </ErrorFallback>
        </section>
      </main>
    </>
  )
}
