'use client'

import { useState, useEffect, useRef } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { searchContent, type SearchResult } from '@/lib/search'

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const results = searchContent(query)
    setResults(results)
  }, [query])

  const handleSelect = (href: string) => {
    setIsOpen(false)
    setQuery('')
    router.push(href)
  }

  return (
    <div ref={searchRef}>
      <button
        onClick={() => setIsOpen(true)}
        className="ml-4 p-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
        aria-label="Search"
      >
        <SearchIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="fixed inset-x-0 top-20 max-w-2xl mx-auto p-4">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b">
                <SearchIcon className="h-5 w-5 text-gray-500" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search... (Press '/' to focus)"
                  className="flex-1 ml-3 outline-none text-gray-700"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <kbd className="hidden md:inline-block px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded">
                  ESC
                </kbd>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 ml-2 hover:bg-gray-100 rounded-md"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="py-4 px-2 max-h-[60vh] overflow-y-auto">
                {results.map((result, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg"
                    onClick={() => handleSelect(result.href)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{result.title}</h3>
                      <span className="text-sm text-gray-500">{result.category}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                  </button>
                ))}

                {query && results.length === 0 && (
                  <div className="py-12 text-center text-gray-500">
                    No results found for "{query}"
                  </div>
                )}

                {!query && (
                  <div className="py-12 text-center text-gray-500">
                    Type to start searching...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 