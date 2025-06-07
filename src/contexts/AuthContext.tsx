
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem('blt_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('blt_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Demo authentication - in real app, this would be an API call
      console.log('Attempting login for:', email);
      
      // Demo users
      const demoUsers = [
        { id: '1', email: 'admin@broslab.tech', password: 'admin123', name: 'BLT Admin', isAdmin: true },
        { id: '2', email: 'user@test.com', password: 'user123', name: 'Usuario Demo', isAdmin: false },
        { id: '3', email: 'demo@broslab.tech', password: 'demo123', name: 'Usuario BLT', isAdmin: false }
      ];

      const foundUser = demoUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          isAdmin: foundUser.isAdmin
        };
        
        setUser(userData);
        localStorage.setItem('blt_user', JSON.stringify(userData));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // Demo registration - in real app, this would be an API call
      console.log('Attempting registration for:', email);
      
      const userData = {
        id: Date.now().toString(),
        email,
        name,
        isAdmin: false
      };
      
      setUser(userData);
      localStorage.setItem('blt_user', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('blt_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
