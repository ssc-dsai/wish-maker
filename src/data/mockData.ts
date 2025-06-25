import type { Generation, User, Contest, LeaderboardEntry } from '../types'

// Helper function to generate random height between 350-550, rounded to next 5
const getRandomHeight = () => {
  const baseHeight = Math.floor(Math.random() * 201) + 350; // 350-550
  return Math.ceil(baseHeight / 5) * 5; // Round up to next 5
}

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'alex@company.com',
    username: 'alex_creative',
    avatar_url: 'https://i.pravatar.cc/150?img=12',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-06-20T15:45:00Z'
  },
  {
    id: '2',
    email: 'bob@company.com',
    username: 'bob_creative',
    avatar_url: 'https://i.pravatar.cc/150?img=3',
    created_at: '2024-02-01T09:15:00Z',
    updated_at: '2024-06-19T11:20:00Z'
  },
  {
    id: '3',
    email: 'carol@company.com',
    username: 'carol_artist',
    avatar_url: 'https://i.pravatar.cc/150?img=5',
    created_at: '2024-01-20T14:22:00Z',
    updated_at: '2024-06-18T16:30:00Z'
  },
  {
    id: '4',
    email: 'david@company.com',
    username: 'david_pixel',
    avatar_url: 'https://i.pravatar.cc/150?img=7',
    created_at: '2024-01-10T08:15:00Z',
    updated_at: '2024-06-17T12:20:00Z'
  },
  {
    id: '5',
    email: 'emma@company.com',
    username: 'emma_vision',
    avatar_url: 'https://i.pravatar.cc/150?img=9',
    created_at: '2024-02-05T11:30:00Z',
    updated_at: '2024-06-16T14:45:00Z'
  },
  {
    id: '6',
    email: 'frank@company.com',
    username: 'frank_dreams',
    avatar_url: 'https://i.pravatar.cc/150?img=11',
    created_at: '2024-01-25T13:20:00Z',
    updated_at: '2024-06-15T16:10:00Z'
  },
  {
    id: '7',
    email: 'grace@company.com',
    username: 'grace_mind',
    avatar_url: 'https://i.pravatar.cc/150?img=13',
    created_at: '2024-02-10T10:45:00Z',
    updated_at: '2024-06-14T18:30:00Z'
  }
]

