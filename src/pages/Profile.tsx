import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import GenerationCard from '../components/GenerationCard'
import { PencilIcon, CalendarIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import { mockGenerations, mockUsers } from '../data/mockData'

const Profile: React.FC = () => {
  // Mock current user (in real app, this would come from auth context)
  const currentUser = mockUsers[0]
  const userGenerations = mockGenerations.filter(gen => gen.user_id === currentUser.id)
  
  const totalLikes = userGenerations.reduce((sum, gen) => sum + gen.likes_count, 0)
  const totalViews = userGenerations.reduce((sum, gen) => sum + gen.views_count, 0)

  const handleLike = (id: string) => {
    console.log('Liked generation:', id)
  }

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-start space-x-6">
            <img
              src={currentUser.avatar_url}
              alt={currentUser.username}
              className="w-24 h-24 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{currentUser.username}</h1>
                  <p className="text-gray-600">{currentUser.email}</p>
                </div>
                <Button variant="outline">
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{userGenerations.length}</div>
                  <div className="text-sm text-gray-600">Generations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{totalLikes}</div>
                  <div className="text-sm text-gray-600">Total Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{totalViews}</div>
                  <div className="text-sm text-gray-600">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3</div>
                  <div className="text-sm text-gray-600">Contests Won</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">
                Created <span className="font-medium">"Portrait of a wise elderly wizard..."</span> 3 days ago
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">
                Won <span className="font-medium">Abstract Art Showcase</span> contest 1 week ago
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">
                Reached <span className="font-medium">100 total likes</span> 2 weeks ago
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User's Generations */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Creations</h2>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Recent</option>
              <option>Most Liked</option>
              <option>Most Viewed</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {userGenerations.map((generation) => (
            <GenerationCard
              key={generation.id}
              generation={generation}
              onLike={handleLike}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile 