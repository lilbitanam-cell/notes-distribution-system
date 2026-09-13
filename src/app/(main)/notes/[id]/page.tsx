'use client';

import { useParams } from 'next/navigation';
import { mockNotes } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Bookmark, Star, ArrowLeft, UserCircle, Calendar } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function NoteDetailsPage() {
  const params = useParams();
  const noteId = params.id as string;
  
  const note = mockNotes.find(n => n.id === noteId) || mockNotes[0];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Link href="/notes" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-[#315C4C]">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Browse
      </Link>

      <div className="bg-white p-6 md:p-8 rounded-xl border border-border shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4 flex-1">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-[#E8EFEA] text-[#315C4C] border-[#315C4C]/20">
                {note.subject}
              </Badge>
              <Badge variant="secondary">{note.fileType}</Badge>
              <Badge variant="outline">{note.unit}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold text-[#1F2937] leading-tight">{note.title}</h1>
            
            <p className="text-muted-foreground text-lg">
              {note.description || "No description provided for this academic resource."}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground border-t border-border mt-6">
              <div className="flex items-center mt-4">
                <UserCircle className="h-5 w-5 mr-2 text-[#315C4C]" />
                <span>Uploaded by <strong className="text-[#1F2937]">{note.uploaderName}</strong></span>
              </div>
              <div className="flex items-center mt-4">
                <Calendar className="h-5 w-5 mr-2 text-[#315C4C]" />
                <span>{new Date(note.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mt-4">
                <Star className="h-5 w-5 mr-2 text-yellow-500 fill-current" />
                <span>{note.rating.toFixed(1)} Rating</span>
              </div>
              <div className="flex items-center mt-4">
                <Download className="h-5 w-5 mr-2 text-[#315C4C]" />
                <span>{note.downloads} Downloads</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-6 md:pt-0 border-border">
            <Button size="lg" className="w-full bg-[#315C4C] hover:bg-[#264A3D]">
              <Download className="mr-2 h-5 w-5" /> Download Note
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              <Bookmark className="mr-2 h-5 w-5" /> Save Bookmark
            </Button>
            <Button size="lg" variant="ghost" className="w-full text-muted-foreground">
              <Star className="mr-2 h-5 w-5" /> Rate this Note
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Preview Placeholder */}
      <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col h-[600px]">
        <div className="bg-[#F8F9FA] p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-medium text-[#1F2937]">Document Preview</h3>
          <span className="text-xs text-muted-foreground">Page 1 of 12</span>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <div className="text-center text-muted-foreground">
            <div className="bg-white w-[400px] h-[500px] shadow-sm mx-auto flex items-center justify-center p-8 border border-gray-200">
              <p>Preview for {note.fileType} not available in demo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
