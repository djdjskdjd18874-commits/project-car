import ToggleTheme from "../Layout/ToggleTheme";
import { navMenu } from "../static/menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return <>
    <nav className="bg-blue-900 border-b border-gray-700">
      {/* الشريط العلوي */}
      <div className="h-20 flex items-center justify-between px-4 md:px-10">
        {/* Logo */}
       <div className="flex justify-center items-center w-full">
  <Link
    to="/"
    className="text-2xl font-extrabold text-yellow-400 tracking-wide text-center"
  >
    Luxury Wheels
  </Link>
</div>


        {/* زر الموبايل (Hamburger) */}
        <a
          className="text-yellow-400 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </a>
      </div>

      {/* القائمة */}
     <div
  className={`flex-col md:flex md:flex-row md:items-center md:gap-10 transition-all duration-300 
    ${open ? "flex" : "hidden md:flex"} md:justify-center md:flex-1`}
>
  
  {navMenu.map((item, index) => (
    <Link
      key={index}
      to={item.href}
      className="block px-4 py-2 text-lg font-medium text-gray-200 hover:text-yellow-400 transition"
      onClick={() => setOpen(false)}
    >
      {item.title}
    </Link>
    
  ))}
  <Link 
  to="/SignupPage"
  className=" sm:hidden block px-4 py-2 text-lg font-medium text-gray-200 hover:text-yellow-400 transition">
    
  Sign In
  
  </Link>

  <div className="px-4 py-2">
    <ToggleTheme />
  </div>
</div>

    </nav>
    
    

   
  </>;
}
