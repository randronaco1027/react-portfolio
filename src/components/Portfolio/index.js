import React from 'react'
import ProjectList from '../ProjectList'

// Display data from ProjectList
function Portfolio(props) {
  return (
    <section className='my-5 projects'>
      <h1>Projects</h1>
      <ProjectList/>
    </section>
  )
}
export default Portfolio;
