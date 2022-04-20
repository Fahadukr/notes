import React from "react";

let About = () => {
    return (
        <div className="about-text">
            <p> Simple notes app created with React.js </p>
            <p> Main technologies: </p>
            <ul>
                <li>react: 18.0.0</li>
                <li>react-router-dom: 6.3.0</li>
                <li>json-server: 0.17.0</li>
            </ul>
            <p className="contact-me">  <a href="https://gitlab.com/fahadukr/notes">&#187; Sourse code</a> </p>
            <p style={{ color: '#f68657' }}>Conact me:</p>
            <ul className="contact-me">
                <li> <a href="https://www.linkedin.com/in/fahadukr/">LinkedIn</a> </li>
            </ul>
            <ul className="contact-me">
                <li>E-Mail: <button
                    onClick={() => window.location = 'mailto:fahadukr@gmail.com'}>fahadukr@gmail.com</button> </li>
            </ul>

        </div>
    )
}

export default About;