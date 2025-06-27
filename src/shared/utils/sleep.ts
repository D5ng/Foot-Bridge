/**
 * 지연 함수
 * @param delay 밀리초 단위의 지연 시간 (ms)
 */

export function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
