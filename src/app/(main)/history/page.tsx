'use client';

import { mockNotes } from '@/lib/mockData';
import { History, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function HistoryPage() {
  const downloadHistory = mockNotes.map(note => ({
    note,
    downloadedAt: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()
  }));

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <header className="flex items-center space-x-3">
        <div className="bg-[#E8EFEA] p-2 rounded-lg text-[#315C4C]">
          <History className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#1F2937]">Download History</h1>
          <p className="text-muted-foreground mt-1">Track the resources you've downloaded.</p>
        </div>
      </header>

      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F8F9FA] border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium text-[#1F2937]">Resource Name</th>
                <th className="px-6 py-4 font-medium text-[#1F2937]">Subject</th>
                <th className="px-6 py-4 font-medium text-[#1F2937]">Date</th>
                <th className="px-6 py-4 font-medium text-[#1F2937]">Type</th>
                <th className="px-6 py-4 font-medium text-[#1F2937] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {downloadHistory.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <Link href={`/notes/${item.note.id}`} className="font-medium text-[#315C4C] hover:underline line-clamp-1">
                      {item.note.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{item.note.subject}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.downloadedAt}</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary">{item.note.fileType}</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="outline" size="sm" className="h-8">
                      <Download className="h-3 w-3 mr-2" />
                      Download Again
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
