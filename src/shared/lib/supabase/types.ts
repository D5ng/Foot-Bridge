export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      match_requests: {
        Row: {
          applied_at: string | null
          id: string
          match_id: string
          responded_at: string | null
          status: Database["public"]["Enums"]["match_request_status_enum"]
          team_id: string
        }
        Insert: {
          applied_at?: string | null
          id?: string
          match_id: string
          responded_at?: string | null
          status?: Database["public"]["Enums"]["match_request_status_enum"]
          team_id: string
        }
        Update: {
          applied_at?: string | null
          id?: string
          match_id?: string
          responded_at?: string | null
          status?: Database["public"]["Enums"]["match_request_status_enum"]
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_requests_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_requests_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          confirmed_team_id: string | null
          created_at: string
          description: string
          field_name: string
          id: string
          match_date: string
          match_format: string
          match_status: Database["public"]["Enums"]["match_status_enum"]
          match_time: string
          team_id: string
          updated_at: string | null
        }
        Insert: {
          confirmed_team_id?: string | null
          created_at?: string
          description: string
          field_name: string
          id?: string
          match_date: string
          match_format: string
          match_status?: Database["public"]["Enums"]["match_status_enum"]
          match_time: string
          team_id: string
          updated_at?: string | null
        }
        Update: {
          confirmed_team_id?: string | null
          created_at?: string
          description?: string
          field_name?: string
          id?: string
          match_date?: string
          match_format?: string
          match_status?: Database["public"]["Enums"]["match_status_enum"]
          match_time?: string
          team_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          match_id: string | null
          message: string | null
          status: Database["public"]["Enums"]["notification_status_enum"]
          team_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          match_id?: string | null
          message?: string | null
          status?: Database["public"]["Enums"]["notification_status_enum"]
          team_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          match_id?: string | null
          message?: string | null
          status?: Database["public"]["Enums"]["notification_status_enum"]
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          activity_days: string[]
          average_age: string
          created_at: string
          emblem_url: string
          id: string
          match_times: string[]
          owner_id: string
          team_intro: string
          team_leader_name: string
          team_leader_phone: string
          team_level: Database["public"]["Enums"]["team_level"]
          team_name: string
        }
        Insert: {
          activity_days: string[]
          average_age: string
          created_at?: string
          emblem_url: string
          id?: string
          match_times: string[]
          owner_id: string
          team_intro: string
          team_leader_name: string
          team_leader_phone: string
          team_level?: Database["public"]["Enums"]["team_level"]
          team_name: string
        }
        Update: {
          activity_days?: string[]
          average_age?: string
          created_at?: string
          emblem_url?: string
          id?: string
          match_times?: string[]
          owner_id?: string
          team_intro?: string
          team_leader_name?: string
          team_leader_phone?: string
          team_level?: Database["public"]["Enums"]["team_level"]
          team_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      match_request_status_enum: "pending" | "accepted" | "rejected"
      match_status_enum: "pending" | "accepted" | "confirmed" | "cancelled"
      notification_status_enum: "unread" | "read" | "archived"
      team_level: "비기너" | "아마추어" | "세미프로" | "프로"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      match_request_status_enum: ["pending", "accepted", "rejected"],
      match_status_enum: ["pending", "accepted", "confirmed", "cancelled"],
      notification_status_enum: ["unread", "read", "archived"],
      team_level: ["비기너", "아마추어", "세미프로", "프로"],
    },
  },
} as const
