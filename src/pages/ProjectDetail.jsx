import React from 'react';
import HeaderTitle from '../components/common/HeaderTitle';
import { projects } from './Work';

const project = projects.find(project => project.id);

const ProjectDetail = () => {
  return (
    <div className='mb-16'>
        <HeaderTitle title={project.title} img={true && project.image} />
        <div className='text-gray-500 text-center space-y-3 mb-6'>
            <span className='text-black uppercase text-xs'>Description</span>
            <p className='font-medium'>{project.desc}</p>
        </div>
        <div className='text-gray-500 text-center space-y-3 mb-6'>
            <span className='text-black uppercase text-xs'>When</span>
            <p className='font-medium'>{project.date}</p>
        </div>
        <div className='text-gray-500 text-center space-y-3'>
            <span className='text-black uppercase text-xs'>Who</span>
            <p className='font-medium'>{project.who}</p>
        </div>
    </div>
  )
}

export default ProjectDetail;