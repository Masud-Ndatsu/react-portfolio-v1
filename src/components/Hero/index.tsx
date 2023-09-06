export const Hero = () => {
  return (
    <section className="py-8 grid  gap-4 items-center md:grid-cols-2 min-h-[350px] max-w-[1200px] m-auto">
      <div>
        <h2 className="text-3xl lg:text-5xl mb-10 md:max-w-[650px] lg:w-full tracking-wider">
          "Crafting Digital Solutions: Explore the Innovations in a Software
          Engineer's Portfolio"
        </h2>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHFJrKvSCHrWpDqktdWxXTnSJSGKNdtClFXpXTDXCLgkRkgqrgFqsffqWswkXTRjCKddq"
          className="bg-purple-900 rounded-lg px-[3rem] py-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work with me
        </a>
      </div>
      <div>
        <h4 className="font-bold text-xl">Technologies</h4>
        <div className="text-gray-900 flex flex-wrap gap-2 my-6">
          <button className="p-4 bg-white rounded-lg">Nodejs</button>
          <button className="p-4 bg-white rounded-lg">JavaScript</button>
          <button className="p-4 bg-white rounded-lg">TypeScript</button>
          <button className="p-4 bg-white rounded-lg">React</button>
          <button className="p-4 bg-white rounded-lg">Java</button>
        </div>
      </div>
    </section>
  );
};
