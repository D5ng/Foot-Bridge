import { Swiper, SwiperSlide } from "swiper/react"
import { swiperThumbnailContainer, swiperThumbnailSlide, swiperThumbnailWrapper } from "./MatchThumbnail.css"

// Todo: 추후 구장 이미지 연결해야함
export default function MatchThumbnail() {
  return (
    <Swiper slidesPerView={1} wrapperClass={swiperThumbnailWrapper} className={swiperThumbnailContainer}>
      <SwiperSlide className={swiperThumbnailSlide}>1</SwiperSlide>
      <SwiperSlide className={swiperThumbnailSlide}>2</SwiperSlide>
    </Swiper>
  )
}
