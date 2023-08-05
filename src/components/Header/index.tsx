import { Hero } from "../Hero";
import { Navbar } from "../Navbar";
import { Persona } from "../Persona";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white h-full p-4 md:px-6">
      <Navbar />
      <div className="flex gap-4 my-3 font-mono max-w-[1200px] m-auto">
        <a href="#" className="text-red-500" target="_blank">
          Home
        </a>
        <a href="#" target="_blank">
          My Github
        </a>
      </div>
      <Hero />
      <Persona />
    </header>
  );
};
