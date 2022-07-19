import React from 'react';
import Bootstrap from '../../assets/icons/icons8-bootstrap-96.png'
import CSS from '../../assets/icons/icons8-css3-96.png'
import HTML from '../../assets/icons/icons8-html-5-96.png'
import JS from '../../assets/icons/icons8-javascript-96.png'
import Mongo from '../../assets/icons/icons8-mongodb-96.png'
import Node from '../../assets/icons/icons8-node-js-96.png'
import ReactIcon from '../../assets/icons/icons8-react-100.png'
import SQL from '../../assets/icons/icons8-sql-96.png' 

function Resume() {

    return (
        <section>
            <h1 className="languageTitle">Language Proficiencies</h1>
            <div className='language'>
                <h1>Front-end</h1>
                <img
                    src={CSS}
                    alt="css"
                    className="footerimg mx-1"
                    key="css"
                    style={{ width: 50, height: 50 }}
                />
                <img
                    src={HTML}
                    alt="html"
                    className="footerimg mx-1"
                    key="html"
                    style={{ width: 50, height: 50 }}
                />
                <img
                    src={JS}
                    alt="js"
                    className="footerimg mx-1"
                    key="js"
                    style={{ width: 50, height: 50 }}
                />
                <img
                    src={Bootstrap}
                    alt="bootstrap"
                    className="footerimg mx-1"
                    key="bootstrap"
                    style={{ width: 50, height: 50 }}
                />
            </div>
            <div className='language'>
                <h1>Back-end</h1>
                <img
                    src={Node}
                    alt="node"
                    className="footerimg mx-1"
                    key="node"
                    style={{ width: 50, height: 50 }}
                />
            </div>
            <div className='language'>
                <h1>Database</h1>
                <img
                    src={Mongo}
                    alt="mongodb"
                    className="footerimg mx-1"
                    key="mongodb"
                    style={{ width: 50, height: 50 }}
                />
                <img
                    src={SQL}
                    alt="sql"
                    className="footerimg mx-1"
                    key="sql"
                    style={{ width: 50, height: 50 }}
                />
            </div>
            <div className='language'>
                <h1>Full-stack</h1>
                <img
                    src={ReactIcon}
                    alt="react"
                    className="footerimg mx-1"
                    key="react"
                    style={{ width: 50, height: 50 }}
                />
            </div>
            <button className='resumeBtn'>Download Resume</button>
        </section>
    );
}

export default Resume;
