import React from 'react'

const Title = ({title, subtitle, about, show=false}) => {
  return (
    <div
        className={`flex flex-col space-y-2 justify-center ${show ?  '' : 'my-24 items-center text-center'}`} 
        >
          <small className='text-gray-500 uppercase tracking-wide'>{subtitle}</small>
          <h2 className='leading-[52px] text-3xl px-10 lg:max-w-4xl lg:px-0'>{title}</h2>
          {show && <p className='text-gray-400 leading-relaxed tracking-wide'>{about}</p>}
     </div>
  )
}

export default Title