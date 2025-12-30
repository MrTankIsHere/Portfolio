import '../styles/projects.css';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.keywords.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
