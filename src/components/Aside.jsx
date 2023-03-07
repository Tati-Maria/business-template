import React from 'react'

const Aside = () => {
  return (
    <aside className='flex flex-col gap-10 items-center lg:items-start'>
        <div className='text-center lg:text-left'>
        <span className='uppercase text-xs'>our offices</span>
        <p className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsum!</p>
        </div>
        <div className='text-center space-y-4 lg:text-left'>
        <span className='uppercase text-xs'>our office</span>
        <address className=''>
            <p>1234 Main Street,</p>
            <p>San Francisco,</p>
            <p>CA 94133</p>
        </address>
        </div>
        <div className='text-center space-y-4 lg:text-left'>
            <span className='uppercase text-xs'>working hours</span>
            <p>Monday - Friday: 9am - 3pm</p>
        </div>
        <div className='text-center text-gray-500 space-y-4 lg:text-left'>
            <span className='uppercase text-xs text-black'>contact</span>
            <p>Phone: 123-456-7890</p>
            <a className='underline' href='mailto:contact@business.com'>Email: contact@business.com</a>
        </div>
    </aside>
  )
}

export default Aside;