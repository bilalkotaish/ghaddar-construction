import axios from 'axios';
import type { AuthResponse, Admin } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

// Auth API
export const authApi = {
    login: async (username: string, password: string): Promise<AuthResponse> => {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            username,
            password,
        });
        return response.data;
    },

    getCurrentAdmin: async (token: string): Promise<{ admin: Admin }> => {
        const response = await axios.get(`${API_BASE_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },
};

// Token management
export const tokenManager = {
    getToken: (): string | null => {
        return localStorage.getItem('adminToken');
    },

    setToken: (token: string): void => {
        localStorage.setItem('adminToken', token);
    },

    removeToken: (): void => {
        localStorage.removeItem('adminToken');
    },
};

export default authApi;
