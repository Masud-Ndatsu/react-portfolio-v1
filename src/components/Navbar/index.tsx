import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Navbar = () => {
  return (
    <nav className="flex gap-4 items-center justify-between max-w-[1200px] m-auto">
      <h3 className="text-2xl font-bold">Masud Ndatsu</h3>
      <div className="flex items-center gap-2">
        <button className="py-4 px-10 bg-white text-purple-950 rounded-lg hidden sm:inline-block shadow">
          My Resume
        </button>
        <button className="py-4 px-4 sm:px-10 bg-purple-800 rounded-lg shadow">
          Send an Email
        </button>
        <div className="text-3xl sm:hidden">
          <HiOutlineMenuAlt4 />
        </div>
      </div>
    </nav>
  );
};
