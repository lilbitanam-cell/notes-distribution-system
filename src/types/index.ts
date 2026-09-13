export type Role = 'student' | 'faculty';
export type NoteStatus = 'pending' | 'approved' | 'rejected';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  department: string;
  semester: string;
  createdAt: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
  subject: string;
  department: string;
  semester: string;
  unit: string;
  topic: string;
  fileUrl: string;
  fileType: string;
  uploadedBy: string; // userId
  uploaderName: string;
  status: NoteStatus;
  downloads: number;
  rating: number;
  createdAt: string;
}

export interface Bookmark {
  id: string;
  userId: string;
  noteId: string;
  savedAt: string;
}

export interface DownloadHistory {
  id: string;
  userId: string;
  noteId: string;
  downloadedAt: string;
}
