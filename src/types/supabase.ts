export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string | null
          avatar_url: string | null
          created_at: string
          total_xp: number
          current_level: number
          streak_days: number
          last_activity: string | null
        }
        Insert: {
          id: string
          username?: string | null
          avatar_url?: string | null
          created_at?: string
          total_xp?: number
          current_level?: number
          streak_days?: number
          last_activity?: string | null
        }
        Update: {
          id?: string
          username?: string | null
          avatar_url?: string | null
          created_at?: string
          total_xp?: number
          current_level?: number
          streak_days?: number
          last_activity?: string | null
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          completed_at: string
          score: number
          attempts: number
          time_spent: number | null
          hints_used: number
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          completed_at?: string
          score?: number
          attempts?: number
          time_spent?: number | null
          hints_used?: number
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          completed_at?: string
          score?: number
          attempts?: number
          time_spent?: number | null
          hints_used?: number
        }
      }
      badges: {
        Row: {
          id: string
          name: string
          description: string | null
          icon: string | null
          xp_reward: number
          rarity: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          icon?: string | null
          xp_reward?: number
          rarity?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          icon?: string | null
          xp_reward?: number
          rarity?: string
        }
      }
      user_badges: {
        Row: {
          id: string
          user_id: string
          badge_id: string
          earned_at: string
        }
        Insert: {
          id?: string
          user_id: string
          badge_id: string
          earned_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          badge_id?: string
          earned_at?: string
        }
      }
      srcode_interactions: {
        Row: {
          id: string
          user_id: string
          interaction_type: string
          context: string | null
          user_message: string | null
          srcode_response: string
          mood: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          interaction_type: string
          context?: string | null
          user_message?: string | null
          srcode_response: string
          mood?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          interaction_type?: string
          context?: string | null
          user_message?: string | null
          srcode_response?: string
          mood?: string | null
          created_at?: string
        }
      }
      leaderboard: {
        Row: {
          id: string
          user_id: string
          weekly_xp: number
          monthly_xp: number
          all_time_xp: number
          week_start: string | null
          month_start: string | null
        }
        Insert: {
          id?: string
          user_id: string
          weekly_xp?: number
          monthly_xp?: number
          all_time_xp?: number
          week_start?: string | null
          month_start?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          weekly_xp?: number
          monthly_xp?: number
          all_time_xp?: number
          week_start?: string | null
          month_start?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}