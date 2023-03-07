import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col gap-10 border border-gray-300 p-10'>
          <legend className='text-center text-4xl lg:text-left'>
            Contact us
          </legend>
          <p className='text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusantium.</p>
          <fieldset className='flex flex-col space-y-3'>
            <label
            className='uppercase text-xs' 
            htmlFor="name"
            >
                Name
            </label>
            <input
            className='border border-gray-300 p-3 placeholder:text-sm'
            type="text" 
            name="name" 
            id="name"
            placeholder='John Doe' 
             />
          </fieldset>
          <fieldset className='flex flex-col space-y-3'>
            <label 
            className='uppercase text-xs' 
            htmlFor="email"
            >
                Email
            </label>
            <input
            className='border border-gray-300 p-3 placeholder:text-sm' 
            type="email" 
            name="email" 
            id="email"
            placeholder='Enter your email' 
            />
          </fieldset>
          <fieldset className='flex flex-col space-y-3'>
            <label
            className='uppercase text-xs' 
            htmlFor="message"
            >
                Message
            </label>
            <textarea
            className='border border-gray-300 p-4 h-44 placeholder:text-sm' 
            name="message" 
            id="message" 
            placeholder='Hi there, I am reaching out because I think we can collaborate...' />
          </fieldset>
    </form>
  )
}

export default Form