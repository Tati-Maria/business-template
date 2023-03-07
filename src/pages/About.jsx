import {useEffect} from 'react'
import HeaderTitle from '../components/common/HeaderTitle'
import Title from '../components/common/Title';
import Services from '../components/Services';

const About = () => {

  useEffect(() => {
    document.title = 'About Us | Business'
  }, [])

  return (
    <>
    <HeaderTitle title='About Us' />
    <h2 className='text-center mb-16 text-3xl px-10 leading-normal lg:max-w-4xl mx-auto'>
      We’re a group of creative thinkers who have built a business to 
      change the world.
    </h2>
    <hr className='border-none opacity-40 rounded-full mb-16 h-[2px] bg-black/20' />
    <div className='text-black/70 font-medium space-y-14 my-16 text-center'>
      <p className='px-10 leading-[24px]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Asperiores quis illum quaerat sequi quae tenetur eum accusamus
        molestiae tempora repudiandae amet magni perferendis quo maxime, 
        sint a, corrupti delectus quibusdam. Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Consequuntur, quae vitae? Sint, 
        minus perferendis, sequi minima consequatur hic consequuntur n
        ecessitatibus dignissimos esse magni expedita in pariatur! 
        Esse doloribus earum vero!
      </p>
      <p className='px-10 leading-[24px]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Asperiores quis illum quaerat sequi quae tenetur eum accusamus
        molestiae tempora repudiandae amet magni perferendis quo maxime, 
        sint a, corrupti delectus quibusdam. Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Consequuntur, quae vitae? Sint, 
        minus perferendis, sequi minima consequatur hic consequuntur n
        ecessitatibus dignissimos esse magni expedita in pariatur! 
        Esse doloribus earum vero!
      </p>
      <p className='px-10 leading-[24px]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Asperiores quis illum quaerat sequi quae tenetur eum accusamus
        molestiae tempora repudiandae amet magni perferendis quo maxime, 
        sint a, corrupti delectus quibusdam. Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Consequuntur, quae vitae? Sint, 
        minus perferendis, sequi minima consequatur hic consequuntur n
        ecessitatibus dignissimos esse magni expedita in pariatur! 
        Esse doloribus earum vero!
      </p>
    </div>
    <hr className='border-none opacity-40 rounded-full mb-16 h-[2px] bg-black/20' />
    <Title 
    show={false} 
    title='Our Services'
    subtitle='What we are best at'
    />
    <Services />
    </>
  )
}

export default About