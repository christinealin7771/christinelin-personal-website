import React from 'react'
import './Project.css'
import ProjectItem from './ProjectItem'
import Footer from './Footer'
import { ProjectList } from '../projectLists/ProjectList'



const Project = () => {
  return (
    <div className='project'>
        <h1> Projects </h1>
        <div className='projectList'>
            {ProjectList.map((item, index) => {
                return <ProjectItem title={item.title} image={item.image} text={item.description} github={item.github}/>
            })}
        </div>
    
        <p className='spacing'></p>
        <Footer/>
    </div>
  )
}

export default Project