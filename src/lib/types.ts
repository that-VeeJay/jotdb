export interface User {
  id: string;
  name: string;
  email: string;
}
export interface AuthenticatedUserInfo {
  id: string;
  email: string;
  display_name: string;
}
export interface Note {
  user_id: string;
  id: string;
  title: string;
  content: string;
  created_at: Date;
}
export interface NoteContextType {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  activeNote: Note | null;
  setActiveNote: React.Dispatch<React.SetStateAction<Note | null>>;
}

export interface ToggleItem {
  name: string;
  icon: React.ElementType;
  command: () => void;
  isActive: () => boolean;
}

export type ToggleSizeType = "sm" | "default" | "lg" | null | undefined;
