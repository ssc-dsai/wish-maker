import React from 'react'
import { XMarkIcon, HeartIcon, EyeIcon, ShareIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { Button } from './ui/Button'
import { formatTimeAgo } from '../lib/utils'
import type { Generation } from '../types'

interface ImageDetailModalProps {
  generation: Generation | null
  isOpen: boolean
  onClose: () => void
  onLike?: (id: string) => void
}

const ImageDetailModal: React.FC<ImageDetailModalProps> = ({
  generation,
  isOpen,
  onClose,
  onLike
}) => {
  if (!isOpen || !generation) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleLike = () => {
    onLike?.(generation.id)
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full max-h-full overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-900 rounded-lg overflow-hidden max-h-[90vh]">
          {/* Image Section */}
          <div className="lg:flex-1 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <img
              src={generation.image_url}
              alt={generation.prompt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Details Sidebar */}
          <div className="lg:w-96 p-6 overflow-y-auto">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={generation.user?.avatar_url}
                alt={generation.user?.username}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {generation.user?.username}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatTimeAgo(generation.created_at)}
                </p>
              </div>
            </div>

            {/* Prompt */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Prompt</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {generation.prompt}
              </p>
            </div>

            {/* Parameters */}
            {generation.parameters && (
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Parameters</h4>
                <div className="space-y-2">
                  {generation.parameters.model && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Model:</span>
                      <span className="text-sm text-gray-900 dark:text-white">{generation.parameters.model}</span>
                    </div>
                  )}
                  {generation.parameters.aspect_ratio && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Aspect Ratio:</span>
                      <span className="text-sm text-gray-900 dark:text-white">{generation.parameters.aspect_ratio}</span>
                    </div>
                  )}
                  {generation.parameters.quality && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Quality:</span>
                      <span className="text-sm text-gray-900 dark:text-white">{generation.parameters.quality}</span>
                    </div>
                  )}
                  {generation.parameters.style && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Style:</span>
                      <span className="text-sm text-gray-900 dark:text-white">{generation.parameters.style}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <HeartIcon className="w-4 h-4" />
                <span>{generation.likes_count}</span>
              </div>
              <div className="flex items-center space-x-1">
                <EyeIcon className="w-4 h-4" />
                <span>{generation.views_count}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLike}
                className="flex-1"
              >
                {generation.is_liked ? (
                  <HeartSolidIcon className="w-4 h-4 text-red-500 mr-2" />
                ) : (
                  <HeartIcon className="w-4 h-4 mr-2" />
                )}
                Like
              </Button>
              
              <Button variant="outline" size="sm">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
              
              <Button variant="outline" size="sm">
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>

            {/* Copy Prompt Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full mt-4 text-blue-600 dark:text-blue-400"
              onClick={() => navigator.clipboard.writeText(generation.prompt)}
            >
              Copy Prompt
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageDetailModal 