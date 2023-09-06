import { VscDebugAll } from "react-icons/vsc";
import { AiFillApi } from "react-icons/ai";
import { RiUserSettingsFill } from "react-icons/ri";

export const Main = () => {
  return (
    <main className="p-6 max-w-[1200px]  m-auto">
      <div className="border-2 border-gray-900 rounded-xl bg-white p-2">
        <h2 className="font-bold text-3xl">My Services</h2>
        <div className="grid sm:grid-cols-2  md:grid-cols-3  gap-2">
          <div className="py-2">
            <div className="h-80 w-full grid place-items-center bg-gray-900 rounded">
              <h1 className="text-8xl">
                <VscDebugAll className="text-white" />
              </h1>
            </div>
            <div>
              <h4 className="font-bold">Debugging</h4>
              <p>
                Debugging is the process of detecting and removing of existing
                and potential errors (bugs) in a software code that can cause it
                to behave unexpectedly or crash.
              </p>
            </div>
          </div>
          <div className="py-2">
            <div className="h-80 w-full grid place-items-center bg-gray-900 rounded">
              <h1 className="text-8xl">
                <RiUserSettingsFill className="text-white" />
              </h1>
            </div>
            <div>
              <h4 className="font-bold">Frontend Development</h4>
              <p>
                Front-end web development is the development of the graphical
                user interface of a website, through the use of HTML, CSS, and
                JavaScript, so that users can view and interact with that
                website.
              </p>
            </div>
          </div>
          <div className="py-2">
            <div className="h-80 w-full grid place-items-center bg-gray-900 rounded">
              <h1 className="text-8xl">
                <AiFillApi className="text-white" />
              </h1>
            </div>
            <div>
              <h4 className="font-bold">API Development</h4>
              <p>
                API (Application Programming Interface software) is a set of
                instructions, standards or requirements that enables a software
                or app to employ features/services of another app
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
