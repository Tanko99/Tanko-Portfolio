import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex md:flex-row flex-col w-full p-0 m-0 items-center justify-between px-6 sm:px-2 py-4 mb-40 bg-cyan-400 text-gray-800 font-poppins">
            <img src={logo} alt="my logo is here" className="rounded-full w-32 h-32" />
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                {isOpen? <X size={30} /> : <Menu size={30} /> }
            </div>
            <ul  className={`z-50 md:flex md:items-center md:gap-6 absolute md:static left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"
        }`} >
            <li><Link to="/" className="hover:bg-purple-300 rounded-lg font-bold text-lg px-2 py-2 bg-cyan-400">Home</Link></li>
            <li><Link to="about"className="hover:bg-purple-300 rounded-lg font-bold text-lg px-2 py-2 bg-cyan-400">About Me</Link></li>
            <li><Link to="/projects"className="hover:bg-purple-300 rounded-lg font-bold text-lg px-2 py-2 bg-cyan-400">Projects</Link></li>
            <li><Link to="/skills"className="hover:bg-purple-300 rounded-lg font-bold text-lg px-2 py-2 bg-cyan-400">Skills</Link></li>
            <li><Link to="/contact"className="hover:bg-purple-300 rounded-lg font-bold text-lg px-2 py-2 bg-cyan-400">Contact Me</Link></li>
        </ul>
 </nav>
    );
}
export default Navbar;