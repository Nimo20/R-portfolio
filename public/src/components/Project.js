import React from 'react';

// Define an array of project objects
const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description of Project 1...',
        imageUrl: 'project1.jpg',
        // Add more properties as needed
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description of Project 2...',
        imageUrl: 'project2.jpg',
        // Add more properties as needed
    },
    // Add more project objects as needed
];

const Project = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="projects-list">
                {/* Map over the projects array to render each project */}
                {projects.map(project => (
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