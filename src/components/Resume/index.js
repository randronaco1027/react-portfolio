import React, { useState } from 'react';

function Resume() {
    const [icons] = useState([
        {
            name: 'AWS',
        },
        {
            name: 'Bootstrap',
        },
        {
            name: 'Python',
        },
        {
            name: 'GraphQL',
        },
        {
            name: 'HTML',
        },
        {
            name: 'JavaScript',
        },
        {
            name: 'MongoDB',
        },
        {
            name: 'node.js',
        },
        {
            name: 'react'
        },
        {
            name: 'CSS',
        },
        {
            name: 'sequelize',
        },
        {
            name: 'handlebars',
        },
        {
            name: 'jquery',
        },
        {
            name: 'jest',
        }, 
        {
            name: 'mongoose'
        }, 
        {
            name: 'heroku'
        },
        {
            name: 'git'
        },
        {
            name: 'MySQL',
        }
    ])
    return (
        <section className="my-5  fade-in-effect">
            {/* Icons of all softwares learned in course */}
            <h1 className="languageTitle">Technical Proficiencies</h1>
            <div className='icon-section m-3'>
                {icons.map((image, i) => (
                    <div className='sep-icon-section m-4' style={{ width: 96, height: 96 }}>
                        <img
                            src={require(`../../assets/icons/${i}.png`)}
                            alt={image.name}
                            className='m-2 col-md-3 icon-img'
                            key={image.name}
                            style={{ width: 96, height: 96 }}
                        />
                    </div>
                ))}
            </div>
            <a href={require('../../assets/misc/RayAndronacoResume.pdf')} download>
                <button className='resumeBtn'>Download Resume</button>
            </a>
        </section>
    );
}

export default Resume;
