import axios from 'axios';
import type { Project, Service, ContactFormData, ContactResponse } from '../types';
import { tokenManager } from './auth';

const API_BASE_URL = 'http://localhost:5000/api';
export const IMAGE_BASE_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = tokenManager.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Projects API
export const projectsApi = {
    getAll: async (category?: string, featured?: boolean): Promise<Project[]> => {
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (featured !== undefined) params.append('featured', featured.toString());

        const response = await api.get(`/projects?${params.toString()}`);
        return response.data;
    },

    getById: async (id: string): Promise<Project> => {
        const response = await api.get(`/projects/${id}`);
        return response.data;
    },

    create: async (formData: FormData): Promise<Project> => {
        const response = await api.post('/projects', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    update: async (id: string, formData: FormData): Promise<Project> => {
        const response = await api.put(`/projects/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    delete: async (id: string): Promise<void> => {
        await api.delete(`/projects/${id}`);
    },
};

// Services API
export const servicesApi = {
    getAll: async (): Promise<Service[]> => {
        const response = await api.get('/services');
        return response.data;
    },

    getById: async (id: string): Promise<Service> => {
        const response = await api.get(`/services/${id}`);
        return response.data;
    },

    create: async (data: Partial<Service>): Promise<Service> => {
        const response = await api.post('/services', data);
        return response.data;
    },

    update: async (id: string, data: Partial<Service>): Promise<Service> => {
        const response = await api.put(`/services/${id}`, data);
        return response.data;
    },

    delete: async (id: string): Promise<void> => {
        await api.delete(`/services/${id}`);
    },
};

// Contact API
export const contactApi = {
    submit: async (data: ContactFormData): Promise<ContactResponse> => {
        const response = await api.post('/contact', data);
        return response.data;
    },
};

export default api;
