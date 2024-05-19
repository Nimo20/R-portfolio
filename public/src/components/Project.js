import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="project">
            <a href={project.liveDemoUrl || '#'} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
            </a>
            <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default Project;