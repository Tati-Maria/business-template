import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project-placeholder1.svg';
import project2 from '../assets/project-placeholder2.svg';
import project3 from '../assets/project-placeholder3.svg';
import HeaderTitle from '../components/common/HeaderTitle';
import Title from '../components/common/Title';

export const projects = [
  {
    id: 1,
    title: 'Project #1',
    small: 'Art direction',
    image: project1,
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    date: '2020-01-01',
    who: 'John Doe, Jane Doe',
  },
  {
    id: 2,
    title: 'Project #2',
    small: 'Product Design',
    image: project2,
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    date: '2020-03-01',
    who: 'John Doe, Jane Doe'
  },
  {
    id: 3,
    title: 'Project #3',
    small: 'Animation',
    image: project3,
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    date: '2022-09-01',
    who: 'John Doe, Jane Doe'
  }
]

const Work = () => {

  useEffect(() => {
    document.title = 'Projects | Business'
  }, [])

  return (
    <>
    <HeaderTitle title='Our Work' />
    <Title subtitle='Our Work' title='Team Projects' />
    <div className="grid grid-cols-1 place-items-center gap-20 mb-16 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => (
        <div key={project.id} className="p-4 text-center space-y-10">
        <Link to={`/projects/${project.id}`} className='hover:opacity-80 transition-opacity'>
          <img src={project.image} alt={project.title} />
        </Link>
        <div className='space-y-2'>
          <h3 className="text-xl ">{project.title}</h3>
          <p className="text-gray-500">{project.small}</p>
        </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Work