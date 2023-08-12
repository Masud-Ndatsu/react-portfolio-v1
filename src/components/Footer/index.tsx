import { useEffect, useState } from "react";
import countapi from "countapi-js";

export const Footer = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    countapi
      .visits(
        "https://api.countapi.xyz/hit/https://masud-biggie.vercel.app/visits"
      )
      .then((result) => {
        console.log(result);
        setViewCount(result.value);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <footer className="text-white p-4 py-8 max-w-[1200px] m-auto">
      <>
        <div className="text-center">
          <h1 className="text-xl">
            &#169; {new Date().getFullYear()} Masud Ndatsu
          </h1>
          <p>Site stats - {viewCount ?? 0} views</p>
        </div>
      </>
    </footer>
  );
};
