import { Facebook, Linkedin, Twitter, Github } from "lucide-react";
import logo from '../assets/logo.png';

function Footer(){
    return (
        <footer className="bg-black mt-16 p-8 font-poppins flex md:flex-row flex-col items-center justify-between" >
            <img src={logo} alt="my personal logo"  className="w-16 h-16 rounded-full" />
            <p className="text-sm text-gray-200 md:text-xl sm:text-lg text-center md:text-right">
                &copy; {new Date().getFullYear()} <em>Tanko Fabrice. All rights reserved.</em>
             </p>
            <div className="flex text-white  gap-2">
                <a href="https://www.facebook.com/share/17gMMJNHhP/" target="_blank" rel="noopener nooreferrer">
                    <Facebook size={36}  />
                </a>
                <a href="https://x.com/tanko_fabrice" target="_blank" rel="noopener noreferrer">
                    <Twitter size={35}  />
                </a>
                <a href="https://github.com/Tanko99/" target="_blank" rel="noopener noreferrer">
                    <Github size={35}  />
                </a>
                <a href="https://www.linkedin.com/in/tanko-fabrice-042735253/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={35}  />
                </a>
            </div>
        </footer>
    );
}

export default Footer;