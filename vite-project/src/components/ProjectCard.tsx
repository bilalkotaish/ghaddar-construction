import { FaMapMarkerAlt, FaCalendarAlt, FaRulerCombined } from 'react-icons/fa';
import type { Project } from '../types';
import { IMAGE_BASE_URL } from '../services/api';
import './ProjectCard.css';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    };

    return (
        <div className="project-card card">
            <div className="project-image">
                <img
                    src={project.images[0] ? `${IMAGE_BASE_URL}${project.images[0]}` : 'https://via.placeholder.com/400x300'}
                    alt={project.title}
                />
                <div className="project-category">{project.category}</div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-details">
                    <div className="project-detail">
                        <FaMapMarkerAlt />
                        <span>{project.location}</span>
                    </div>
                    <div className="project-detail">
                        <FaCalendarAlt />
                        <span>{formatDate(project.completionDate)}</span>
                    </div>
                    {project.area && (
                        <div className="project-detail">
                            <FaRulerCombined />
                            <span>{project.area}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
