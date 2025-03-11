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
      achievements: {
        Row: {
          category: string | null
          created_at: string | null
          description: string
          icon: string | null
          id: string
          name: string
          points: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description: string
          icon?: string | null
          id?: string
          name: string
          points?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string
          icon?: string | null
          id?: string
          name?: string
          points?: number | null
        }
        Relationships: []
      }
      challenges: {
        Row: {
          achievement_id: string | null
          created_at: string | null
          description: string
          duration: number | null
          end_date: string | null
          goal: number
          goal_type: string
          id: string
          start_date: string | null
          title: string
        }
        Insert: {
          achievement_id?: string | null
          created_at?: string | null
          description: string
          duration?: number | null
          end_date?: string | null
          goal: number
          goal_type: string
          id?: string
          start_date?: string | null
          title: string
        }
        Update: {
          achievement_id?: string | null
          created_at?: string | null
          description?: string
          duration?: number | null
          end_date?: string | null
          goal?: number
          goal_type?: string
          id?: string
          start_date?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "challenges_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      composers: {
        Row: {
          bio: string | null
          birth_year: number | null
          created_at: string | null
          death_year: number | null
          id: string
          image_url: string | null
          name: string
          nationality: string | null
          period: string | null
        }
        Insert: {
          bio?: string | null
          birth_year?: number | null
          created_at?: string | null
          death_year?: number | null
          id?: string
          image_url?: string | null
          name: string
          nationality?: string | null
          period?: string | null
        }
        Update: {
          bio?: string | null
          birth_year?: number | null
          created_at?: string | null
          death_year?: number | null
          id?: string
          image_url?: string | null
          name?: string
          nationality?: string | null
          period?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          event_date: string
          id: string
          location: string | null
          title: string
          url: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          event_date: string
          id?: string
          location?: string | null
          title: string
          url?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          event_date?: string
          id?: string
          location?: string | null
          title?: string
          url?: string | null
        }
        Relationships: []
      }
      pieces: {
        Row: {
          average_duration: number | null
          composer: string
          composer_id: string | null
          created_at: string | null
          description: string | null
          difficulty: number | null
          genre: string | null
          id: string
          instrument: string
          period: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          average_duration?: number | null
          composer: string
          composer_id?: string | null
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          genre?: string | null
          id?: string
          instrument: string
          period?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          average_duration?: number | null
          composer?: string
          composer_id?: string | null
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          genre?: string | null
          id?: string
          instrument?: string
          period?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pieces_composer_id_fkey"
            columns: ["composer_id"]
            isOneToOne: false
            referencedRelation: "composers"
            referencedColumns: ["id"]
          },
        ]
      }
      practice_sessions: {
        Row: {
          created_at: string | null
          duration: number
          id: string
          notes: string | null
          piece_id: string | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          duration: number
          id?: string
          notes?: string | null
          piece_id?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          duration?: number
          id?: string
          notes?: string | null
          piece_id?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "practice_sessions_piece_id_fkey"
            columns: ["piece_id"]
            isOneToOne: false
            referencedRelation: "pieces"
            referencedColumns: ["id"]
          },
        ]
      }
      practice_streaks: {
        Row: {
          current_streak: number | null
          id: string
          last_practice_date: string | null
          longest_streak: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          current_streak?: number | null
          id?: string
          last_practice_date?: string | null
          longest_streak?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          current_streak?: number | null
          id?: string
          last_practice_date?: string | null
          longest_streak?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          discord_username: string | null
          experience_level: string | null
          full_name: string | null
          id: string
          instagram_username: string | null
          instrument: string | null
          last_seen: string | null
          level: number | null
          online_status: string | null
          profile_accessories: Json | null
          profile_banner: string | null
          profile_color: string | null
          profile_icon: string | null
          telegram_username: string | null
          updated_at: string | null
          xp: number | null
          youtube_channel: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          discord_username?: string | null
          experience_level?: string | null
          full_name?: string | null
          id: string
          instagram_username?: string | null
          instrument?: string | null
          last_seen?: string | null
          level?: number | null
          online_status?: string | null
          profile_accessories?: Json | null
          profile_banner?: string | null
          profile_color?: string | null
          profile_icon?: string | null
          telegram_username?: string | null
          updated_at?: string | null
          xp?: number | null
          youtube_channel?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          discord_username?: string | null
          experience_level?: string | null
          full_name?: string | null
          id?: string
          instagram_username?: string | null
          instrument?: string | null
          last_seen?: string | null
          level?: number | null
          online_status?: string | null
          profile_accessories?: Json | null
          profile_banner?: string | null
          profile_color?: string | null
          profile_icon?: string | null
          telegram_username?: string | null
          updated_at?: string | null
          xp?: number | null
          youtube_channel?: string | null
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_id: string | null
          earned_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          achievement_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          achievement_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_challenges: {
        Row: {
          challenge_id: string | null
          completed: boolean | null
          completed_at: string | null
          id: string
          joined_at: string | null
          progress: number | null
          user_id: string | null
        }
        Insert: {
          challenge_id?: string | null
          completed?: boolean | null
          completed_at?: string | null
          id?: string
          joined_at?: string | null
          progress?: number | null
          user_id?: string | null
        }
        Update: {
          challenge_id?: string | null
          completed?: boolean | null
          completed_at?: string | null
          id?: string
          joined_at?: string | null
          progress?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_connections: {
        Row: {
          connected_user_id: string | null
          created_at: string | null
          id: string
          status: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          connected_user_id?: string | null
          created_at?: string | null
          id?: string
          status: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          connected_user_id?: string | null
          created_at?: string | null
          id?: string
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_events: {
        Row: {
          event_id: string | null
          id: string
          registered_at: string | null
          user_id: string | null
        }
        Insert: {
          event_id?: string | null
          id?: string
          registered_at?: string | null
          user_id?: string | null
        }
        Update: {
          event_id?: string | null
          id?: string
          registered_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_events_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      user_missions: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          mission_id: string
          user_id: string | null
          xp_earned: number | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          mission_id: string
          user_id?: string | null
          xp_earned?: number | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          mission_id?: string
          user_id?: string | null
          xp_earned?: number | null
        }
        Relationships: []
      }
      user_pieces: {
        Row: {
          created_at: string | null
          id: string
          mastered_at: string | null
          notes: string | null
          piece_id: string | null
          progress: number | null
          started_at: string | null
          status: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          mastered_at?: string | null
          notes?: string | null
          piece_id?: string | null
          progress?: number | null
          started_at?: string | null
          status: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          mastered_at?: string | null
          notes?: string | null
          piece_id?: string | null
          progress?: number | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_pieces_piece_id_fkey"
            columns: ["piece_id"]
            isOneToOne: false
            referencedRelation: "pieces"
            referencedColumns: ["id"]
          },
        ]
      }
      user_settings: {
        Row: {
          created_at: string | null
          deepseek_api_key: string | null
          id: string
          notifications_enabled: boolean | null
          theme: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          deepseek_api_key?: string | null
          id?: string
          notifications_enabled?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          deepseek_api_key?: string | null
          id?: string
          notifications_enabled?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      schedule_update_user_status: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      set_users_offline: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
