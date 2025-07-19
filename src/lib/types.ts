export interface UserSession {
  name: string | null;
  email: string | null;
  image: string | null;
}

export interface NotePreview {
  id: string;
  title: string;
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
  userId: string;
}
