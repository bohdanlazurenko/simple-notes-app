import { Note } from './note'

const STORAGE_KEY = 'simple-notes-app-notes'

export const getNotes = (): Note[] => {
  if (typeof window === 'undefined') return []
  
  try {
    const item = window.localStorage.getItem(STORAGE_KEY)
    return item ? JSON.parse(item) : []
  } catch (error) {
    console.error('Error reading notes from localStorage:', error)
    return []
  }
}

export const setNotes = (notes: Note[]): void => {
  if (typeof window === 'undefined') return
  
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch (error) {
    console.error('Error saving notes to localStorage:', error)
  }
}

export const addNote = (text: string): Note => {
  const newNote: Note = {
    id: crypto.randomUUID(),
    text,
    createdAt: new Date().toISOString(),
  }
  
  const notes = getNotes()
  notes.unshift(newNote)
  setNotes(notes)
  
  return newNote
}

export const removeNote = (id: string): void => {
  const notes = getNotes()
  const filteredNotes = notes.filter(note => note.id !== id)
  setNotes(filteredNotes)
}