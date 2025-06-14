import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { NavigationBar, NavigationBarBackButton, NavigationBarTitle } from "@/shared/ui/NavigationBar/NavigationBar"
import {
  FormLayoutRoot,
  FormLayoutButtonLayout,
  FormLayoutHeader,
  FormLayoutHeaderTitle,
} from "@/shared/ui/Layouts/FormLayout/FormLayout"
import { Button } from "@/shared/ui"
import EditIcon from "@/shared/ui/icons/EditIcon"
import { colorVars } from "@/shared/tokens"
import { uploadEmblem } from "@/features/createTeam/api"
import { DEFAULT_EMBLEM_URL } from "@/shared/lib"
import {
  uploadEmblemStepEditIconInput,
  uploadEmblemStepEditIconWrapper,
  uploadEmblemStepImage,
  uploadEmblemStepImageWrapper,
} from "./UploadEmblemStep.css"
import { uploadEmblemFormSchema } from "../form.schema"
import type { UploadEmblemContext } from "../form.type"

interface Props {
  onNext: (context: UploadEmblemContext) => void
  onBack: () => void
}

export default function UploadEmblemStep({ onNext, onBack }: Props) {
  const [previewUrl, setPreviewUrl] = useState<string>(DEFAULT_EMBLEM_URL)
  const [isUploading, setIsUploading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
  } = useForm<UploadEmblemContext>({
    resolver: zodResolver(uploadEmblemFormSchema),
    mode: "onTouched",
    defaultValues: {
      emblem: DEFAULT_EMBLEM_URL,
    },
  })

  // 파일 선택 시 프리뷰 URL 생성 및 업로드
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setIsUploading(true)

      // 프리뷰 URL 생성
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setPreviewUrl(result)
      }
      reader.readAsDataURL(file)

      // 이미지 업로드
      const uploadedUrl = await uploadEmblem(file, "team-id")
      setValue("emblem", uploadedUrl)
    } catch (error) {
      console.error("이미지 업로드 실패:", error)
      setPreviewUrl(DEFAULT_EMBLEM_URL)
      setValue("emblem", DEFAULT_EMBLEM_URL)
    } finally {
      setIsUploading(false)
    }
  }

  const onSubmit = (data: UploadEmblemContext) => {
    onNext({ emblem: data.emblem })
  }

  console.log(previewUrl)

  return (
    <>
      <NavigationBar>
        <NavigationBarBackButton onClick={onBack} />
        <NavigationBarTitle>팀 엠블럼 등록</NavigationBarTitle>
      </NavigationBar>

      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLayoutRoot>
            <FormLayoutHeader>
              <FormLayoutHeaderTitle>팀 엠블럼을 선택해 주세요</FormLayoutHeaderTitle>
            </FormLayoutHeader>

            <div>
              <div className={uploadEmblemStepImageWrapper}>
                <img src={previewUrl} alt="팀 엠블럼" className={uploadEmblemStepImage} />
                <label className={uploadEmblemStepEditIconWrapper}>
                  <EditIcon color={colorVars.neutral.dark[500]} size={24} />
                  <input
                    type="file"
                    accept="image/*"
                    className={uploadEmblemStepEditIconInput}
                    disabled={isUploading}
                    {...register("emblemFile", {
                      onChange: handleFileChange,
                    })}
                  />
                </label>
              </div>
            </div>

            <FormLayoutButtonLayout>
              <Button type="submit" disabled={!isValid || isUploading}>
                {isUploading ? "업로드 중..." : "다음"}
              </Button>
              <Button variant="terciary" type="button" onClick={onBack}>
                이전 항목
              </Button>
            </FormLayoutButtonLayout>
          </FormLayoutRoot>
        </form>
      </main>
    </>
  )
}
