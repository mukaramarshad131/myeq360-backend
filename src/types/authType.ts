export interface AuthState {
  user: null | User;
  token: null | string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null | any;
}

export interface User {
  email: string,
  password: string,
  remember?: string
}