export const mockGenerations: Generation[] = [
  {
    id: '1',
    user_id: '1',
    prompt: 'A majestic mountain landscape at sunset with aurora borealis dancing in the sky',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'photorealistic',
      aspect_ratio: '3:4',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 42,
    views_count: 156,
    created_at: '2024-06-20T10:30:00Z',
    updated_at: '2024-06-20T10:30:00Z',
    user: mockUsers[0],
    is_liked: false
  },
  {
    id: '2',
    user_id: '2',
    prompt: 'Cyberpunk cityscape with neon lights reflecting on wet streets',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Midjourney',
      style: 'cyberpunk',
      aspect_ratio: 'tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 67,
    views_count: 203,
    created_at: '2024-06-19T15:45:00Z',
    updated_at: '2024-06-19T15:45:00Z',
    user: mockUsers[1],
    is_liked: true
  },
  {
    id: '3',
    user_id: '3',
    prompt: 'Abstract geometric patterns in vibrant colors, minimalist design',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Stable Diffusion',
      style: 'abstract',
      aspect_ratio: '1:1',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 89,
    views_count: 312,
    created_at: '2024-06-18T12:20:00Z',
    updated_at: '2024-06-18T12:20:00Z',
    user: mockUsers[2],
    is_liked: false
  },
  {
    id: '4',
    user_id: '4',
    prompt: 'Portrait of a wise elderly wizard with flowing robes',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'fantasy',
      aspect_ratio: 'tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 34,
    views_count: 145,
    created_at: '2024-06-17T09:15:00Z',
    updated_at: '2024-06-17T09:15:00Z',
    user: mockUsers[3],
    is_liked: true
  },
  {
    id: '5',
    user_id: '5',
    prompt: 'Futuristic architecture with flowing curves and glass surfaces',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Midjourney',
      style: 'architectural',
      aspect_ratio: '4:5',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 56,
    views_count: 189,
    created_at: '2024-06-16T16:30:00Z',
    updated_at: '2024-06-16T16:30:00Z',
    user: mockUsers[4],
    is_liked: false
  },
  {
    id: '6',
    user_id: '6',
    prompt: 'Serene Japanese garden with cherry blossoms and koi pond',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Stable Diffusion',
      style: 'traditional',
      aspect_ratio: 'tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 78,
    views_count: 234,
    created_at: '2024-06-15T11:45:00Z',
    updated_at: '2024-06-15T11:45:00Z',
    user: mockUsers[5],
    is_liked: true
  },
  {
    id: '7',
    user_id: '1',
    prompt: 'Underwater coral reef with tropical fish and sunbeams',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'photorealistic',
      aspect_ratio: 'wide',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 123,
    views_count: 445,
    created_at: '2024-06-14T14:20:00Z',
    updated_at: '2024-06-14T14:20:00Z',
    user: mockUsers[0],
    is_liked: false
  },
  {
    id: '8',
    user_id: '2',
    prompt: 'Steampunk airship floating through cloudy skies',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Midjourney',
      style: 'steampunk',
      aspect_ratio: 'extra-tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 91,
    views_count: 267,
    created_at: '2024-06-13T08:30:00Z',
    updated_at: '2024-06-13T08:30:00Z',
    user: mockUsers[1],
    is_liked: true
  },
  {
    id: '9',
    user_id: '3',
    prompt: 'Minimalist desert landscape with single cactus at dawn',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Stable Diffusion',
      style: 'minimalist',
      aspect_ratio: '6:7',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 156,
    views_count: 523,
    created_at: '2024-06-12T16:45:00Z',
    updated_at: '2024-06-12T16:45:00Z',
    user: mockUsers[2],
    is_liked: false
  },
  {
    id: '10',
    user_id: '4',
    prompt: 'Gothic cathedral interior with stained glass windows',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'gothic',
      aspect_ratio: 'tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 203,
    views_count: 678,
    created_at: '2024-06-11T12:15:00Z',
    updated_at: '2024-06-11T12:15:00Z',
    user: mockUsers[3],
    is_liked: true
  },
  {
    id: '11',
    user_id: '5',
    prompt: 'Neon-lit cyberpunk street market at night',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Midjourney',
      style: 'cyberpunk',
      aspect_ratio: 'wide',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 87,
    views_count: 234,
    created_at: '2024-06-10T19:30:00Z',
    updated_at: '2024-06-10T19:30:00Z',
    user: mockUsers[4],
    is_liked: false
  },
  {
    id: '12',
    user_id: '6',
    prompt: 'Enchanted forest with glowing mushrooms and fairy lights',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Stable Diffusion',
      style: 'fantasy',
      aspect_ratio: 'tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 245,
    views_count: 789,
    created_at: '2024-06-09T15:20:00Z',
    updated_at: '2024-06-09T15:20:00Z',
    user: mockUsers[5],
    is_liked: true
  },
  {
    id: '13',
    user_id: '7',
    prompt: 'Art deco building facade with geometric patterns',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'art deco',
      aspect_ratio: '4:5',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 134,
    views_count: 456,
    created_at: '2024-06-08T11:45:00Z',
    updated_at: '2024-06-08T11:45:00Z',
    user: mockUsers[6],
    is_liked: false
  },
  {
    id: '14',
    user_id: '1',
    prompt: 'Floating islands in the sky with waterfalls',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Midjourney',
      style: 'fantasy',
      aspect_ratio: 'extra-tall',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 298,
    views_count: 834,
    created_at: '2024-06-07T13:30:00Z',
    updated_at: '2024-06-07T13:30:00Z',
    user: mockUsers[0],
    is_liked: true
  },
  {
    id: '15',
    user_id: '2',
    prompt: 'Crystalline cave with rainbow light reflections',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Stable Diffusion',
      style: 'crystalline',
      aspect_ratio: '1:1',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 167,
    views_count: 543,
    created_at: '2024-06-06T10:15:00Z',
    updated_at: '2024-06-06T10:15:00Z',
    user: mockUsers[1],
    is_liked: false
  },
  {
    id: '16',
    user_id: '3',
    prompt: 'Victorian mansion on a misty hill at twilight',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'victorian',
      aspect_ratio: 'tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 189,
    views_count: 623,
    created_at: '2024-06-05T17:45:00Z',
    updated_at: '2024-06-05T17:45:00Z',
    user: mockUsers[2],
    is_liked: true
  },
  {
    id: '17',
    user_id: '4',
    prompt: 'Space station orbiting a colorful nebula',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Midjourney',
      style: 'sci-fi',
      aspect_ratio: 'wide',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 234,
    views_count: 712,
    created_at: '2024-06-04T14:20:00Z',
    updated_at: '2024-06-04T14:20:00Z',
    user: mockUsers[3],
    is_liked: false
  },
  {
    id: '18',
    user_id: '5',
    prompt: 'Ancient temple ruins overgrown with jungle vines',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Stable Diffusion',
      style: 'ancient',
      aspect_ratio: 'tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 145,
    views_count: 489,
    created_at: '2024-06-03T09:30:00Z',
    updated_at: '2024-06-03T09:30:00Z',
    user: mockUsers[4],
    is_liked: true
  },
  {
    id: '19',
    user_id: '6',
    prompt: 'Bioluminescent jellyfish in deep ocean depths',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'bioluminescent',
      aspect_ratio: 'extra-tall',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 278,
    views_count: 856,
    created_at: '2024-06-02T16:15:00Z',
    updated_at: '2024-06-02T16:15:00Z',
    user: mockUsers[5],
    is_liked: false
  },
  {
    id: '20',
    user_id: '7',
    prompt: 'Retro-futuristic car in neon city backdrop',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Midjourney',
      style: 'retro-futuristic',
      aspect_ratio: 'wide',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 312,
    views_count: 945,
    created_at: '2024-06-01T12:45:00Z',
    updated_at: '2024-06-01T12:45:00Z',
    user: mockUsers[6],
    is_liked: true
  },
  {
    id: '21',
    user_id: '1',
    prompt: 'Surreal melting clocks in desert landscape',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'Stable Diffusion',
      style: 'surreal',
      aspect_ratio: '4:5',
      quality: 'high',
      height: getRandomHeight()
    },
    likes_count: 201,
    views_count: 667,
    created_at: '2024-05-31T18:30:00Z',
    updated_at: '2024-05-31T18:30:00Z',
    user: mockUsers[0],
    is_liked: false
  },
  {
    id: '22',
    user_id: '2',
    prompt: 'Dragon perched on mountain peak at sunrise',
    image_url: `https://picsum.photos/300/${getRandomHeight()}`,
    parameters: {
      model: 'DALL-E 3',
      style: 'fantasy',
      aspect_ratio: 'tall',
      quality: 'ultra',
      height: getRandomHeight()
    },
    likes_count: 389,
    views_count: 1234,
    created_at: '2024-05-30T08:15:00Z',
    updated_at: '2024-05-30T08:15:00Z',
    user: mockUsers[1],
    is_liked: true
  }
]

