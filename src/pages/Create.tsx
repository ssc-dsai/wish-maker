import React, { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { SparklesIcon, PhotoIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import { mockGenerations } from '../data/mockData'
import { formatDate } from '../lib/utils'
import ImageDetailModal from '../components/ImageDetailModal'
import type { Generation } from '../types'

const Create: React.FC = () => {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedModel, setSelectedModel] = useState('DALL-E 3')
  const [aspectRatio, setAspectRatio] = useState('1:1')
  const [quality, setQuality] = useState('high')
  const [selectedImage, setSelectedImage] = useState<Generation | null>(null)

  // Filter generations for current user (mock user id: '1')
  const userGenerations = mockGenerations.filter(gen => gen.user_id === '1')

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    // TODO: Implement actual generation with AI model
    setTimeout(() => {
      setIsGenerating(false)
      setPrompt('')
    }, 3000)
  }

  const handleLike = (id: string) => {
    console.log('Liked generation:', id)
    // TODO: Implement like functionality with Supabase
  }

  return (
    <div className="p-6 space-y-8">
      {/* Generation Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <SparklesIcon className="h-5 w-5 text-purple-500" />
            <span>Generate New Art</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Describe what you want to create
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A futuristic cityscape with flying cars and neon lights..."
              className="w-full h-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              disabled={isGenerating}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                disabled={isGenerating}
              >
                <option>DALL-E 3</option>
                <option>Midjourney</option>
                <option>Stable Diffusion</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Aspect Ratio
              </label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                disabled={isGenerating}
              >
                <option>1:1</option>
                <option>16:9</option>
                <option>4:3</option>
                <option>3:4</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quality
              </label>
              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                disabled={isGenerating}
              >
                <option>high</option>
                <option>ultra</option>
                <option>standard</option>
              </select>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <PhotoIcon className="h-5 w-5 mr-2" />
                Generate Art
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* User's Previous Generations */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Past Creations</h2>
        {userGenerations.length > 0 ? (
          <div className="space-y-4">
            {userGenerations.map((generation) => (
              <Card key={generation.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={generation.image_url}
                        alt={generation.prompt}
                        className="w-32 h-32 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedImage(generation)}
                      />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 p-4 space-y-3">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Prompt</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {generation.prompt}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">User:</span>
                          <p className="text-gray-600 dark:text-gray-400">{generation.user?.username}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Model:</span>
                          <p className="text-gray-600 dark:text-gray-400">{generation.parameters?.model || 'N/A'}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Date:</span>
                          <p className="text-gray-600 dark:text-gray-400">{formatDate(generation.created_at)}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Time:</span>
                          <p className="text-gray-600 dark:text-gray-400">
                            {new Date(generation.created_at).toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <HeartIcon className="w-4 h-4" />
                          <span>{generation.likes_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <EyeIcon className="w-4 h-4" />
                          <span>{generation.views_count}</span>
                        </div>
                        {generation.parameters?.steps && (
                          <div>
                            <span className="font-medium">Steps:</span> {generation.parameters.steps}
                          </div>
                        )}
                        {generation.parameters?.guidance && (
                          <div>
                            <span className="font-medium">Guidance:</span> {generation.parameters.guidance}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <PhotoIcon className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No creations yet</h3>
              <p className="text-gray-500 dark:text-gray-400">Start creating amazing AI art with the form above!</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Image Detail Modal */}
      <ImageDetailModal
        generation={selectedImage}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        onLike={handleLike}
      />
    </div>
  )
}

export default Create 