import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authApi, tokenManager } from '../services/auth';
import type { Admin } from '../types';

interface AuthContextType {
    admin: Admin | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [admin, setAdmin] = useState<Admin | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is already logged in
        const checkAuth = async () => {
            const token = tokenManager.getToken();
            if (token) {
                try {
                    const { admin: currentAdmin } = await authApi.getCurrentAdmin(token);
                    setAdmin(currentAdmin);
                } catch (error) {
                    tokenManager.removeToken();
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (username: string, password: string) => {
        const response = await authApi.login(username, password);
        tokenManager.setToken(response.token);
        setAdmin(response.admin);
    };

    const logout = () => {
        tokenManager.removeToken();
        setAdmin(null);
    };

    return (
        <AuthContext.Provider
            value={{
                admin,
                login,
                logout,
                isAuthenticated: !!admin,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Protected Route Component
export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!isAuthenticated) {
        window.location.href = '/admin/login';
        return null;
    }

    return <>{children}</>;
};
