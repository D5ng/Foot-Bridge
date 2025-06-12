import { useEffect } from "react"
import { useNavigate } from "react-router"
import { signInWithKakao } from "@/shared/api/auth"
import { useAuthStore } from "@/shared/stores/authStore"
import { KakaoLogoIcon } from "@/shared/assets/images"
import { loginPageButton, loginPageButtonIcon, loginPageDesc, loginPageTitle, loginPageWrapper } from "./LoginPage.css"

export default function LoginPage() {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuthStore()

  // 이미 로그인된 경우 메인 페이지로 리다이렉트
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleKakaoLogin = async () => {
    try {
      await signInWithKakao()
      // auth store가 자동으로 상태 업데이트하고 리다이렉트됨
    } catch (error) {
      console.error("Login failed:", error)
      alert("로그인에 실패했습니다. 다시 시도해주세요.")
    }
  }

  // 로딩 중이거나 이미 인증된 경우 로딩 표시
  if (isLoading || isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        로그인 확인 중...
      </div>
    )
  }

  return (
    <main className={loginPageWrapper}>
      <h2 className={loginPageTitle}>FootBridge</h2>
      <p className={loginPageDesc}>팀과 팀을 연결하는 가장 빠른 길</p>
      <button className={loginPageButton} onClick={handleKakaoLogin}>
        <div className={loginPageButtonIcon}>
          <img src={KakaoLogoIcon} alt="kakao" />
        </div>
        카카오톡으로 시작하기
      </button>
    </main>
  )
}
