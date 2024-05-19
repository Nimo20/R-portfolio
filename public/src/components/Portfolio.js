import React from "react";
import Project from "./Project";

const project = [
    {
        id: 1,
        title: "Expense eplorer",
        imageUrl: process.env.PUBLIC_URL + '/image/land.jpg',
        description: "Expense-explorer! This web application empowers users to effortlessly plan, organize, and execute their travel adventures. Whether you are exploring distant lands or embarking on a weekend getaway, it offers a suite of features to streamline the trip planning process, keep expenses in check, and curate unforgettable itineraries.",
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

function Portfolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <hr />

            <Project projects={project} />
        </div>
    );
}
export default Portfolio;