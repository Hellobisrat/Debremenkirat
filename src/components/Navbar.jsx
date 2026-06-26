import React from "react";
import { Link } from "react-router-dom";
import { Home, Menu} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className="
        flex justify-between items-center px-5 py-4 
        rounded-t-lg shadow-xl 
        bg-gradient-to-r from-purple-200/30 to-sky-100/40 
        dark:from-gray-900 dark:to-gray-800 
        text-white dark:text-gray-100
        transition-colors duration-300
        will-change-transform
      "
    >
      <h5 className="text-sky-200 bg-slate-600 rounded-full flex items-center justify-center w-50 p-2 dark:text-purple-300 text-xl font-bold tracking-wide drop-shadow-md hover:scale-110 hover:bg-purple-300">
        <Link to="/">ፍሬ ሃይማኖት</Link>
      </h5>

      <ul className="flex items-center gap-6 text-sm font-semibold">
        <li>
          <Link
            to="/"
            className="flex items-center text-slate-600 gap-1 hover:opacity-80 dark:hover:opacity-70 transition"
          >
            <Home size={18} />
            
          </Link>
        </li>

        <li>
          <Link
            to="/index"
            className="flex items-center text-slate-700 gap-1 hover:opacity-80 dark:hover:opacity-70 transition"
          >
            <Menu size={18} />
            <span>ማውጫ</span>
          </Link>
        </li>

    
      </ul>

     <ThemeToggle/>
    </nav>
  );
};

export default Navbar;
