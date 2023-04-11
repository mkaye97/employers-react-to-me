import React from "react";
import '../../styles/Resume.css';
import MyResume from '../../utils/files/KayeResume.docx'


function Resume() {
    return (
        <div className="resume-container">
            <a className="resume-download" href={MyResume} download='MKaye_Resume'>
                <h2>Download My Resume Here!</h2>
            </a>
            <div className="list-container">
                <h3>Front End Skills and Proficiencies</h3>
                <ul className="list">
                    <li className="list-item">HTML</li>
                    <li className="list-item">CSS</li>
                    <li className="list-item">JavaScript</li>
                    <li className="list-item">JQuery</li>
                    <li className="list-item">Responsive Design</li>
                    <li className="list-item">HandleBars</li>
                    <li className="list-item">React</li>
                    <li className="list-item">Bootstrap</li>
                    <li className="list-item">Materialize</li>
                    <li className="list-item">ChartJS</li>
                </ul>
                <h3>Back End Skills and Proficiencies</h3>
                <ul className="list">
                    <li className="list-item">API's</li>
                    <li className="list-item">Node</li>
                    <li className="list-item">Express</li>
                    <li className="list-item">MySQL, Sequelize</li>
                    <li className="list-item">MongoDB, Mongoose</li>
                    <li className="list-item">RESTful API's</li>
                    <li className="list-item">GraphQL</li>
                </ul>
                <h3>Other Notable Skills and Familiar Concepts</h3>
                <ul className="list">
                    <li className="list-item">Object Oriented Programing (OOP)</li>
                    <li className="list-item">Test Driven Development(TDD)</li>
                    <li className="list-item">Environment Variables</li>
                    <li className="list-item">Regular Expressions (RegEx)</li>
                    <li className="list-item">Object Relational Mapping (ORM)</li>
                    <li className="list-item">Progressive Web Applications</li>
                </ul>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
};

export default Resume;