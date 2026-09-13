'use client';

import { Sidebar } from '@/components/sidebar/Sidebar';
import { Navbar } from '@/components/navbar/Navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  // For demo purposes, we're defaulting to 'student' role.
  const role = 'student'; 
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar role={role} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F8F9FA]">
          {children}
        </main>
      </div>
    </div>
  );
}
