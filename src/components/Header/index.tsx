import { Link } from "react-router-dom";
import { Hero } from "../Hero";
import { Navbar } from "../Navbar";
import { Persona } from "../Persona";

export const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 md:px-6">
            <Navbar />
            <div className="flex gap-4 my-3 font-mono  m-auto">
                <Link to="/" className="text-red-500">
                    Home
                </Link>
                <a href="https://github.com/Masud-Ndatsu" target="_blank">
                    My Github
                </a>
            </div>
            <Hero />
            <Persona />
        </header>
    );
};
