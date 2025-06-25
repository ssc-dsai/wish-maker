import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout/Layout'
import Login from './pages/Login'
import Explore from './pages/Explore'
import Create from './pages/Create'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import './index.css'

function App() {
  // Mock authentication state - in real app, this would come from Supabase auth
  const isAuthenticated = true // Set to false to see login page

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/explore" replace />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<Create />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/explore" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
