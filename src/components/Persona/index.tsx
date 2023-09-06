import photo from "../../assets/masud.jpg";

export const Persona = () => {
  return (
    <div className="border-y-4 pb-12 md:px-6 text-white my-6 max-w-[1200px] m-auto">
      <h1 className="text-3xl font-bold my-4 pb-6">About Me</h1>
      <div className="md:flex md:items-center md:gap-8">
        <div className="w-80 h-80  m-auto md:flex-1 pr-4 pb-4 md:max-w-[400px] border-r-4 border-b-4">
          <img
            className="h-full w-full object-cover "
            src={photo}
            alt="My Photo"
          />
        </div>
        <div className="md:flex-1">
          <h1 className="text-xl my-4 sm:text-left">Hi, My Name is</h1>

          <h1 className="text-3xl my-4 sm:text-left">Mas'ud Ndatsu</h1>

          <p className="my-4">
            A result-oriented and innovative software engineer with a passion
            for developing highly-scalable and performant web applications.
            Skilled in backend development, RESTful API design, database
            management, and efficient coding practices. Proven ability to
            collaborate in teams and communicate technical concepts effectively.
          </p>
          <p>
            As a result of been persistent and consistent, I was even certified
            as one of the top 300 participants globally in an internship program
            with over 11,000 participants.
          </p>
        </div>
      </div>
    </div>
  );
};
