export const Hero = () => {
    return (
        <>
            <section className="my-4 flex flex-col items-center lg:flex-row lg:h-[500px]">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl p-2 pr-3">
                        "Crafting Digital Solutions: Explore the Innovations in a Software Engineer's Portfolio"
                    </h1>
                    <a
                        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHFJrKvSCHrWpDqktdWxXTnSJSGKNdtClFXpXTDXCLgkRkgqrgFqsffqWswkXTRjCKddq"
                        className="inline-block bg-purple-900 rounded-lg my-4 text-xl px-[4rem] py-4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Work with me
                    </a>
                </div>
                <div className="flex-1 w-full py-2">
                    <h4 className="font-bold text-xl">Technologies / Languages</h4>
                    <div className="text-gray-900 flex flex-wrap justify-between gap-3 lg:max-w-[400px] my-6">
                        <button className="p-4 bg-white rounded-lg">Nodejs</button>
                        <button className="p-4 bg-white rounded-lg">JavaScript</button>
                        <button className="p-4 bg-white rounded-lg">TypeScript</button>
                        <button className="p-4 bg-white rounded-lg">React</button>
                        <button className="p-4 bg-white rounded-lg">Java</button>
                    </div>
                </div>
            </section>
        </>
    );
};
