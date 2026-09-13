'use client';

import { NoteCard } from '@/components/common/NoteCard';
import { mockNotes } from '@/lib/mockData';
import { Bookmark } from 'lucide-react';

export default function BookmarksPage() {
  const bookmarkedNotes = mockNotes.slice(0, 2);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <header className="flex items-center space-x-3">
        <div className="bg-[#E8EFEA] p-2 rounded-lg text-[#315C4C]">
          <Bookmark className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#1F2937]">Bookmarks</h1>
          <p className="text-muted-foreground mt-1">Your saved academic resources.</p>
        </div>
      </header>

      {bookmarkedNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {bookmarkedNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-border rounded-xl">
          <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-lg font-semibold text-[#1F2937]">No bookmarks yet</h2>
          <p className="text-muted-foreground mt-2">Notes you bookmark will appear here for quick access.</p>
        </div>
      )}
    </div>
  );
}
