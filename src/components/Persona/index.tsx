import photo from "../../assets/masud.jpg";

export const Persona = () => {
  return (
    <div className="border-y-4 py-12 md:px-6 text-white my-6 md:flex md:items-center md:gap-8 max-w-[1200px] m-auto">
      <div className="w-80 h-80  m-auto md:flex-1 pr-4 pb-4 md:max-w-[400px] border-r-4 border-b-4">
        <img
          className="h-full w-full object-cover "
          src={photo}
          alt="My Photo"
        />
      </div>
      <div className="text-center md:flex-1">
        <p className="text-xl my-4 text-center sm:text-left">
          Types of projects I have worked on
        </p>
        <div className="text-gray-900 flex flex-wrap gap-2 justify-center sm:justify-start py-4">
          <button className="py-4 px-8 bg-yellow-200 rounded-lg">B2B</button>
          <button className="py-4 px-8 bg-green-300 rounded-lg">SaaS</button>
          <button className="py-4 px-8 bg-white rounded-lg">Mobile app</button>
          <button className="py-4 px-8 bg-white rounded-lg">Websites</button>
        </div>
        <p className="text-xl text-center sm:text-left">
          Some companies I have worked with
        </p>
        <div className="flex gap-2 my-6">
          <div className="max-w-48 w-full h-20 rounded bg-red-300"></div>
          <div className="max-w-48 w-full h-20 rounded bg-red-300"></div>
          <div className="max-w-48 w-full h-20 rounded bg-red-300"></div>
        </div>
      </div>
    </div>
  );
};
