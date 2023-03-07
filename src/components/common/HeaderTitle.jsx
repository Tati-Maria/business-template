import React from 'react'

const HeaderTitle = ({title}) => {
  return (
    <div className='mb-16 h-[450px] bg-black flex items-center justify-center text-white'>
        <h2 className='text-[50px] leading-[64px]'>
        {title}
        </h2>
    </div>
  )
}

export default HeaderTitle;