export const mockContests: Contest[] = [
  {
    id: '1',
    title: 'Future Cities Challenge',
    description: 'Design the city of tomorrow with sustainable architecture and innovative transportation',
    category: 'architecture',
    start_date: '2024-06-01T00:00:00Z',
    end_date: '2024-06-30T23:59:59Z',
    status: 'active',
    participants_count: 23,
    created_at: '2024-05-25T10:00:00Z'
  },
  {
    id: '2',
    title: 'Abstract Art Showcase',
    description: 'Create stunning abstract compositions using geometric patterns and vibrant colors',
    category: 'abstract',
    start_date: '2024-05-01T00:00:00Z',
    end_date: '2024-05-31T23:59:59Z',
    status: 'completed',
    winner_id: '3',
    participants_count: 31,
    created_at: '2024-04-25T10:00:00Z'
  },
  {
    id: '3',
    title: 'Portrait Masters',
    description: 'Capture the essence of humanity through creative portrait generation',
    category: 'portrait',
    start_date: '2024-07-01T00:00:00Z',
    end_date: '2024-07-31T23:59:59Z',
    status: 'upcoming',
    participants_count: 0,
    created_at: '2024-06-20T10:00:00Z'
  }
]

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    user: mockUsers[2],
    score: 1234,
    rank: 1,
    generations_count: 45,
    total_likes: 892
  },
  {
    user: mockUsers[1],
    score: 1156,
    rank: 2,
    generations_count: 38,
    total_likes: 734
  },
  {
    user: mockUsers[0],
    score: 967,
    rank: 3,
    generations_count: 32,
    total_likes: 623
  }
] 