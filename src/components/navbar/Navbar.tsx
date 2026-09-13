import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:opacity-90 transition-opacity">
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold text-lg tracking-tight">Notes Distribution</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/notes" className="text-foreground/80 hover:text-primary transition-colors">
            Browse Notes
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/login">
            <Button variant="ghost" className="font-medium">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="font-medium bg-[#315C4C] hover:bg-[#264A3D]">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
