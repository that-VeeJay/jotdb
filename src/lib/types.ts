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
  title: string;
  content: string;
}
