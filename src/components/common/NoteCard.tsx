import { FileText, Download, Bookmark, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Note } from '@/types';
import Link from 'next/link';

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow flex flex-col h-full bg-white">
      <CardHeader className="pb-3 flex-none">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs bg-[#E8EFEA] text-[#315C4C] border-[#315C4C]/20">
            {note.subject}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {note.fileType}
          </Badge>
        </div>
        <CardTitle className="text-lg line-clamp-2 leading-tight">
          {note.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {note.department} • Sem {note.semester} • {note.unit}
        </p>
      </CardHeader>
      
      <CardContent className="flex-1 text-sm text-foreground/80 pb-3">
        <div className="flex items-center text-xs text-muted-foreground space-x-4 mb-2">
          <span className="flex items-center">
            <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
            {note.rating.toFixed(1)}
          </span>
          <span className="flex items-center">
            <Download className="h-3 w-3 mr-1" />
            {note.downloads}
          </span>
        </div>
        <p className="text-xs mt-2 text-muted-foreground">Uploaded by {note.uploaderName}</p>
      </CardContent>

      <CardFooter className="pt-0 flex space-x-2">
        <Link href={`/notes/${note.id}`} className="flex-1">
          <Button variant="outline" className="w-full text-xs h-8">View Note</Button>
        </Link>
        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-[#315C4C]">
          <Bookmark className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
