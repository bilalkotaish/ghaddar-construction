import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { servicesApi, projectsApi } from '../services/api';
import type { Service, Project } from '../types';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [servicesData, projectsData] = await Promise.all([
                    servicesApi.getAll(),
                    projectsApi.getAll(undefined, true), // Get featured projects
                ]);
                setServices(servicesData.slice(0, 3)); // Show only first 3 services
                setProjects(projectsData.slice(0, 3)); // Show only first 3 projects
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-page">
            <Hero />

            {/* Services Section */}
            <section className="section bg-secondary">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive construction solutions tailored to your needs
                    </p>
                    {loading ? (
                        <div className="loading">Loading services...</div>
                    ) : (
                        <div className="grid grid-3">
                            {services.map((service) => (
                                <ServiceCard key={service._id} service={service} />
                            ))}
                        </div>
                    )}
                    <div className="text-center mt-xl">
                        <Link to="/services" className="btn btn-primary">
                            View All Services <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Showcasing our commitment to quality and excellence
                    </p>
                    {loading ? (
                        <div className="loading">Loading projects...</div>
                    ) : (
                        <div className="grid grid-3">
                            {projects.map((project) => (
                                <ProjectCard key={project._id} project={project} />
                            ))}
                        </div>
                    )}
                    <div className="text-center mt-xl">
                        <Link to="/projects" className="btn btn-primary">
                            View All Projects <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Project?</h2>
                        <p>Get a free quote today and let's build something amazing together</p>
                        <Link to="/contact" className="btn btn-primary btn-large">
                            <span className='text-white'>
                                Contact Us
                            </span>


                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
