import React from 'react'
import { Note } from '@/lib/note'
import { Button } from './ui/Button'

interface NoteItemProps {
  note: Note
  onDelete: (id: string) => void
}

export const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <p className="text-gray-800 whitespace-pre-wrap break-words">
            {note.text}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {formatDate(note.createdAt)}
          </p>
        </div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(note.id)}
          aria-label="Delete note"
        >
          Delete
        </Button>
      </div>
    </div>
  )
}