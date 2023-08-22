import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Projects } from "../../components/Project";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="g-gray-900">
        <Main />
      </div>
      <div className="bg-gray-900">
        <Projects />
      </div>
      <div className="bg-purple-600">
        <Footer />
      </div>
    </>
  );
};
