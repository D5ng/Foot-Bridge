import { useState } from "react"
import { readFileAsDataUrl } from "@/features/createTeam/lib"

interface Params {
  successCallback?: (file: File) => Promise<void>
  failedCallback?: (error: Error) => void
}

export default function useUploadEmblem({ successCallback, failedCallback }: Params) {
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    try {
      setIsUploading(true)
      await readFileAsDataUrl(file)

      if (successCallback) {
        await successCallback(file)
      }
    } catch (error) {
      if (failedCallback) {
        failedCallback(error as Error)
      }
    } finally {
      setIsUploading(false)
    }
  }

  return {
    isUploading,
    handleFileChange,
  }
}
