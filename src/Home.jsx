
import emebetachin from "./image/emebetachint.png";
import church from "./image/church.png";
import { Link } from "react-router-dom";


function Home() {
  // const [now, setNow] = useState(new Date());

  // // Short rotating messages
  // const shortMessages = [
  //   "የነገ ተረጎሞች",
  //   "ሰርቃለም",
  //   "ስብሃት",
  //   "ሰላም አለሙ"
  // ];

  // // Long announcement
  // const longMessage =
  //   "እንደምን ከረማችሁ የፍሬ ሃይማኖት የሰንበት ት/ቤት አባላት። በወር $10 የአመት $120 መዋጫ እንዳለ ይታወቃል። መዋጮውን ያልከፈሉ አባላት በቤተክርስቲያን አካውንት ዜል ማድረግ ይችላሉ።";

  // const [msgIndex, setMsgIndex] = useState(0);
  // const [showLong, setShowLong] = useState(false);

  // Rotate messages
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!showLong) {
  //       if (msgIndex < shortMessages.length - 1) {
  //         setMsgIndex(msgIndex + 1);
  //       } else {
  //         setShowLong(true);
  //       }
  //     } else {
  //       setShowLong(false);
  //       setMsgIndex(0);
  //     }
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [msgIndex, showLong]);

  // // Live clock
  // useEffect(() => {
  //   const timer = setInterval(() => setNow(new Date()), 1000);
  //   return () => clearInterval(timer);
  // }, []);

  // const day = now.toLocaleDateString("am-ET", { weekday: "long" });
  // const time = now.toLocaleTimeString("am-ET", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  // // Show messages only Sat 6 PM → Sun 12 PM
  // const showMessages = (() => {
  //   const d = now.getDay(); // 0=Sun, 6=Sat
  //   const h = now.getHours();
  //   if (d === 6 && h >= 18) return true;
  //   if (d === 0 && h < 12) return true;
  //   return false;
  // })();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 py-5 
                 dark:bg-gray-900 transition-colors duration-300 relative"
      style={{ backgroundImage: `url(${church})` }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-0"></div>

      <div className="grid md:grid-cols-3 gap-5 max-w-6xl w-full p-1 relative">

        {/* LEFT — IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={emebetachin}
            alt="Emebetachin"
            className="rounded-2xl shadow-2xl w-72 md:w-96 object-cover"
          />
        </div>

        {/* MIDDLE — MAIN CONTENT */}
        <div className="relative flex flex-col justify-center items-center space-y-6 gap-8 max-w-3xl w-full 
                        bg-white/15 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 
                        animate-fadeIn transition-colors duration-300">

          <div className="uppercase tracking-wide text-xl text-sky-200 dark:text-sky-400 font-extrabold text-center">
            የፍሬ ሃይማኖት ሰንበት ትምህርት ቤት መዝሙር ክፍል
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-snug">
            የመዝሙር ጥናት ቀኖች
          </h1>

          <div className="space-y-2 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            <p>ማክሰኞ ፡ 8 – 9 በቫይበር — መሪ <span className="text-red-400 font-bold">ወለላ</span></p>
            <p>ሃሙስ ፡ 8 – 9 በቫይበር — መሪ <span className="text-red-400 font-bold">ረድኤት</span></p>
            <p>ዐርብ ፡ 8 – 9 በአካል — መሪ <span className="text-red-400 font-bold">ሰላም</span></p>
          </div>

          <Link
            to="/yesamintu"
            className="bg-blue-400 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800
                       text-white font-semibold py-3 px-8 rounded-xl shadow-md 
                       transition-all active:scale-95 w-full flex items-center justify-center"
          >
            የዚሳምንት መዝሙር
          </Link>

          <Link
            to="/index"
            className="inline-block bg-red-600 hover:bg-red-700 
                       dark:bg-red-700 dark:hover:bg-red-800
                       text-white font-semibold py-3 px-8 rounded-xl shadow-md 
                       transition-all active:scale-95 w-fit"
          >
            ጀምር
          </Link>
        </div>

        {/* RIGHT — ROTATING MESSAGES */}
        {/* {showMessages && (
          <div className="bg-white/20 dark:bg-gray-800/80 backdrop-blur-md 
                          rounded-2xl shadow-xl p-6 flex flex-col justify-center 
                          text-center animate-fadeIn">
            <h2 className="text-xl font-bold text-yellow-300 mb-4">መልዕክት</h2>

            <p className="text-white dark:text-gray-200 text-lg leading-relaxed">
              {showLong ? longMessage : shortMessages[msgIndex]}
            </p>
          </div>
        )} */}

      </div>
    </div>
  );
}

export default Home;
