'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export interface UserProfile {
  id: string;
  phone_or_email: string;
  full_name?: string;
  preferred_language: string;
  created_at?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (phoneOrEmail: str, password?: string) => Promise<UserProfile>;
  register: (phoneOrEmail: string, password?: string, fullName?: string, preferredLang?: string) => Promise<UserProfile>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://nyaypath-backend-wmnm.onrender.com';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Restore session from localStorage on mount
    const savedToken = localStorage.getItem('nyaypath_token');
    const savedUser = localStorage.getItem('nyaypath_user');
    
    if (savedToken) {
      setToken(savedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          // Ignore parse errors
        }
      }
      // Verify token freshness with backend
      axios.get(`${API_BASE}/api/v1/auth/me`)
        .then((res) => {
          setUser(res.data);
          localStorage.setItem('nyaypath_user', JSON.stringify(res.data));
        })
        .catch(() => {
          // Token expired or invalid
          logout();
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (phone_or_email: string, password?: string): Promise<UserProfile> => {
    const res = await axios.post(`${API_BASE}/api/v1/auth/login`, {
      phone_or_email,
      password: password || 'otp_simulated_password_2026'
    });
    
    const { access_token, user: loggedUser } = res.data;
    setToken(access_token);
    setUser(loggedUser);
    
    localStorage.setItem('nyaypath_token', access_token);
    localStorage.setItem('nyaypath_user', JSON.stringify(loggedUser));
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    
    return loggedUser;
  };

  const register = async (phone_or_email: string, password?: string, full_name?: string, preferred_language?: string): Promise<UserProfile> => {
    const res = await axios.post(`${API_BASE}/api/v1/auth/register`, {
      phone_or_email,
      password: password || 'otp_simulated_password_2026',
      full_name,
      preferred_language: preferred_language || 'hi'
    });
    
    const { access_token, user: loggedUser } = res.data;
    setToken(access_token);
    setUser(loggedUser);
    
    localStorage.setItem('nyaypath_token', access_token);
    localStorage.setItem('nyaypath_user', JSON.stringify(loggedUser));
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    
    return loggedUser;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('nyaypath_token');
    localStorage.removeItem('nyaypath_user');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
