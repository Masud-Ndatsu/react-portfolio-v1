import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Projects } from "../../components/Project";
import { SkillComp } from "../../components/SkillComp";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-purple-300 ">
        <Main />
      </div>{" "}
      <div className="bg-gray-900">
        <SkillComp />
        <Projects />
      </div>
      <div className="bg-gray-800">
        <Footer />
      </div>
    </>
  );
};
