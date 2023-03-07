import Button from "./common/Button";

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-20'>
        <div className="text-center space-y-6 p-4">
            <h3 className="text-4xl">Grow your business.</h3>
            <p className="text-black/50 leading-[28px] mx-auto lg:text-xl lg:max-w-5xl">
                Today is the day to build the business of 
                your dreams. Share your mission with the 
                world — and blow your customers away.
            </p>
            <Button color={false} text='start now' />
        </div>
    </footer>
  )
}

export default Footer