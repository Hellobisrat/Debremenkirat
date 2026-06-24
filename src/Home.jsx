
import emebetachin from "./image/emebetachint.png";
import church from "./image/church.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = now.toLocaleDateString("am-ET", { weekday: "long" });
  const time = now.toLocaleTimeString("am-ET", { hour: "2-digit", minute: "2-digit" });

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 py-5 
                 dark:bg-gray-900 transition-colors duration-300 relative"
      style={{ backgroundImage: `url(${church})` }}
    >
         <div className="absolute inset-0 bg-black/50 dark:bg-black/70  z-0"></div>
      <div className="grid md:grid-cols-2 gap-5 max-w-5xl w-full p-1 relative">

        {/* LEFT SIDE — IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={emebetachin}
            alt="Emebetachin"
            className="rounded-2xl shadow-2xl w-72 md:w-96 object-cover"
          />
        </div>

        {/* RIGHT SIDE — TEXT + BUTTON + TODAY CARD */}
         <div className="relative  flex flex-col justify-center items-center space-y-6 gap-8 max-w-3xl w-full 
                      bg-white/15 dark:bg-gray-800/90 
                      backdrop-blur-md rounded-2xl shadow-2xl p-8 
                      animate-fadeIn transition-colors duration-300">

          {/* TODAY CARD */}
         

          {/* Small Title */}

          <div className="uppercase tracking-wide text-xl text-sky-200 dark:text-sky-400 font-extrabold text-center">
            የፍሬ ሃይማኖት ሰንበት ትምህርት ቤት መዝሙር ክፍል
          </div>

          {/* Main Title */}
          <h1 className="text-xl md:text-2xl font-bold 
                         text-gray-900 dark:text-gray-100 leading-snug">
            የመዝሙር ጥናት ቀኖች
          </h1>

          {/* Schedule */}
          <div className="space-y-2 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            <p>ማክሰኞ ፡ 8 – 9 በቫይበር — የቡድን መሪ <span className="text-red-400 font-bold">ወለላ</span></p>
            <p>ሃሙስ ፡ 8 – 9 በቫይበር — የቡድን መሪ <span className="text-red-400 font-bold">ረድኤት</span></p>
            <p>ዐርብ ፡ 8 – 9 በአካል — የቡድን መሪ <span className="text-red-400 font-bold">ሰላም</span></p>
          </div>

          {/* Button */}
          <Link
            to="/index"
            className="inline-block bg-red-600 hover:bg-red-700 
                       dark:bg-red-700 dark:hover:bg-red-800
                       text-white font-semibold py-3 px-8 rounded-xl shadow-md 
                       transition-all active:scale-95 w-fit"
          >
            ጀምር
          </Link>

           <div className="bg-white/80 dark:bg-gray-800/80 shadow-lg rounded-xl flex items-center justify-around gap-1 p-1 w-[200px]">
            <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold">
              ዛሬ፡ {day}
            </p>
            <p className="text-red-600 dark:text-gray-100 text-lg font-bold">
              {time}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
