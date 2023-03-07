import React from 'react'

const TeamCard = ({name, occupation, photo}) => {
    

  return (
    <div className='flex flex-col items-center gap-10'>
        <img
        width={400} 
        src={photo} 
        alt={`${name}'s photo`} 
        />
        <div className='text-center'>
            <h3 className='text-xl'>{name}</h3>
            <p className='text-gray-500'>{occupation}</p>
        </div>
    </div>
  )
}

export default TeamCard