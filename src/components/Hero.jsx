import intro from '../assets/intro.svg';
import Button from "./common/Button";

const Hero = () => {
  return (
    <section
    className='h-[620px] bg-no-repeat bg-cover bg-center text-white' 
    style={{backgroundImage: `url(${intro})`}}>
        <div className='text-center flex flex-col items-center space-y-4 justify-center h-full'>
            <h1 className='text-5xl lg:text-[50px] leading-[64px] font-normal lg:text-7xl'>Grow your business.</h1>
            <p className='text-white/90 lg:font-medium text-gray-300 lg:text-xl'>Give your business a boost with a beautifully crafted homepage</p>
            <Button text='Learn more' color={true} />
        </div>
    </section>
  )
}

export default Hero