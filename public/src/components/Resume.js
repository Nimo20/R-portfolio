import React from 'react';
import { skillsData } from './Skill';

const Resume = () => {
    return (
        <div>
            <section>

                <div className="skills-container">
                    {skillsData.map((category, index) => (
                        <div key={index} className="category">
                            <h3>{category.label}</h3>
                            <ul>
                                {category.data.map((skill, index) => (
                                    <li key={index}>
                                        <div>
                                            <span>{skill.skillName}</span>
                                            <div className="percentage-container">
                                                <div className="percentage" style={{ width: `${skill.percentage}%` }}>
                                                    {skill.percentage}%
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resume;