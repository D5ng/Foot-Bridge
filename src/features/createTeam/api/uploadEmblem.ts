import { supabase, TEAM_EMBLEM_BUCKET } from "@/shared/lib"

export async function uploadEmblem(file: File, teamId: string) {
  try {
    // 파일명 생성 (중복 방지)
    const fileExt = file.name.split(".").pop()
    const fileName = `${teamId}-${Date.now()}.${fileExt}`

    // Supabase Storage에 업로드
    const { error: uploadError } = await supabase.storage.from(TEAM_EMBLEM_BUCKET).upload(fileName, file, {
      cacheControl: "3600",
      upsert: true,
    })

    if (uploadError) throw uploadError

    // 공개 URL 가져오기
    const { data } = supabase.storage.from(TEAM_EMBLEM_BUCKET).getPublicUrl(fileName)

    return data.publicUrl
  } catch (error) {
    console.error("이미지 업로드 실패:", error)
    throw error
  }
}
