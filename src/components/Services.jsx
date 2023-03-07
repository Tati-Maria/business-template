import support from "../assets/support.svg";
import events from "../assets/support.svg";
import strategy from "../assets/strategy.svg";
import management from "../assets/management.svg";
import training from "../assets/training.svg";
import consulting from "../assets/consulting.svg";
import ServiceCard from "./ServiceCard";

const services = [
    {
        id: 1,
        title: 'Support',
        icon: support,
        text: "Our team is dedicated to providing the best possible customer service, and we'll do everything we can to assist you."
    },
    {
        id: 2,
        title: 'Strategy',
        icon: strategy,
        text: "We'll help you develop a strategy that will help you achieve your goals and grow your business."
    },
    {
        id: 3,
        title: 'Management',
        icon: management,
        text: "We'll help you manage your business and make sure it's running smoothly."
    },
    {
        id: 4,
        title: 'Training',
        icon: training,
        text: "We'll help you train your employees and make sure they're up to date with the latest trends."
    },
    {
        id: 5,
        title: 'Consulting',
        icon: consulting,
        text: "Our team of experienced strategists will work closely with you to understand your unique needs and develop customized plans to help you succeed."
    },
    {
        id: 6,
        title: 'Events',
        icon: events,
        text: "We'll help you organize events and make sure they're a success."
    }

]

const Services = () => {
  return (
    <section className="mb-16 max-w-6xl mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center'>
            {services.map((service) => (
                <ServiceCard key={service.id} title={service.title} text={service.text} icon={service.icon} />
            ))}
        </div>
    </section>
  )
}

export default Services;