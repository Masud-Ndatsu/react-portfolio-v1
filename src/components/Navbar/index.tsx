import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Navbar = () => {
  return (
    <nav className="flex gap-4 items-center justify-between max-w-[1200px] m-auto">
      <h3 className="text-2xl font-bold">Masud Ndatsu</h3>
      <div className="flex items-center gap-2">
        <a
          href="https://drive.google.com/file/d/1fzE3u5JFam0P2XacuSsNVhtfD7kBLpiv/view?usp=sharing"
          className="py-4 px-10 bg-white text-purple-950 rounded-lg hidden sm:inline-block shadow"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHFJrKvSCHrWpDqktdWxXTnSJSGKNdtClFXpXTDXCLgkRkgqrgFqsffqWswkXTRjCKddq"
          className="py-4 px-4 sm:px-10 bg-purple-800 rounded-lg shadow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send an Email
        </a>
        <div className="text-3xl sm:hidden">
          <HiOutlineMenuAlt4 />
        </div>
      </div>
    </nav>
  );
};
