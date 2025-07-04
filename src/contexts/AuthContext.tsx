import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!user;

    // Check if user is authenticated on app load
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            setIsLoading(true);
            // Check if there's a stored token
            const token = localStorage.getItem('authToken');

            if (token) {
                // Here you would typically validate the token with your backend
                // For now, we'll simulate a successful validation
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
            logout();
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email: string, _password: string): Promise<boolean> => {
        try {
            setIsLoading(true);

            // Here you would typically make an API call to your backend
            // For demonstration purposes, we'll simulate a successful login
            // Replace this with your actual authentication API call

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock user data - replace with actual API response
            const mockUser: User = {
                id: '1',
                email: email,
                name: 'Thomas Reynoso',
            };

            // Mock token - replace with actual token from API
            const mockToken = 'mock-jwt-token-' + Date.now();

            // Store authentication data
            localStorage.setItem('authToken', mockToken);
            localStorage.setItem('user', JSON.stringify(mockUser));

            setUser(mockUser);
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        // Clear authentication data
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
    };

    const value: AuthContextType = {
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
        checkAuthStatus,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
