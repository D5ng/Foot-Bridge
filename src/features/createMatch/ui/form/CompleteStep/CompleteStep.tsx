import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Link } from "react-router"
import {
  Alert,
  AlertList,
  AlertListItem,
  AlertTitle,
  AlertWrapper,
  Button,
  FormLayoutButtonLayout,
  FormLayoutHeader,
  FormLayoutHeaderDescription,
  FormLayoutHeaderTitle,
  FormLayoutRoot,
  NavigationBar,
  NavigationBarTitle,
} from "@/shared/ui"
import { completeAnimation, completeInfoNotice } from "./CompleteStep.css"

export default function CompleteStep() {
  return (
    <>
      <NavigationBar>
        <NavigationBarTitle>매치 등록 완료</NavigationBarTitle>
      </NavigationBar>
      <main>
        <FormLayoutRoot>
          <FormLayoutHeader>
            <FormLayoutHeaderTitle>매치 모집 글이 등록되었어요</FormLayoutHeaderTitle>
            <FormLayoutHeaderDescription>
              이제 풋살 팀들이 당신의 경기를 볼 수 있어요.
              <br />
              매치 모집 글을 확인해보세요.
            </FormLayoutHeaderDescription>
          </FormLayoutHeader>

          <div className={completeAnimation}>
            <DotLottieReact src="https://lottie.host/1f967168-43bf-459b-9047-5158f9303b25/GbroV3sHLj.lottie" autoplay />
          </div>

          <div className={completeInfoNotice}>
            <Alert variant="informative">
              <AlertWrapper>
                <AlertTitle>알아두면 좋아요</AlertTitle>
                <AlertList>
                  <AlertListItem>이 매치는 경기 1시간 전까지 매칭이 확정되지 않으면 자동으로 내려가요</AlertListItem>
                  <AlertListItem>
                    등록한 매치는 <strong>[내 매치 보기]</strong>에서 언제든 수정할 수 있어요.
                  </AlertListItem>
                </AlertList>
              </AlertWrapper>
            </Alert>
          </div>

          <FormLayoutButtonLayout>
            <Button asChild>
              <Link to="/">홈으로 가기</Link>
            </Button>
          </FormLayoutButtonLayout>
        </FormLayoutRoot>
      </main>
    </>
  )
}
