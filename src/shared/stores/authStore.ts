/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { User, Session } from "@supabase/supabase-js"
import { supabase } from "../api"

interface AuthState {
  user: User | null
  session: Session | null
  isLoading: boolean
  isInitialized: boolean
  isAuthenticated: boolean
  initialize: () => Promise<void>
  signOut: () => Promise<void>
  setUser: (user: User | null) => void
  setSession: (session: Session | null) => void
  setLoading: (loading: boolean) => void
}

// localStorage에서 초기 세션 정보 읽기
function getInitialAuthState() {
  try {
    const savedSession = localStorage.getItem("sb-[PROJECT_REF]-auth-token")
    if (savedSession) {
      const parsed = JSON.parse(savedSession)
      if (parsed?.user && parsed?.access_token) {
        return {
          user: parsed.user,
          session: parsed,
          isAuthenticated: true,
          isLoading: false, // 이미 세션이 있으니 로딩 false
        }
      }
    }
  } catch (error) {
    console.error("Failed to read initial auth state:", error)
  }

  return {
    user: null,
    session: null,
    isAuthenticated: false,
    isLoading: true, // 세션이 없으면 로딩 상태
  }
}

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => {
      const initialState = getInitialAuthState()

      return {
        ...initialState,
        isInitialized: false,

        initialize: async () => {
          try {
            // Supabase에서 정확한 세션 확인
            const {
              data: { session },
              error,
            } = await supabase.auth.getSession()

            if (error) {
              console.error("Error getting session:", error)
            }

            set({
              session,
              user: session?.user ?? null,
              isAuthenticated: !!session,
              isLoading: false,
              isInitialized: true,
            })

            // 인증 상태 변화 구독 (한 번만)
            supabase.auth.onAuthStateChange((event, session) => {
              console.log("Auth state changed:", event)

              set({
                session,
                user: session?.user ?? null,
                isAuthenticated: !!session,
                isLoading: false,
                isInitialized: true,
              })
            })
          } catch (error) {
            console.error("Auth initialization error:", error)
            set({
              isLoading: false,
              isInitialized: true,
              user: null,
              session: null,
              isAuthenticated: false,
            })
          }
        },

        signOut: async () => {
          try {
            const { error } = await supabase.auth.signOut()
            if (error) {
              console.error("Sign out error:", error)
              throw error
            }
          } catch (error) {
            console.error("Sign out failed:", error)
            throw error
          }
        },

        setUser: (user) => set({ user, isAuthenticated: !!user }),
        setSession: (session) =>
          set({
            session,
            user: session?.user ?? null,
            isAuthenticated: !!session,
          }),
        setLoading: (isLoading) => set({ isLoading }),
      }
    },
    {
      name: "auth-store",
    }
  )
)
