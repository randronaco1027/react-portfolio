import React from 'react'
import ProjectList from '../ProjectList'

// Display data from ProjectList
function Portfolio(props) {
  return (
    <section className='my-5 projects fade-in-effect'>
      <h1>Projects</h1>
      <ProjectList/>
    </section>
  )
}
export default Portfolio;
