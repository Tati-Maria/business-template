

const ServiceCard = ({icon, text, title}) => {
  return (
    <div className="flex flex-col items-center space-y-6 lg:items-start">
        <img className="w-14" src={icon} alt="icon placeholder" />
        <h3 className="text-lg">{title}</h3>
        <p className="text-gray-500 text-center px-4 font-medium lg:text-start lg:px-0">{text}</p>
    </div>
  )
}

export default ServiceCard;