import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import geyorgis from "../../../image/geyorgis.png";

const days = [
  { label: "ለማርያም", link: "/song/emebetachin/lemariam" },
  { label: "ማርያም ማርያም ብዬ", link: "/song/emebetachin/mariammariam" },
  { label: "እናት አለኝ የምታብስ እንባ", link: "/song/emebetachin/enatalegn" },
  { label: "እንተ በህሊና", link: "/song/emebetachin/entebehilina" },
  { label: "እመቤቴ የአምላክ እናት", link: "/song/emebetachin/yamilakenat" },
  { label: "የያሬድ ውብ ዜማ", link: "/song/emebetachin/yeyaredwebzema" },
  { label: "የፍቅር እናት የሠላም", link: "/song/emebetachin/yefikirenat" }
];

export default function Index1() {
  return (
    <div
      className="min-h-screen flex items-center bg-sky-200 justify-center px-4 bg-center bg-cover relative 
                 dark:bg-gray-900 transition-colors duration-300"
      style={{
        backgroundImage: `url(${geyorgis})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "auto"
      }}
    >
      <div className="relative w-full max-w-md 
                      bg-purple-100/90 dark:bg-gray-800/90 
                      shadow-xl rounded-2xl p-8 
                      transition-colors duration-300 mx-auto">
        
        <h1 className="text-2xl font-bold text-center mb-6 dark:text-gray-100">
          የ መዝሙር ምርጫ
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

        <div className="flex gap-2 justify-around">
          <Link to="/index3">
            <button className="p-2 w-full bg-sky-400 text-white rounded-md mt-2 px-12">
              ቀጥል
            </button>
          </Link>
          <Link to="/">
            <button className="p-2 w-full bg-purple-300 text-slate-800 rounded-md mt-2 px-12">
              ቤት
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
