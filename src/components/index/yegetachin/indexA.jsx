import { motion } from "framer-motion"
import geyorgis from '../../../image/geyorgis.png'
import { Link } from "react-router-dom"




const days = [
  { label:"ማን እንደ እርሱ እንደ እግዚአብሄር", link: "/song/yegetachin/manendesu" },
  {label:"ጉልበቴና ሃይሌ ያደረኩት", link:"/song/yegetachin/gulebetenahaile" },
  {label:"ቸርነትህ ብዙ ምሕረትህ ብዙ",link:"/song/yegetachin/cherenetihbizu"},
  {label:"ኑ በብርሃኑ ተመላለሱ", link:"/song/yegetachin/nubebirhanu"},
  {label:"ኖላዊነ ሔር መድኃኔዓለም",link:"/song/yegetachin/nolawi"},
  {label:"የጥበብ ሰዎች መጡ",link:"/song/yegetachin/yetibesewoch"},
  {label:"እየባረካቸው ወደ ላይ አቀና",link:"/song/yegetachin/eyebarekachew"},
  
  
]

const IndexA = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-sky-200 bg-cover bg-center relative 
                 dark:bg-gray-900 transition-colors duration-300"
       style={{
  backgroundImage: `url(${geyorgis})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "auto"
}}
    >
      {/* Soft overlay */}
   

      <div className="relative w-full max-w-md 
                      bg-purple-100/90 dark:bg-gray-800/90 
                      shadow-xl rounded-2xl p-8 
                      transition-colors duration-300 mx-auto">
        
        <h1 className="text-2xl font-bold text-center mb-6 dark:text-gray-100">
            የ መዝሙር  ምርጫ
        </h1>

        <div className="flex flex-col gap-2 text-lg">
          {days.map((day, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={day.link}
                className="block w-full text-center 
                           bg-gradient-to-r from-gray-200 to-gray-300 
                           dark:from-gray-700 dark:to-gray-600
                           hover:from-gray-300 hover:to-gray-400 
                           dark:hover:from-gray-600 dark:hover:to-gray-500
                           text-gray-800 dark:text-gray-100 
                           font-semibold py-3 rounded-xl shadow-md 
                           transition-all"
              >
                {day.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between">
          <Link to="/index2">
            <button className="p-2 w-full bg-purple-300 text-slate-800 rounded-md mt-2">
              Back
            </button>
          </Link>

          

          <Link to="/">
            <button className="p-2 w-full bg-white text-slate-800 rounded-md mt-2">
              
            </button>
          </Link>
          <Link to="/indexB">
            <button className="p-2 w-full bg-purple-300 text-slate-800 rounded-md mt-2">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexA
