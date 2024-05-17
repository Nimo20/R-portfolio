import React from 'react';

const Portfolio = () => {
    const projects = [
        { title: 'Project 1', image: 'path/to/image1.jpg', deployed: 'http://example.com/project1', repo: 'http://github.com/user/project1' },
        // ... five more projects
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <a href={project.deployed}>Deployed App</a>
                        <a href={project.repo}>GitHub Repo</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;