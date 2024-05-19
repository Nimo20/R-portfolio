import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <img src={process.env.PUBLIC_URL + '/image/Profile.JPG'} alt="Developer" className="profile-image" />
            <p>
                Am on a journey to become a skilled full-stack developer. With a background in problem solving and Yard coordinator at a food distribution center, currently am dedicated to mastering both the frontend and backend aspects of web development.

                I thrive on challenges and enjoy diving into new technologies and frameworks to expand my skill set. I am currently focusing on learning languages such as JavaScript and Python, as well as popular frameworks like React and Node.js.

                Outside of coding, I enjoy spending time with my family. I am excited to continue my journey in the world of full-stack development and am eager to contribute to innovative projects that make a positive impact.
            </p>
        </div>
    );
};

export default About;