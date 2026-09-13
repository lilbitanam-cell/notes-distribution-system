'use client';

import { NoteCard } from '@/components/common/NoteCard';
import { mockNotes } from '@/lib/mockData';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const recentNotes = mockNotes;
  
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-[#1F2937]">Welcome back!</h1>
          <p className="text-muted-foreground mt-1">Here's what's new in your academic resources.</p>
        </div>
        
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search notes, subjects..." 
            className="pl-9 bg-white border-border"
          />
        </div>
      </header>
      
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#1F2937]">Recently Added Notes</h2>
          <Button variant="ghost" className="text-[#315C4C]" size="sm">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>
      
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#1F2937]">Recommended for You</h2>
          <Button variant="ghost" className="text-[#315C4C]" size="sm">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentNotes.slice().reverse().map((note) => (
            <NoteCard key={`rec-${note.id}`} note={note} />
          ))}
        </div>
      </section>
    </div>
  );
}
