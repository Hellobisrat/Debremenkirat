import { highlightText } from "../utils/highlight"
import { ArrowLeftIcon} from "lucide-react"
import { FaYoutube } from "react-icons/fa";


export default function PrayerPage({ title, subtitle, sections,link }) {
  return (
    <div className="min-h-screen 
      bg-gradient-to-b from-gray-50 to-gray-500 
      dark:from-gray-900 dark:to-gray-800 
      py-5 px-2 transition-colors duration-300 ">

      <div className="max-w-3xl mx-auto 
        bg-sky-100 dark:bg-gray-800 
        shadow-xl rounded-xl p-8 
        animate-fadeIn transition-colors duration-300">

        <h1 className="text-center text-xl font-bold dark:text-gray-100 mb-2">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-6 dark:text-gray-200">
            {subtitle}
          </h2>
        )}

        <div className="space-y-6 text-xl font-semibold leading-10 
          text-gray-800 dark:text-gray-200 
          p-2 md:p-3 md:px-6 transition-colors duration-300 mx-auto">

          {sections.map((section, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: highlightText(section.text) }}
            />
          ))}
        </div>
        <a 
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-6 text-center w-25 p-6 rounded-full flex items-center justify-center bg-red-300 text-sky-600 dark:text-yellow-400 
             font-bold  hover:text-yellow-700 dark:hover:text-yellow-300 
             transition"

>
  <FaYoutube className="w-12 text-red-500" />
   You tube link
   <ArrowLeftIcon className="w-12 text-black hover:rotate-180 hover:text-red-400"/>
</a>

      </div>
    </div>
  )
}

