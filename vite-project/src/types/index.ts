export interface Project {
    _id: string;
    title: string;
    description: string;
    category: 'Road Construction' | 'Asphalt Paving' | 'Site Development' | 'Maintenance' | 'Commercial' | 'Residential';
    images: string[];
    location: string;
    completionDate: string;
    client?: string;
    area?: string;
    featured: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface Service {
    _id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    order: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    message: string;
}

export interface ContactResponse {
    message: string;
    contact?: {
        _id: string;
        name: string;
        email: string;
        phone: string;
        projectType: string;
        message: string;
        status: string;
        createdAt: string;
    };
}

export interface Admin {
    id: string;
    username: string;
    email: string;
    role: string;
}

export interface AuthResponse {
    message: string;
    token: string;
    admin: Admin;
}
