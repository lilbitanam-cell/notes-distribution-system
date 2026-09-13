'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] px-4 py-12">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-xl shadow-sm border border-border">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center space-x-2 text-[#315C4C]">
            <BookOpen className="h-8 w-8" />
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-[#1F2937]">Create an account</h2>
          <p className="mt-2 text-sm text-[#6B7280]">
            Join the Notes Distribution System
          </p>
        </div>
        
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" type="text" required className="mt-1" placeholder="John Doe" />
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" required className="mt-1" placeholder="student@college.edu" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" required className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="department">Department</Label>
              <select id="department" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]">
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Electronics">Electronics</option>
                <option value="Commerce">Commerce</option>
                <option value="Management">Management</option>
              </select>
            </div>
            <div>
              <Label htmlFor="semester">Semester</Label>
              <select id="semester" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]">
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="role">Role</Label>
            <select id="role" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]">
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>
          </div>

          <Button type="submit" className="w-full bg-[#315C4C] hover:bg-[#264A3D] mt-6">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-[#6B7280]">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-[#315C4C] hover:text-[#264A3D]">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
