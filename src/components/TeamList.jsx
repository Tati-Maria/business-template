import michael from '../assets/michael.jpg';
import jason from '../assets/jason.jpg';
import amanda from '../assets/amanda.jpg';
import billy from '../assets/billy.jpg';
import joana from '../assets/joana.jpg';
import ester from '../assets/ester.jpg';
import TeamCard from './common/TeamCard';

const team = [
    {
        id: 1,
        name: 'Michael Fassbender',
        occupation: 'CEO',
        photo: michael
    },
    {
        id: 2,
        name: 'Jason Smith',
        occupation: 'Product Designer',
        photo: jason
    },
    {
        id: 3,
        name: 'Amanda Peterson',
        occupation: 'Design Director',
        photo: amanda
    },
    {
        id: 4,
        name: 'Billy Maxwell',
        occupation: 'Lead Developer',
        photo: billy
    },
    {
        id: 5,
        name: 'Joana Harris',
        occupation: 'CTO',
        photo: joana
    },
    {
        id: 6,
        name: 'Esther Ford',
        occupation: 'Recruiter',
        photo: ester
    }
]

const TeamList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center mb-16'>
        {team.map((person) => {
            return <TeamCard key={person.id} name={person.name} photo={person.photo} occupation={person.occupation} />
        })}
    </div>
  )
}

export default TeamList