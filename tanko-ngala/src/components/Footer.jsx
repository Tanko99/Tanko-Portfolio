import { Facebook, Linkedin, Twitter, Github } from "lucide-react";
import logo from '../assets/logo.png';

function Footer(){
    return (
        <footer className="bg-black flex md:flex-row flex-col items-center justify-between" >
            <img src={logo} alt="my personal logo"  className="w-32 h-32 rounded-full" />
            <div className="flex text-purple-400  gap-6">
                <a href="https://www.facebook.com/share/17gMMJNHhP/" target="_blank" rel="noopener nooreferrer">
                    <Facebook size={30}  />
                </a>
                <a href="https://x.com/tanko_fabrice" target="_blank" rel="noopener noreferrer">
                    <Twitter size={30}  />
                </a>
                <a href="https://github.com/Tanko99/" target="_blank" rel="noopener noreferrer">
                    <Github size={30}  />
                </a>
                <a href="https://www.linkedin.com/in/tanko-fabrice-042735253/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={30}  />
                </a>
            </div>
            <p className="text-sm text-gray-200 text-center md:text-right">
                &copy; {new Date().getFullYear()} <em>Tanko Fabrice. All rights reserved.</em>
             </p>
        </footer>
    );
}

export default Footer;