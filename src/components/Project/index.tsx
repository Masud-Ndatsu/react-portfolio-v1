import { FiExternalLink } from "react-icons/fi";
import opspad from "../../assets/projects/opspad.png";
import storeAdmin from "../../assets/projects/store-admin.png";
import { Title } from "../../common";

export const Projects = () => {
    return (
        <>
            <article className="bg-gray-900 text-white py-6 m-auto">
                <Title>Projects</Title>
                <div className="my-2 p-4  grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="rounded-md border p-2 border-gray-300">
                        <img src={opspad} alt="" className="w-full h-64 object-cover" />
                        <div>
                            This is a platform that enables professionals ( e.g Devops) to monitor different server logs
                            on their mobile phones.
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
                            This is a B2B ecommerce platform that allows users (Retailers) to purchase their goods
                            directly from manufacturers and also make their payments through their e-wallets.
                        </div>
                        <div className="flex justify-between">
                            <span className="text-green-400">Live</span>
                            <a
                                href="https://storereload-landing-page.onrender.com/"
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
