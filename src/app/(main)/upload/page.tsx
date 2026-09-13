'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UploadCloud, Info } from 'lucide-react';

export default function UploadPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-[#1F2937]">Upload Academic Resource</h1>
        <p className="text-muted-foreground mt-1">Share your notes, assignments, or study materials.</p>
      </header>

      <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-start space-x-3 text-sm border border-blue-100">
        <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <p>
          <strong>Student submissions may require faculty verification</strong> before appearing as verified resources in the global directory.
        </p>
      </div>

      <form className="bg-white p-6 md:p-8 rounded-xl border border-border space-y-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Note Title</Label>
            <Input id="title" placeholder="e.g. Operating Systems Chapter 1 Notes" className="mt-1" />
          </div>
          
          <div>
            <Label htmlFor="description">Description (Optional)</Label>
            <textarea 
              id="description" 
              className="mt-1 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Brief description of the content..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="department">Department</Label>
              <select id="department" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]">
                <option>Computer Science</option>
                <option>Information Technology</option>
              </select>
            </div>
            <div>
              <Label htmlFor="semester">Semester</Label>
              <select id="semester" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]">
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
              </select>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="e.g. Data Structures" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="unit">Unit/Topic</Label>
              <Input id="unit" placeholder="e.g. Unit 4 - Trees" className="mt-1" />
            </div>
          </div>

          <div className="pt-4">
            <Label>Upload File</Label>
            <div className="mt-2 border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <UploadCloud className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-sm font-medium text-[#1F2937]">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">Supported formats: PDF, DOC, DOCX, PPT, PPTX (Max 20MB)</p>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button type="button" className="bg-[#315C4C] hover:bg-[#264A3D]">Submit Note</Button>
        </div>
      </form>
    </div>
  );
}
