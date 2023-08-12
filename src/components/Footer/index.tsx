import { useEffect, useState } from "react";

export const Footer = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/https://masud-biggie.vercel.app/visits")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your data structure has a 'count' property
        setViewCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
