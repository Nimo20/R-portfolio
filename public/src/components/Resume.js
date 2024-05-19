import React from 'react';
import { skillsData } from './Skill';

const Resume = () => {
    return (
        <div>
            <section>
                <h2>Skills</h2>
                {skillsData.map((category, index) => (
                    <div key={index}>
                        <h3>{category.label}</h3>
                        <ul>
                            {category.data.map((skill, index) => (
                                <li key={index}>
                                    {skill.skillName} - {skill.percentage}%
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Resume;