import React, { useState } from 'react'
import Weather from '../../assets/projects/weather.png'
import Budget from '../../assets/projects/budget.png'
import Techblog from '../../assets/projects/techblog.png'
import Bubbly from '../../assets/projects/bubbly.png'

function Projects() {
  // JSON of projects to be displayed on Portfolio page
  const [projectlist] = useState([
    {
      name: "Weather Tracker",
      github: "https://github.com/randronaco1027/weather-dashboard",
      application: "https://randronaco1027.github.io/weather-dashboard/",
      imageurl: Weather,
      skillset: 'HTML, CSS, JavaScript, API'
    },
    {
      name: "Budget Tracker",
      github: "https://github.com/randronaco1027/budget-tracker",
      application: "https://lower-minister-91619.herokuapp.com/",
      imageurl: Budget,
      skillset: 'HTML, CSS, JavaScript, PWA'
    },
    {
      name: "Tech Blog",
      github: "https://github.com/randronaco1027/tech-blog-MVC",
      application: "https://gentle-plains-69704.herokuapp.com/",
      imageurl: Techblog,
      skillset: 'CSS, Handlebars, JavaScript, Node.js, MySQL, Sequelize'
    },
    {
      name: "Bubbly",
      github: "https://github.com/randronaco1027/booze-and-bubbles",
      application: "https://snehp491-booze-bubbles.herokuapp.com/",
      imageurl: Bubbly,
      skillset: 'MongoDB, Express, React, Node.js, CSS'
    }])
  return (
    <div>
      <div className="proj-flex-row">
        {/* Map through all projects in array and display on Portfolio page */}
        {projectlist.map((project) => (
          <div className="proj-container col-md-5 col-sm-10">
            <img
              src={project.imageurl}
              alt={project.name}
              className="img-thumbnail"
              key={project.name}
            />
            <div className="overlay text">
              <div className='projectName'>
                <h1>{project.name}</h1>
              </div>
              <div className='projectBtn'>
                <button onClick={() => window.open(`${project.github}`, "_blank")}>GitHub</button>
                <button onClick={() => window.open(`${project.application}`, "_blank")}>Application</button>
              </div>
              <div className='skillset'>
                <p>{project.skillset}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
