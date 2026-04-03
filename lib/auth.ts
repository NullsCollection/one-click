import { request } from "./api";

export interface User {
  id: string;
  email: string;
  name: string;
  email_verified: boolean;
  avatar_url?: string;
  oauth_provider?: string;
  created_at: string;
}

interface AuthResponse {
  user: User;
}

export function login(email: string, password: string, rememberMe: boolean) {
  return request<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password, remember_me: rememberMe }),
  });
}

export function signup(name: string, email: string, password: string) {
  return request<AuthResponse>("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

export function logout() {
  return request<{ message: string }>("/api/auth/logout", { method: "POST" });
}

export function getMe() {
  return request<AuthResponse>("/api/auth/me");
}

export function refreshToken() {
  return request<{ message: string }>("/api/auth/refresh", { method: "POST" });
}
