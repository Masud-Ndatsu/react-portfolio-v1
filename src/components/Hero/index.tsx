export const Hero = () => {
  return (
    <section className="py-8 grid  gap-4 items-center md:grid-cols-2 min-h-[350px] max-w-[1200px] m-auto">
      <div>
        <h2 className="text-3xl lg:text-5xl mb-10 md:max-w-[650px] lg:w-full tracking-wider">
          "Crafting Digital Solutions: Explore the Innovations in a Software
          Engineer's Portfolio"
        </h2>
        <button className="bg-purple-900 rounded-lg px-[3rem] py-4">
          Work with me
        </button>
      </div>
      <div>
        <p className="text-lg m-2">2+ years work experience</p>
        <h4 className="font-bold text-xl">Languages</h4>
        <div className="text-gray-900 flex flex-wrap gap-2 my-6">
          <button className="p-4 bg-white rounded-lg">Nodejs</button>
          <button className="p-4 bg-white rounded-lg">JavaScript</button>
          <button className="p-4 bg-white rounded-lg">TypeScript</button>
          <button className="p-4 bg-white rounded-lg">SQL</button>
          <button className="p-4 bg-white rounded-lg">HTML</button>
          <button className="p-4 bg-white rounded-lg">TypeScript</button>
        </div>
      </div>
    </section>
  );
};
