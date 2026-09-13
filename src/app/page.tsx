import { Navbar } from '@/components/navbar/Navbar';
import { Button } from '@/components/ui/button';
import { BookOpen, Search, UploadCloud, CheckCircle, Download, Bot } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      title: 'Browse Notes',
      description: 'Students can find notes according to department, semester and subject.',
      icon: Search,
    },
    {
      title: 'Upload Resources',
      description: 'Students and faculty can upload academic resources.',
      icon: UploadCloud,
    },
    {
      title: 'Easy Search',
      description: 'Search notes by title, subject or topic easily.',
      icon: BookOpen,
    },
    {
      title: 'Verified Resources',
      description: 'Faculty can review and verify submitted academic resources.',
      icon: CheckCircle,
    },
    {
      title: 'Download Notes',
      description: 'Students can download useful study materials for offline use.',
      icon: Download,
    },
    {
      title: 'AI Academic Assistant',
      description: 'A future section for an AI-powered academic assistant.',
      icon: Bot,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#E8EFEA] py-20 px-4 md:py-32">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] tracking-tight mb-6">
              Find, Share and Manage <br className="hidden md:block" />
              <span className="text-[#315C4C]">Academic Notes</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto">
              A centralized platform for students and faculty to access, organize and share academic study materials securely and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/notes">
                <Button size="lg" className="w-full sm:w-auto bg-[#315C4C] hover:bg-[#264A3D] text-white">
                  Browse Notes
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#315C4C] text-[#315C4C] hover:bg-[#E8EFEA]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1F2937] mb-4">Features</h2>
              <div className="h-1 w-20 bg-[#315C4C] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-[#F8F9FA] p-6 rounded-xl border border-border hover:shadow-sm transition-shadow">
                    <div className="bg-[#E8EFEA] w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#315C4C]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{feature.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1F2937] text-white py-8 text-center">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Notes Distribution System. A college minor project.</p>
      </footer>
    </div>
  );
}
