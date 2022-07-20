import React, { useState } from 'react'
import Gobbler from '../../assets/projects/gobbler.png'
import Stocks from '../../assets/projects/portfolio.png'
import Weather from '../../assets/projects/weather.png'
import Budget from '../../assets/projects/budget.png'
import Techblog from '../../assets/projects/techblog.png'
import Workday from '../../assets/projects/workday.png'

function Projects(props) {
  // JSON of projects to be displayed on Portfolio page
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
      name: "Budget Tracker",
      github: "https://github.com/randronaco1027/budget-tracker",
      application: "https://lower-minister-91619.herokuapp.com/",
      imageurl: Budget
    },
    {
      name: "Tech Blog",
      github: "https://github.com/randronaco1027/tech-blog-MVC",
      application: "https://gentle-plains-69704.herokuapp.com/",
      imageurl: Techblog
    },
    {
      name: "Work Day Scheduler",
      github: "https://github.com/randronaco1027/work-day-scheduler",
      application: "https://randronaco1027.github.io/work-day-scheduler/",
      imageurl: Workday
    }])
  return (
    <div>
      <div className="proj-flex-row">
        {/* Map through all projects in array and display on Portfolio page */}
        {projectlist.map((project) => (
          <div className="proj-container col-lg-3 col-md-5 col-sm-10">
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
                <button onClick={()=> window.open(`${project.github}`, "_blank")}>GitHub</button>
                <button onClick={()=> window.open(`${project.application}`, "_blank")}>Application</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
