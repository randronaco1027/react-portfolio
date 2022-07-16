import React, {useState} from 'react'
import Gobbler from '../../assets/gobbler.png'
import Stocks from '../../assets/portfolio.png'
import Weather from '../../assets/weather.png'

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
    }])
  return (
    <div>
      <div className="flex-row">
        {projectlist.map((project) => (
          <div>
          <p>{project.name}</p>
          <p>{project.github}</p>
          <p>{project.application}</p>
          <img
            src={project.imageurl}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          />
          
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Projects;
