import React from 'react'

const PageLayout = ({children}) => {
  return (
    <div className='mx-auto p-4 max-w-[1440px] font-montserrat'>
        {children}
    </div>
  )
}

export default PageLayout;