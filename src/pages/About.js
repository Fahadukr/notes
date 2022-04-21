import React, { useEffect } from "react";

let About = () => {

    useEffect(() => {

        window.scrollTo(0, 0);

        document.body.style.zoom = "130%";

    }, [])

    return (
        <div className="about-text">
            <p> Simple notes app created with React.js </p>
            <p> The backend is written in Python - Flask, deployed on google cloud </p>
            <p> Main technologies: </p>
            <ul>
                <li>Google Cloud Platform</li>
                <li>react: 18.0.0</li>
                <li>react-router-dom: 6.3.0</li>
                <li>Flask: 2.1.1</li>
            </ul>
            <p className="contact-me">  <a href="https://github.com/Fahadukr/notes">&#187; Sourse code: React</a> </p>
            <p className="contact-me"> <a href="https://github.com/Fahadukr/notes">&#187; Sourse code: Flask</a> </p>
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