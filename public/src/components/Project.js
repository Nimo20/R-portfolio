import React from 'react';


const Project = ({ project }) => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="projects-list">
                {/* Map over the projects array to render each project */}
                {Project.map(project => (
                    <div className="project" key={project.id}>
                        {/* Display project title */}
                        <h3>{project.title}</h3>
                        {/* Display project description */}
                        <p>{project.description}</p>
                        {/* Display project image */}
                        <img src={project.imageUrl} alt={project.title} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;