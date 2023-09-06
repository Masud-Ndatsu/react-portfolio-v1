import { FiExternalLink } from "react-icons/fi";
import opspad from "../../assets/projects/opspad.png";
import storeAdmin from "../../assets/projects/store-admin.png";

export const Projects = () => {
  return (
    <>
      <article className="bg-gray-900 text-white py-6 max-w-[1200px] m-auto">
        <h2 className="p-4 font-bold text-3xl">Projects</h2>
        <div className="my-2 p-4  grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-md border p-2 border-gray-300">
            <img src={opspad} alt="" className="w-full h-64 object-cover" />
            <div>
              This is a platform that enables server relalted professionals to
              monitor different server logs on their mobile phones.
            </div>
            <div className="flex justify-between">
              <span className="text-green-400">Live</span>
              <a
                href="https://opspad-theta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="rounded-md border border-gray-300 p-2 ">
            <img src={storeAdmin} alt="" className="w-full h-64" />
            <div>
              This is a B2B ecommerce platform that allows user to make payments
              through their wallet accounts.
            </div>
            <div className="flex justify-between">
              <span className="text-green-400">Live</span>
              <a
                href="https://store-reload-landing-page.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
