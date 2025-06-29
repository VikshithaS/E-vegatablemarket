import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'registrationDate'>) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app this would be API call
    if (email && password) {
      const mockUser: User = {
        id: '1',
        name: email === 'admin@agri.com' ? 'Admin User' : 'John Doe',
        email,
        role: email === 'admin@agri.com' ? 'admin' : 'farmer',
        location: 'Punjab, India',
        phone: '+91 9876543210',
        registrationDate: new Date().toISOString(),
      };
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const register = async (userData: Omit<User, 'id' | 'registrationDate'>): Promise<boolean> => {
    // Mock registration
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      registrationDate: new Date().toISOString(),
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};