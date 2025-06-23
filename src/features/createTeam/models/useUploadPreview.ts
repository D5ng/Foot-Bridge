import { useState } from "react"
import { readFileAsDataUrl } from "@/features/createTeam/lib"

interface Params<T extends string> {
  defaultValue?: T
}

export function useUploadPreview<T extends string = string>({ defaultValue }: Params<T> = {}) {
  const [previewUrl, setPreviewUrl] = useState<T>((defaultValue ?? "") as T)

  const generatePreviewUrl = async (data: File | string) => {
    if (typeof data === "string") {
      setPreviewUrl(data as T)
      return
    }

    const result = await readFileAsDataUrl(data)
    setPreviewUrl(result as T)
  }

  return {
    previewUrl,
    generatePreviewUrl,
  }
}
