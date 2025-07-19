export interface UserSession {
  name: string | null;
  email: string | null;
  image: string | null;
}

export interface NoteType {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  category: string;
  userId: string;
}

export interface CategoriesType {
  id: string;
  name: string;
  userId: string;
}
