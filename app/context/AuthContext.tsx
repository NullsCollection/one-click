"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as authApi from "@/lib/auth";
import type { User } from "@/lib/auth";

interface AuthState {
  user: User | null;
  loading: boolean;
}

interface AuthContextValue extends AuthState {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
  ) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, loading: true });

  // Restore session from httpOnly cookie on mount
  useEffect(() => {
    let mounted = true;
    authApi
      .getMe()
      .then(({ user }) => {
        if (mounted) setState({ user, loading: false });
      })
      .catch(() => {
        if (mounted) setState({ user: null, loading: false });
      });
    return () => {
      mounted = false;
    };
  }, []);

  const login = useCallback(
    async (email: string, password: string, rememberMe: boolean) => {
      try {
        const { user } = await authApi.login(email, password, rememberMe);
        setState({ user, loading: false });
      } catch (error) {
        setState({ user: null, loading: false });
        throw error; // Re-throw so UI can handle it
      }
    },
    [],
  );

  const signup = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        const { user } = await authApi.signup(name, email, password);
        setState({ user, loading: false });
      } catch (error) {
        setState({ user: null, loading: false });
        throw error; // Re-throw so UI can handle it
      }
    },
    [],
  );

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout API failed:", error);
      // Continue anyway - clear local state
    }
    setState({ user: null, loading: false });
  }, []);

  const loginWithGoogle = useCallback(() => {
    // Redirect to backend OAuth endpoint
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    window.location.href = `${apiUrl}/api/auth/google`;
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, login, signup, logout, loginWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
