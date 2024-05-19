import React from 'react';

const Resume = () => {
    return (
        <div>
            <h1>My Resume</h1>
            <section>
                <h2>Education</h2>
                <p>Bachelor of Science in Computer Science - University XYZ</p>
                <p>Graduation Year: 2020</p>
            </section>
            <section>
                <h2>Experience</h2>
                <p>Software Engineer - Company ABC</p>
                <p>Duration: 2 years</p>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>HTML/CSS</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;