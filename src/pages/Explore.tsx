import React, { useState, useMemo } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { mockGenerations } from '../data/mockData'
import GenerationCard from '../components/GenerationCard'
import ImageDetailModal from '../components/ImageDetailModal'
import type { Generation } from '../types'

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedImage, setSelectedImage] = useState<Generation | null>(null)

  const handleLike = (id: string) => {
    console.log('Liked generation:', id)
    // TODO: Implement like functionality with Supabase
  }

  // Filter generations based on search term with debounced effect
  const filteredGenerations = useMemo(() => {
    if (!searchTerm.trim()) {
      return mockGenerations
    }
    
    const searchLower = searchTerm.toLowerCase()
    return mockGenerations.filter(generation => {
      return generation.prompt.toLowerCase().includes(searchLower) ||
             (generation.user?.username || '').toLowerCase().includes(searchLower) ||
             (generation.parameters?.model || '').toLowerCase().includes(searchLower)
    })
  }, [searchTerm])

  // Distribute items across exactly 5 columns for masonry layout
  const columns = useMemo(() => {
    const numColumns = 5
    const columnArrays: Generation[][] = Array.from({ length: numColumns }, () => [])
    
    filteredGenerations.forEach((item, index) => {
      const columnIndex = index % numColumns
      columnArrays[columnIndex].push(item)
    })
    
    return columnArrays
  }, [filteredGenerations])

  return (
    <div className="space-y-6">
      {/* Search Only */}
      <div className="flex justify-center">
        <div className="relative w-full">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search prompts, creators, or models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          />
        </div>
      </div>

      {/* Masonry Grid - Exactly 5 Columns */}
      <div className="flex gap-0 items-start">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col gap-0">
            {column.map((generation) => (
              <GenerationCard
                key={generation.id}
                generation={generation}
                onImageClick={() => setSelectedImage(generation)}
                onLike={handleLike}
              />
            ))}
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredGenerations.length === 0 && searchTerm.trim() && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 text-lg">
            No images found matching "{searchTerm}"
          </div>
        </div>
      )}

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