import React from 'react';
import "../styles/resume.css"
// import "../styles/main.css"; // Import the main CSS file
import resumeImage from "../assets/images/resume.png";



function Resume() {

    return (
        <div className="resume-container" id="resume">
            <h2> Resume</h2>
            <div className="resume">
            <a href={resumeImage} target="_blank" rel="noopener noreferrer">
          Downloadable resume here
        </a>
                <h3>Full Stack coding Student</h3>
                <p>I have a experience in a following areas:</p>
                <ul className="bullet-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>React</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;