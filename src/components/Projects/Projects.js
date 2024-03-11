import React from 'react'
import './Projects.scss'
import Project from './Project'

import { projectData } from '../../Projectdata'

const Projects = () => {
  return (
    <div className='projects-container'>
      {/* <Project />
      <Project />
      <Project />
      <Project /> */}

      {projectData.map(data => (
        <Project key={data.id} data={data} />
      ))}

      


    </div>
  )
}

export default Projects
