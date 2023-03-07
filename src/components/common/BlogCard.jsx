import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({title, date, content, id, img, show=false}) => {
  return (
    <article className='flex flex-col items-center space-y-4 px-8 text-center lg:text-left'>
        <Link to={`/blog/${id}`} className='inline-block hover:opacity-80 transition-opacity duration-300'>
          {show && <img src={img} alt={title} className='pb-10'/>}
            <h3 className={`${show ? 'text-3xl px-0 leading-[46px] font-normal' : 'text-2xl font-medium'} px-10 lg:px-0`}>{title}</h3>
        </Link>
        <small 
        className='text-gray-500 uppercase w-full text-center lg:text-left'
        >
            {date}
        </small>
        <p className='font-light leading-[28px] opacity-60'>{content}</p>
    </article>
  )
}

export default BlogCard;