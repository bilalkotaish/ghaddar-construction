import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesApi } from '../services/api';
import type { Service } from '../types';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await servicesApi.getAll();
                setServices(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-description">
                        Comprehensive construction and paving solutions delivered with expertise and precision
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {loading ? (
                        <div className="loading">Loading services...</div>
                    ) : (
                        <div className="grid grid-3">
                            {services.map((service) => (
                                <ServiceCard key={service._id} service={service} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Services;
