export interface UserSession {
  id: string | null;
  name: string | null;
  email: string | null;
  image: string | null;
}

export interface NotePreview {
  id: string;
  title: string;
  createdAt: string;
}
export interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  category: string;
  userId: string;
}

export interface Category {
  id: string;
  name: string;
  userId?: string;
}
