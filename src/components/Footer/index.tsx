export const Footer = () => {
  return (
    <footer className="text-white p-4 py-8 max-w-[1200px] m-auto">
      <>
        <div className="text-center">
          <h1 className="text-xl">
            &#169; {new Date().getFullYear()} Masud Ndatsu
          </h1>
          <p>Site stats - views</p>
        </div>
      </>
    </footer>
  );
};
