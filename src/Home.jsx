import React from "react";
import emebetachin from "./image/emebetachint.png";
import church from "./image/church.png";
import { Link } from "react-router-dom"


function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 py-10 relative 
                 dark:bg-gray-900 transition-colors duration-300"
      style={{ backgroundImage: `url(${church})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-8 max-w-3xl w-full 
                      bg-white/85 dark:bg-gray-800/90 
                      backdrop-blur-md rounded-2xl shadow-2xl p-8 
                      animate-fadeIn transition-colors duration-300">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={emebetachin}
            alt="Emebetachin"
            className="rounded-xl shadow-lg w-64 md:w-80 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">

          {/* Small Title */}
          <div className="uppercase tracking-wide text-sm text-red-600 dark:text-red-400 font-bold">
            የደብረ መንክራት ሰንበት ትምህት  መዝሙር ክፍል
          </div>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold 
                         text-gray-900 dark:text-gray-100 leading-snug">
            ሰው የመዝሙር ጥናት ቀኖች 
          </h1>

          {/* Paragraph */}
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
           ማክሰኞ  8 እስከ 9 በቫይበር
          </p>
           <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            ሃሙስ 8 እስከ 9 በቫይበር
          </p>
           <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
           ዐርብ 8 እስከ 9 በቫይበር
          </p>

          {/* Button */}
          <Link
            to="/index"
            className="inline-block mt-4 bg-red-600 hover:bg-red-700 
                       dark:bg-red-700 dark:hover:bg-red-800
                       text-white font-semibold py-2 px-6 rounded-xl shadow-md 
                       transition-all active:scale-95 w-fit"
          >
            ጀምር
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Home;

