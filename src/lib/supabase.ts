import { createClient } from '@supabase/supabase-js'

// TODO: Replace with your actual Supabase URL and anon key
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'your-supabase-url'
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database schema types (to be generated from your Supabase schema)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          username: string
          avatar_url?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          username: string
          avatar_url?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          username?: string
          avatar_url?: string
          created_at?: string
          updated_at?: string
        }
      }
      generations: {
        Row: {
          id: string
          user_id: string
          prompt: string
          image_url: string
          parameters?: any
          likes_count: number
          views_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          prompt: string
          image_url: string
          parameters?: any
          likes_count?: number
          views_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          prompt?: string
          image_url?: string
          parameters?: any
          likes_count?: number
          views_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      contests: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          start_date: string
          end_date: string
          status: 'upcoming' | 'active' | 'completed'
          winner_id?: string
          participants_count: number
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: string
          start_date: string
          end_date: string
          status?: 'upcoming' | 'active' | 'completed'
          winner_id?: string
          participants_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: string
          start_date?: string
          end_date?: string
          status?: 'upcoming' | 'active' | 'completed'
          winner_id?: string
          participants_count?: number
          created_at?: string
        }
      }
      likes: {
        Row: {
          id: string
          user_id: string
          generation_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          generation_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          generation_id?: string
          created_at?: string
        }
      }
    }
  }
} 