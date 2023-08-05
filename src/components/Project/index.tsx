export const Projects = () => {
  return (
    <>
      <article className="bg-gray-900 text-white py-6 max-w-[1200px] m-auto">
        <h2 className="p-4 text-xl">Personal projects</h2>
        <div className="my-2 p-4  grid sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="h-64 bg-green-700 rounded"></div>
          <div className="h-64 bg-green-700 rounded"></div>
          <div className="h-64 bg-green-700 rounded"></div>
          <div className="h-64 bg-green-700 rounded"></div>
        </div>
      </article>
    </>
  );
};
