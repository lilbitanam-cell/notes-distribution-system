'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Search, 
  UploadCloud, 
  Bookmark, 
  History, 
  Bell, 
  Bot, 
  UserCircle,
  FileText,
  CheckCircle,
  XCircle,
  BarChart
} from 'lucide-react';

interface SidebarProps {
  role: 'student' | 'faculty';
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const studentLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Browse Notes', href: '/notes', icon: Search },
    { name: 'My Uploads', href: '/upload', icon: UploadCloud },
    { name: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
    { name: 'Download History', href: '/history', icon: History },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'AI Academic Assistant', href: '/assistant', icon: Bot },
    { name: 'Profile', href: '/profile', icon: UserCircle },
  ];

  const facultyLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Notes', href: '/notes', icon: FileText },
    { name: 'Pending Submissions', href: '/pending', icon: Bell },
    { name: 'Approved Notes', href: '/approved', icon: CheckCircle },
    { name: 'Rejected Notes', href: '/rejected', icon: XCircle },
    { name: 'Upload Notes', href: '/upload', icon: UploadCloud },
    { name: 'Resource Statistics', href: '/statistics', icon: BarChart },
    { name: 'Profile', href: '/profile', icon: UserCircle },
  ];

  const links = role === 'student' ? studentLinks : facultyLinks;

  return (
    <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col min-h-screen">
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-4">
          {links.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  isActive 
                    ? "bg-[#E8EFEA] text-[#315C4C]" 
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className={cn("mr-3 h-5 w-5", isActive ? "text-[#315C4C]" : "text-muted-foreground")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
