import { FaRoad, FaTools, FaBuilding, FaWrench, FaIndustry, FaHome } from 'react-icons/fa';
import type { Service } from '../types';
import './ServiceCard.css';
import type { JSX } from 'react';

interface ServiceCardProps {
    service: Service;
}

const iconMap: { [key: string]: JSX.Element } = {
    road: <FaRoad />,
    construction: <FaTools />,
    site: <FaBuilding />,
    maintenance: <FaWrench />,
    commercial: <FaIndustry />,
    residential: <FaHome />,
};

const ServiceCard = ({ service }: ServiceCardProps) => {
    const icon = iconMap[service.icon] || <FaTools />;

    return (
        <div className="service-card card">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {service.features && service.features.length > 0 && (
                <ul className="service-features">
                    {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ServiceCard;
