import { Link } from "react-router-dom";
import {RiMenu3Fill} from "react-icons/ri"

const Nav = () => {
  return (
    <nav className="flex items-center justify-between mb-2 py-3">
      <Link className="underline font-semibold text-lg" to='/'>
        Business
      </Link>
      <ul className="hidden lg:flex space-x-10 items-center text-gray-500 uppercase text-xs leading-[20px] font-medium">
        <li className="hover:text-gray-700 active:text-gray-900">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-700 active:text-gray-900">
            <Link to="/projects">Work</Link>
          </li>
          <li className="hover:text-gray-700 active:text-gray-900">
            <Link to="/team">Team</Link>
          </li>
          <li className="hover:text-gray-700 active:text-gray-900">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-gray-700 active:text-gray-900">
            <Link to="/contact">contact</Link>
          </li>
      </ul>
      <a
      className="hidden lg:inline-block bg-black text-white px-8 py-3 text-sm font-light tracking-wide uppercase hover:bg-black/80" 
      href="mailto:contact@business.com">
        contact us
      </a>
      <button className="block lg:hidden">
        <RiMenu3Fill size={30} />
      </button>
    </nav>
  )
}

export default Nav