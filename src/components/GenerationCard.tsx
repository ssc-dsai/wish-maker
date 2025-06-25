import React, { useState } from 'react'
import { HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { Card, CardContent } from './ui/Card'
import { Button } from './ui/Button'
import { cn } from '../lib/utils'
import type { Generation } from '../types'

interface GenerationCardProps {
  generation: Generation
  onLike?: (id: string) => void
  onImageClick?: (generation: Generation) => void
  className?: string
}

const GenerationCard: React.FC<GenerationCardProps> = ({ 
  generation, 
  onLike,
  onImageClick,
  className 
}) => {
  const [isLiked, setIsLiked] = useState(generation.is_liked || false)
  const [likesCount, setLikesCount] = useState(generation.likes_count)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newLikedState = !isLiked
    setIsLiked(newLikedState)
    setLikesCount(prev => newLikedState ? prev + 1 : prev - 1)
    onLike?.(generation.id)
  }

  const handleImageClick = () => {
    onImageClick?.(generation)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  // Extract height from URL or use default
  const getImageHeight = () => {
    const urlMatch = generation.image_url.match(/\/(\d+)\/(\d+)/)
    if (urlMatch) {
      return parseInt(urlMatch[2], 10) // height is the second number
    }
    return generation.parameters?.height || 400 // fallback
  }

  const imageHeight = getImageHeight()

  return (
    <Card className={cn('overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-gray-100 dark:bg-gray-800 m-0 rounded-none', className)} style={{ width: '300px' }}>
      <CardContent className="p-0 m-0">
        <div className="relative" onClick={handleImageClick}>
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div 
              className="w-full image-loading"
              style={{ height: `${imageHeight}px`, width: '300px' }}
            />
          )}
          
          {/* Main image */}
          <img
            src={generation.image_url}
            alt={generation.prompt}
            className={cn(
              'object-cover transition-all duration-300',
              imageLoaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0 absolute inset-0',
              imageError && 'opacity-50'
            )}
            style={{ height: `${imageHeight}px`, width: '300px' }}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          {/* Error state */}
          {imageError && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700"
              style={{ height: `${imageHeight}px`, width: '300px' }}
            >
              <span className="text-xs text-gray-500 dark:text-gray-400">Failed to load</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
          
          {/* User info overlay on top */}
          <div className="absolute top-1.5 left-1.5 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src={generation.user?.avatar_url}
              alt={generation.user?.username}
              className="w-5 h-5 rounded-full border border-white/30"
              onError={(e) => {
                e.currentTarget.src = `https://i.pravatar.cc/150?img=50`
              }}
            />
            <span className="text-xs font-medium text-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm">
              {generation.user?.username}
            </span>
          </div>

          {/* Model badge */}
          {generation.parameters?.model && (
            <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs bg-black/60 text-white px-1.5 py-0.5 rounded backdrop-blur-sm">
                {generation.parameters.model}
              </span>
            </div>
          )}
          
          {/* Hover overlay with stats */}
          <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2">
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <HeartIcon className="w-3.5 h-3.5" />
                  <span>{likesCount}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <EyeIcon className="w-3.5 h-3.5" />
                  <span>{generation.views_count}</span>
                </div>
              </div>
              <Button
                size="sm"
                variant="secondary"
                onClick={handleLike}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 p-1 h-auto"
              >
                {isLiked ? (
                  <HeartSolidIcon className="w-3.5 h-3.5 text-red-400" />
                ) : (
                  <HeartIcon className="w-3.5 h-3.5 text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default GenerationCard 