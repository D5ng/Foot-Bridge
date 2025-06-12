/* eslint-disable no-console */
import { supabase } from "@/shared/lib/supabase"

export async function signInWithKakao() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: import.meta.env.VITE_KAKAO_CALLBACK_URL,
      },
    })

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error("Kakao sign in error:", error)
    throw error
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error
    }
  } catch (error) {
    console.error("Sign out error:", error)
    throw error
  }
}

export async function getSession() {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession()

    if (error) {
      throw error
    }

    return session
  } catch (error) {
    console.error("Get session error:", error)
    throw error
  }
}
