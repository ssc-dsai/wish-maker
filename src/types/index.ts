export interface User {
  id: string
  email: string
  username: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Generation {
  id: string
  user_id: string
  prompt: string
  image_url: string
  parameters?: {
    model?: string
    style?: string
    aspect_ratio?: string
    quality?: string
    height?: number
    steps?: number
    guidance?: number
  }
  likes_count: number
  views_count: number
  created_at: string
  updated_at: string
  user?: User
  is_liked?: boolean
}

export interface Contest {
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

export interface Vote {
  id: string
  user_id: string
  generation_id: string
  contest_id: string
  created_at: string
}

export interface LeaderboardEntry {
  user: User
  score: number
  rank: number
  generations_count: number
  total_likes: number
}

export type TimeFrame = 'weekly' | 'monthly' | 'yearly'
export type Category = 'abstract' | 'portrait' | 'landscape' | 'fantasy' | 'sci-fi' | 'architecture' 