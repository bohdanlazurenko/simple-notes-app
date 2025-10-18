'use client'

import { useState, useEffect } from 'react'
import { Note } from '@/lib/note'
import { getNotes, addNote, removeNote } from '@/lib/localStorage'
import { Button } from '@/components/ui/Button'
import { NoteItem } from '@/components/NoteItem'

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [inputText, setInputText] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setNotes(getNotes())
  }, [])

  const handleAddNote = () => {
    const trimmedText = inputText.trim()
    if (!trimmedText) return

    const newNote = addNote(trimmedText)
    setNotes(prevNotes => [newNote, ...prevNotes])
    setInputText('')
  }

  const handleDeleteNote = (id: string) => {
    removeNote(id)
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.metaKey) {
      e.preventDefault()
      handleAddNote()
    }
  }

  if (!isClient) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="h-32 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-4">
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Simple Notes</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Write your note here... (Cmd+Enter to add)"
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
        />
        <div className="mt-4 flex justify-end">
          <Button 
            onClick={handleAddNote}
            disabled={!inputText.trim()}
          >
            Add Note
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {notes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No notes yet.</p>
            <p className="text-gray-400 mt-2">Create your first note above!</p>
          </div>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={handleDeleteNote}
            />
          ))
        )}
      </div>
    </div>
  )
}