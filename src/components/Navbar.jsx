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
        bg-gradient-to-r from-yellow-600 to-yellow-400 
        dark:from-gray-900 dark:to-gray-800 
        text-white dark:text-gray-100
        transition-colors duration-300
        will-change-transform
      "
    >
      <h5 className="text-purple-200 dark:text-purple-300 text-xl font-bold tracking-wide drop-shadow-md">
        <Link to="/">ውዳሴ ማርያም</Link>
      </h5>

      <ul className="flex items-center gap-6 text-sm font-semibold">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:opacity-80 dark:hover:opacity-70 transition"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/index"
            className="flex items-center gap-1 hover:opacity-80 dark:hover:opacity-70 transition"
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
