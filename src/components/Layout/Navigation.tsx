import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { 
  HomeIcon, 
  SparklesIcon, 
  TrophyIcon, 
  UserIcon, 
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline'

const Navigation = () => {
  const location = useLocation()
  
  const navItems = [
    { name: 'Explore', href: '/explore', icon: HomeIcon },
    { name: 'Create', href: '/create', icon: SparklesIcon },
    { name: 'Leaderboard', href: '/leaderboard', icon: TrophyIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/explore" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <SparklesIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WishMaker</span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">Alex Creative</span>
          </div>
          
          <Button variant="ghost" size="sm">
            <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 