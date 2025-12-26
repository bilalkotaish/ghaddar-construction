import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsApi } from "../services/api";
import type { Project } from "../types";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Road Construction",
    "Asphalt Paving",
    "Maintenance",
    "Building Roads",
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsApi.getAll();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Projects</h1>
          <p className="page-description">
            Explore our portfolio of successful construction and paving projects
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading">Loading projects...</div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
