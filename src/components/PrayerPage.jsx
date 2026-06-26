import { highlightText } from "../utils/highlight"



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
  {link && (
  <div className="mt-6 w-full flex justify-center">
    <iframe
      className="rounded-xl shadow-lg"
      width="100%"
      height="315"
      src={
        link
          .replace("youtu.be/", "www.youtube.com/embed/")
          .replace("watch?v=", "embed/")
          .split("?")[0]
      }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)}

      </div>
    </div>
  )
}

