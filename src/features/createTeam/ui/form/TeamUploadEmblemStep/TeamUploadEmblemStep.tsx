import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { DEFAULT_EMBLEM_URL } from "@/shared/lib"
import useUploadEmblem from "@/features/createTeam/models/useUploadEmblem"
import { uploadEmblem } from "@/entities/team"
import { useUploadPreview } from "@/features/createTeam/models/useUploadPreview"
import { useAuthStore } from "@/shared/stores/authStore"
import type { TeamUploadEmblemContext } from "@/features/createTeam/models/types"
import { teamUploadEmblemFormSchema } from "@/features/createTeam/models"
import {
  uploadEmblemStepEditIconInput,
  uploadEmblemStepEditIconWrapper,
  uploadEmblemStepImage,
  uploadEmblemStepImageWrapper,
} from "./TeamUploadEmblemStep.css"

interface Props {
  isPending: boolean
  onNext: (context: TeamUploadEmblemContext) => void
  onBack: () => void
}

export default function TeamUploadEmblemStep({ isPending, onNext, onBack }: Props) {
  const { user } = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { isValid },
    setValue,
  } = useForm<TeamUploadEmblemContext>({
    resolver: zodResolver(teamUploadEmblemFormSchema),
    mode: "onTouched",
    defaultValues: {
      emblem: DEFAULT_EMBLEM_URL,
    },
  })

  const { previewUrl, generatePreviewUrl } = useUploadPreview({ defaultValue: DEFAULT_EMBLEM_URL })
  const { handleFileChange, isUploading } = useUploadEmblem({
    successCallback: async (file) => {
      await generatePreviewUrl(file)
      const uploadedUrl = await uploadEmblem(file, user?.id ?? "")
      setValue("emblem", uploadedUrl)
    },
    failedCallback: (_error) => {
      generatePreviewUrl(DEFAULT_EMBLEM_URL)
      setValue("emblem", DEFAULT_EMBLEM_URL)
    },
  })

  const onSubmit = (data: TeamUploadEmblemContext) => {
    onNext({ emblem: data.emblem })
  }

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
              <Button type="submit" disabled={!isValid || isUploading || isPending} isLoading={isPending}>
                다음
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
