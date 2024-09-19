import React from 'react';
import { skillsData } from './Skill';


const Resume = () => {
    return (
        <div>
            <section className="resume-section">
                <h2>Skills</h2>
                <div className="skills-container">
                    {skillsData.map((category, index) => (
                        <div key={index} className="category">
                            <h3>{category.label}</h3>
                            <ul>
                                {category.data.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="skill-item">
                                        <div className="skill-container">
                                            <span>{skill.skillName}</span>
                                            <div
                                                className="percentage-container"
                                                style={{ width: `${skill.percentage}%` }}>
                                                <div
                                                    className="percentage"
                                                    style={{ width: `${skill.percentage}%` }}>
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