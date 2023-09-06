import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Projects } from "../../components/Project";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-900 border-y-2 border-gray-700">
        <Main />
      </div>
      <div className="bg-gray-900 py-12">
        <Projects />
      </div>
      <div className="bg-gray-900 border-t-2 border-gray-700">
        <Footer />
      </div>
    </>
  );
};
