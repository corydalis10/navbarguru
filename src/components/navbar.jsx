import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import LibrarySelect from './libraryselect'

function Navbar() {
   return (
      <>
         <div className="navbar bg-base-100 border-b-1 border-gray-300">
            <div className="navbar-start">
               {/* Mobile Menu */}
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 border-1 border-gray-300">
                     <li><a>Item 1</a></li>
                     <li>
                        <a>Library</a>
                        <ul className="p-2">
                           <LibrarySelect />
                        </ul>
                     </li>
                  </ul>
               </div>
               <Link className="btn btn-ghost text-xl" to="/">Navbar Guru</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               {/* Desktop Menu */}
               <ul className="menu menu-horizontal px-1">
                  <li><a>Item 1</a></li>
                  <li>
                     <details>
                        <summary>Library</summary>
                        <ul className="p-2 w-44">
                           <LibrarySelect />
                        </ul>
                     </details>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               <a href="https://github.com/corydalis10/navbarguru.git" target="_blank" className="btn btn-circle btn-ghost">
                  <FaGithub size={28} />
               </a>
            </div>
         </div>
      </>
   )
}

export default Navbar
