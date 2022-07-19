import React, { useState } from 'react'
import Gobbler from '../../assets/projects/gobbler.png'
import Stocks from '../../assets/projects/portfolio.png'
import Weather from '../../assets/projects/weather.png'

function Projects(props) {

  const [projectlist] = useState([
    {
      name: "Gobbler",
      github: "https://github.com/randronaco1027/group-6_fullstack-project",
      application: "https://quiet-harbor-99755.herokuapp.com/",
      imageurl: Gobbler
    },
    {
      name: "Portfolio Manager",
      github: "https://github.com/snehp491/Group1",
      application: "https://github.com/snehp491/Group1",
      imageurl: Stocks
    },
    {
      name: "Weather Tracker",
      github: "https://github.com/randronaco1027/weather-dashboard",
      application: "https://github.com/randronaco1027/weather-dashboard",
      imageurl: Weather
    },
    {
      name: "Gobbler",
      github: "https://github.com/randronaco1027/group-6_fullstack-project",
      application: "https://quiet-harbor-99755.herokuapp.com/",
      imageurl: Gobbler
    },
    {
      name: "Portfolio Manager",
      github: "https://github.com/snehp491/Group1",
      application: "https://github.com/snehp491/Group1",
      imageurl: Stocks
    },
    {
      name: "Weather Tracker",
      github: "https://github.com/randronaco1027/weather-dashboard",
      application: "https://github.com/randronaco1027/weather-dashboard",
      imageurl: Weather
    }])
  return (
    <div>
      <div className="proj-flex-row">
        {projectlist.map((project) => (
          <div className="proj-container col-md-5 col-sm-10">
            <img
              src={project.imageurl}
              alt={project.name}
              className="img-thumbnail"
              key={project.name}
            />
            <div className="overlay text">
              <div>
                <h1 className='projectName'>{project.name}</h1>
              </div>
              <div>
                <button onClick={"location.href='{project.github}'"}>GitHub</button>
                <button href={project.application}>Heroku</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
