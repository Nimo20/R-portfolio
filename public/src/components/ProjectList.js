import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
    return (
        <section>

            <div className="projects-list">
                {projects.map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectList;