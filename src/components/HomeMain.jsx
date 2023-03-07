import Button from "./common/Button";
import Title from "./common/Title";
import placeholder1 from "../assets/placeholder-1.svg";
import placeholder2 from "../assets/placeholder-2.svg";

const HomeMain = () => {
  return (
    <section className="mb-16">
        <div className="grid grid-col-1 place-items-center gap-20">
            <div className="flex flex-col items-center space-y-14 lg:flex-row-reverse lg:gap-20">
                <img 
                src={placeholder1} 
                alt="placeholder picture" 
                className='lg:h-[500px] lg:w-[900px]' 
                />
                <div className="text-center lg:text-left space-y-8">
                    <Title
                    title='Who we are'
                    subtitle='about'
                    show={true}
                    about='Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.'
                    />
                    <Button text='Learn more' />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-14 lg:flex-row lg:gap-20">
                <img 
                src={placeholder2} 
                alt="placeholder picture"
                className='lg:h-[500px] lg:w-[900px]' 
                />
                <div className="text-center lg:text-right space-y-8">
                    <Title
                    title='What we do'
                    subtitle='team'
                    show={true}
                    about='We are a team of designers and developers that create high quality websites and mobile apps. We are based in New York, with offices in San Francisco and London. Come meet us if you are around! We would love to have a chat with you.'
                    />
                    <Button text='Learn more' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeMain