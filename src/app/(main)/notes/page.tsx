'use client';

import { NoteCard } from '@/components/common/NoteCard';
import { mockNotes } from '@/lib/mockData';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BrowseNotesPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold text-[#1F2937]">Browse Notes</h1>
        <p className="text-muted-foreground mt-1">Discover academic resources across all departments.</p>
      </header>
      
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64 space-y-6 bg-white p-4 rounded-xl border border-border h-fit">
          <div className="flex items-center space-x-2 text-[#1F2937] font-semibold mb-4">
            <Filter className="h-5 w-5" />
            <h2>Filters</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Department</Label>
              <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Information Technology</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label>Semester</Label>
              <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <option>All Semesters</option>
                <option>Semester 1</option>
                <option>Semester 2</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>File Type</Label>
              <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <option>All Types</option>
                <option>PDF</option>
                <option>DOCX</option>
                <option>PPTX</option>
              </select>
            </div>
          </div>
        </aside>

        <div className="flex-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search notes, subjects or topics..." 
              className="pl-10 h-12 text-base bg-white border-border"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
