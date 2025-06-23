/* eslint-disable no-console */
import { supabaseClient } from "../lib"

export async function signInWithKakao() {
  try {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
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
    const { error } = await supabaseClient.auth.signOut()

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
    } = await supabaseClient.auth.getSession()

    if (error) {
      throw error
    }

    return session
  } catch (error) {
    console.error("Get session error:", error)
    throw error
  }
}
