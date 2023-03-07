import {useEffect} from 'react'
import BlogPosts from '../components/BlogPosts'
import Title from '../components/common/Title'
import Hero from '../components/Hero'
import HomeMain from '../components/HomeMain'

const Home = () => {

  useEffect(() => {
    document.title = 'Home | Business'
  }, [])

  return (
    <>
      <Hero />
      <Title
      show={false} 
      subtitle='what we believe in' 
      title='Grow your business, establish your brand, and put your customers first.'
      />
      <hr className='border-none opacity-40 rounded-full mb-16 h-[2px] bg-black/20' />
      <HomeMain />
      <Title
      show={false}
      subtitle='about us'
      title='Company news'
       />
       <BlogPosts />
    </>
  )
}

export default Home