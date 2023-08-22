import blogApi from "../../assets/projects/blog.png";
import portfolio from "../../assets/projects/porfolio.png";

export const Projects = () => {
  return (
    <>
      <article className="bg-gray-900 text-white py-6 max-w-[1200px] m-auto">
        <h2 className="p-4 font-bold text-3xl">Personal Projects</h2>
        <div className="my-2 p-4  grid sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="h-64 rounded relative">
            <img src={blogApi} alt="" className="w-full h-full" />
            <a
              href="https://blog-ts-api.onrender.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 right-1/2 translate-x-1/2 bg-purple-900 p-2 hover:scale-x-[1.1] transition-all"
            >
              CLICK
            </a>
          </div>
          <div className="h-64 rounded relative">
            <img src={portfolio} alt="" className="w-full h-full" />
            <a
              href="https://masud-biggie.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 right-1/2 translate-x-1/2 bg-purple-900 p-2 hover:scale-x-[1.1] transition-all"
            >
              CLICK
            </a>
          </div>
          {/* <div className="h-64 bg-green-700 rounded"></div>
          <div className="h-64 bg-green-700 rounded"></div> */}
        </div>
      </article>
    </>
  );
};
