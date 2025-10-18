# Simple Notes App

A clean and simple notes application built with Next.js 14, TypeScript, and Tailwind CSS. Create, view, and delete notes with a minimalist interface.

## Features

- Create notes with a simple text area
- View all notes in a clean, card-based layout
- Delete notes with a single click
- Notes are automatically saved to browser's localStorage
- Responsive design that works on all devices
- Keyboard shortcut (Cmd+Enter) to quickly add notes
- Timestamps for each note

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **localStorage** - Client-side data persistence

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Type your note in the text area
2. Click "Add Note" or press Cmd+Enter to save it
3. Your note will appear at the top of the list
4. Click "Delete" on any note to remove it
5. All notes are automatically saved and will persist between sessions

## Project Structure

```
├── app/
│   ├── api/ping/          # Health check endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/
│   ├── ui/
│   │   └── Button.tsx     # Reusable button component
│   └── NoteItem.tsx       # Single note display component
├── lib/
│   ├── localStorage.ts    # localStorage utilities
│   └── note.ts            # TypeScript type definitions
└── public/                # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License