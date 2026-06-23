import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { GiPrayer } from "react-icons/gi"
import { IoInformationCircle } from "react-icons/io5"


const Footer = () => {
  return (
    <div className="
      fixed bottom-0 left-0 right-0 z-50 
      bg-yellow-500 dark:bg-gray-800 
      shadow-md p-2 flex justify-around 
      text-gray-700 dark:text-gray-200
      backdrop-blur-sm
      transition-colors duration-300
    ">
      <Link 
        to="/" 
        className="flex flex-col items-center active:scale-95 transition-all"
      >
        <AiFillHome className="text-2xl" />
        <span className="text-xs"></span>
      </Link>

      <Link 
        to="/index" 
        className="flex flex-col items-center active:scale-95 transition-all"
      >
        <GiPrayer className="text-2xl" />
        <span className="text-xs"></span>
      </Link>

      <Link 
        to="/" 
        className="flex flex-col items-center active:scale-95 transition-all"
      >
        <IoInformationCircle className="text-2xl" />
        <span className="text-xs"></span>
      </Link>
    </div>
  )
}

export default Footer
