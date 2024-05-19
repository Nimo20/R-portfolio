import React from 'react';
import ProjectList from './ProjectList';

const projects = [
    {
        id: 1,
        title: "Expense Explorer",
        imageUrl: process.env.PUBLIC_URL + '/image/land.jpg',
        description: "Expense Explorer! This web application empowers users to effortlessly plan, organize, and execute their travel adventures. Whether you are exploring distant lands or embarking on a weekend getaway, it offers a suite of features to streamline the trip planning process, keep expenses in check, and curate unforgettable itineraries.",
        liveDemoUrl: 'https://express-explorer-ef6c4c2d378e.herokuapp.com/'
    },
    {
        id: 2,
        title: "Geek Humor",
        imageUrl: process.env.PUBLIC_URL + '/image/laugh.jpeg',
        description: "Welcome to GeekHumor, the ultimate app for geeks, nerds, and everyone who loves a good laugh infused with a bit of brainy goodness! Whether you’re into tech, science, gaming, or pop culture, GeekHumor has something to tickle your funny bone and feed your inner geek.",
        liveDemoUrl: 'https://nimo20.github.io/Geek-Humor/'
    },
    {
        id: 3,
        title: "Password Generator",
        imageUrl: process.env.PUBLIC_URL + '/image/Pass.jpeg',
        description: "PasswordGenPro is your go-to tool for creating strong, secure passwords tailored to your specifications. With a focus on user control and security, PasswordGenPro ensures that your online accounts and sensitive information remain protected.",
        liveDemoUrl: 'https://nimo20.github.io/Password/'
    },
    {
        id: 4,
        title: "Weather Dashboard",
        imageUrl: process.env.PUBLIC_URL + '/image/weathet.jpeg',
        description: "Weather-Dashboard is an application to find a weather condition of a given city both the current and 5-Days forecast at the same time. The server-side API used to get response data object is retrieved from the Open Weather APi. The current weather section is including the following weather characters and date.",
        liveDemoUrl: ' https://nimo20.github.io/Weather-dashboard/'
    },
    {
        id: 5,
        title: "Text Editor",
        imageUrl: process.env.PUBLIC_URL + '/image/Text.jpeg',
        description: "This project is a Progressive Web Application (PWA) for creating and managing notes or code snippets. The application is designed to work both online and offline, ensuring that your data is reliably saved and retrieved. It includes features such as IndexedDB for local storage, a service worker for offline capabilities, and the ability to install the app as a desktop icon.",
        liveDemoUrl: 'https://text-editor-uiqh.onrender.com/'
    },
];

function Portfolio() {
    return (
        <div>
            <p className="content is-medium"></p>
            <hr />
            <ProjectList projects={projects} />
        </div>
    );
}

export default Portfolio;