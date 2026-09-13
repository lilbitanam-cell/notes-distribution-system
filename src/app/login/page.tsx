'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm border border-border">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center space-x-2 text-[#315C4C]">
            <BookOpen className="h-8 w-8" />
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-[#1F2937]">Welcome back</h2>
          <p className="mt-2 text-sm text-[#6B7280]">
            Please sign in to your academic account
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
                placeholder="student@college.edu"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="role">Role</Label>
              <select 
                id="role" 
                name="role" 
                className="mt-1 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-[#315C4C] hover:text-[#264A3D]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <Button type="submit" className="w-full bg-[#315C4C] hover:bg-[#264A3D]">
              Sign in
            </Button>
            <Button variant="outline" type="button" className="w-full">
              Continue with Google
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-[#6B7280]">
          Don't have an account?{' '}
          <Link href="/register" className="font-medium text-[#315C4C] hover:text-[#264A3D]">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
