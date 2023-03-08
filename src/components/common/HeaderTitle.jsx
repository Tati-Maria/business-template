import React from 'react'

const HeaderTitle = ({title, img=false}) => {
  return (
    <div
    {...img && {style: {backgroundImage: `url(${img})`}}}
    className='mb-16 h-[450px] bg-black flex items-center justify-center text-white bg-cover'>
        <h2 className='text-[50px] leading-[64px]'>
        {title}
        </h2>
    </div>
  )
}

export default HeaderTitle;