import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { useTheme } from '../../contexts/ThemeContext'
import { 
  HomeIcon, 
  SparklesIcon, 
  TrophyIcon, 
  UserIcon, 
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'

const Sidebar = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  
  const navItems = [
    { name: 'Explore', href: '/explore', icon: HomeIcon },
    { name: 'Create', href: '/create', icon: SparklesIcon },
    { name: 'Leaderboard', href: '/leaderboard', icon: TrophyIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-48 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link to="/explore" className="flex items-center space-x-2">
          <img 
            src="/icon-128x128.webp" 
            alt="WishMaker" 
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">WishMaker</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 w-full transition-all duration-200"
        >
          {theme === 'light' ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User avatar"
            className="w-5 h-5 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
              Alex Creative
            </span>
          </div>
        </div>
        
        {/* Logout */}
        <button className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 w-full transition-all duration-200">
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar 