import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import picture from '../assets/portfolio_pic.svg';

function Home(){
    return(
        <div className="font-poppins bg-black min-h-screen mx-auto sm:px-8 px-4 py-16">
        <div className=" gap-x-8 flex flex-col md:flex-row items-center justify-center text-gray-300 items-center w-full">
            <div className="max-w-md w-full md:w-1/2 h-auto mx-2 mt-8">
                <img src={picture} alt="portfolio illustrator" className="rounded-full" />
            </div>
            <div className="w-full md:w-1/2">
                <h1 className="md:text-5xl lg:text-6xl sm:text-3xl text-2xl  mt-6 font-bold md:text-left">Bringing Ideas to Life Through Code and Design</h1>
                <p className="md:text-xl sm:text-lg text-base mt-6 mb-4 font-semibold">Hi I'm <strong>Tanko Fabrice Ngala</strong>
                <em> a Frontend web developer and a cloud computing enthusiast passionate
                     about crafting interactive websites and seamless digital experience</em>
                </p>
                <Link to="/projects" className="flex items-center text-lg text-white font-bold px-4 py-2 mb-2 bg-purple-600 rounded-2xl transition hover:bg-purple-800">View my work</Link>
                <Link to="/contact" className="flex items-center text-lg text-white font-bold  gap-4 px-4 py-2 bg-purple-600 rounded-2xl transition hover:bg-purple-8000">
                <Mail className="w-5 h-5"/>
                Contact Me
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Home;