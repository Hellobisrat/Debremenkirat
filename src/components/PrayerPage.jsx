import { highlightText } from "../utils/highlight"
import { ArrowBigRight } from "lucide-react"
export default function PrayerPage({ title, subtitle, sections,link }) {
  return (
    <div className="min-h-screen 
      bg-gradient-to-b from-gray-50 to-gray-300 
      dark:from-gray-900 dark:to-gray-800 
      py-5 px-4 transition-colors duration-300">

      <div className="max-w-3xl mx-auto 
        bg-white dark:bg-gray-800 
        shadow-xl rounded-xl p-8 
        animate-fadeIn transition-colors duration-300">

        <h1 className="text-center text-xl font-bold dark:text-gray-100">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-6 dark:text-gray-200">
            {subtitle}
          </h2>
        )}

        <div className="space-y-6 text-xl font-semibold leading-10 
          text-gray-800 dark:text-gray-200 
          p-2 md:p-3 transition-colors duration-300 mx-auto">

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
  className="block mt-6 text-center w-25 p-6 rounded-full flex items-center justify-center bg-red-300 text-yellow-600 dark:text-yellow-400 
             font-bold  hover:text-yellow-700 dark:hover:text-yellow-300 
             transition"
>
  YouTube Link <ArrowBigRight className="w-2 text-purple-300"/>
</a>

      </div>
    </div>
  )
}

