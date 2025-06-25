import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { TrophyIcon, CalendarIcon, UsersIcon } from '@heroicons/react/24/outline'
import { mockLeaderboard, mockContests } from '../data/mockData'
import type { TimeFrame } from '../types'

const Leaderboard: React.FC = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>('weekly')
  const [selectedTab, setSelectedTab] = useState<'leaderboard' | 'contests'>('leaderboard')

  const timeFrames: { key: TimeFrame; label: string }[] = [
    { key: 'weekly', label: 'This Week' },
    { key: 'monthly', label: 'This Month' },
    { key: 'yearly', label: 'This Year' },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return '🥇'
      case 2:
        return '🥈'
      case 3:
        return '🥉'
      default:
        return `#${rank}`
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'completed':
        return 'bg-gray-100 text-gray-800'
      case 'upcoming':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
        <p className="text-gray-600 mt-1">See who's creating the most amazing art</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setSelectedTab('leaderboard')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'leaderboard'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Rankings
          </button>
          <button
            onClick={() => setSelectedTab('contests')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'contests'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Contests
          </button>
        </nav>
      </div>

      {selectedTab === 'leaderboard' && (
        <div className="space-y-6">
          {/* Time Frame Selector */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {timeFrames.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedTimeFrame(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTimeFrame === key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrophyIcon className="h-5 w-5 text-yellow-500" />
                <span>Top Creators</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockLeaderboard.map((entry) => (
                  <div
                    key={entry.user.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold w-12 text-center">
                        {getRankIcon(entry.rank)}
                      </div>
                      <img
                        src={entry.user.avatar_url}
                        alt={entry.user.username}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{entry.user.username}</h3>
                        <p className="text-sm text-gray-600">
                          {entry.generations_count} generations • {entry.total_likes} total likes
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{entry.score}</div>
                      <div className="text-sm text-gray-500">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedTab === 'contests' && (
        <div className="space-y-6">
          <div className="grid gap-6">
            {mockContests.map((contest) => (
              <Card key={contest.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{contest.title}</CardTitle>
                      <p className="text-gray-600 mt-2">{contest.description}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        contest.status
                      )}`}
                    >
                      {contest.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4" />
                      <span>
                        {new Date(contest.start_date).toLocaleDateString()} -{' '}
                        {new Date(contest.end_date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <UsersIcon className="h-4 w-4" />
                      <span>{contest.participants_count} participants</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <TrophyIcon className="h-4 w-4" />
                      <span className="capitalize">{contest.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    {contest.status === 'active' && (
                      <Button size="sm">Join Contest</Button>
                    )}
                    {contest.status === 'completed' && contest.winner_id && (
                      <Button variant="outline" size="sm">View Winner</Button>
                    )}
                    <Button variant="outline" size="sm">View Entries</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Leaderboard 