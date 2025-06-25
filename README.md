# 🎨 WishMaker - AI Art Generation Platform

A modern web application for internal teams to create, explore, and compete with AI-generated art. Built with React, TypeScript, Tailwind CSS, and Supabase.

## ✨ Features

### 🔐 Authentication
- Secure login/logout system
- User profile management
- Session persistence

### 🌟 Core Features
- **Explore**: Browse a beautiful grid of recently generated AI art
- **Create**: Generate new AI art with customizable prompts and parameters
- **Leaderboard**: View rankings and participate in creative contests
- **Profile**: Personal dashboard with user statistics and creations
- **Settings**: Manage account preferences and privacy settings

### 🎯 Key Highlights
- Modern, responsive design with smooth animations
- Real-time like and view counters
- Contest system with different categories and timeframes
- User ranking and achievement system
- Beautiful image galleries with hover effects
- Mobile-first responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for backend)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo>
   cd wish-maker
   npm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🗄️ Database Setup (Supabase)

### Required Tables

1. **users**
   ```sql
   CREATE TABLE users (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     username TEXT UNIQUE NOT NULL,
     avatar_url TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

2. **generations**
   ```sql
   CREATE TABLE generations (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id) ON DELETE CASCADE,
     prompt TEXT NOT NULL,
     image_url TEXT NOT NULL,
     parameters JSONB,
     likes_count INTEGER DEFAULT 0,
     views_count INTEGER DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

3. **contests**
   ```sql
   CREATE TABLE contests (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     description TEXT NOT NULL,
     category TEXT NOT NULL,
     start_date TIMESTAMP WITH TIME ZONE NOT NULL,
     end_date TIMESTAMP WITH TIME ZONE NOT NULL,
     status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'active', 'completed')),
     winner_id UUID REFERENCES users(id),
     participants_count INTEGER DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **likes**
   ```sql
   CREATE TABLE likes (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id) ON DELETE CASCADE,
     generation_id UUID REFERENCES generations(id) ON DELETE CASCADE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     UNIQUE(user_id, generation_id)
   );
   ```

### Row Level Security (RLS)
Enable RLS on all tables and create appropriate policies for your use case.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Icons**: Heroicons
- **UI Components**: Custom components with Radix UI primitives
- **State Management**: React Hooks + Context (ready for scaling)

## 📱 Pages Overview

### 🔍 Explore
- Grid layout of all generated art
- Filter by category, popularity, and recency
- Infinite scroll loading
- Like and view interactions

### ✨ Create
- Text-to-image generation interface
- Model selection (DALL-E, Midjourney, Stable Diffusion)
- Aspect ratio and quality controls
- History of user's previous generations

### 🏆 Leaderboard
- **Rankings**: Weekly, monthly, yearly leaderboards
- **Contests**: Active, completed, and upcoming contests
- User statistics and achievements
- Contest participation and voting

### 👤 Profile
- User statistics dashboard
- Personal generation gallery
- Activity timeline
- Achievement badges

### ⚙️ Settings
- Profile information management
- Notification preferences
- Privacy controls
- Account management

## 🎨 Design System

### Colors
- **Primary**: Blue palette for main actions
- **Accent**: Purple palette for creative elements
- **Success**: Green for positive actions
- **Warning**: Yellow for attention
- **Error**: Red for destructive actions

### Components
- Consistent spacing and typography
- Smooth animations and transitions
- Accessible form controls
- Responsive grid layouts

## 🔮 Future Enhancements

- **AI Integration**: Connect to actual text-to-image APIs
- **Real-time Features**: Live generation updates, chat
- **Advanced Filtering**: Search by style, color, mood
- **Social Features**: Comments, shares, collections
- **Admin Dashboard**: Content moderation, analytics
- **Mobile App**: React Native version
- **API**: RESTful API for third-party integrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions and support:
- Create an issue in the repository
- Check the documentation
- Review the code comments for implementation details

---

**Built with ❤️ for creative teams everywhere**
