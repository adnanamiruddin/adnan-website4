import HeroImage from "../assets/images/hero.jpg";
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            My Name is Muh. Adnan Putra Amiruddin
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I am the person who always liked coding and other things about
            information and technology. I always help my friend to finish their
            task especially coding subject, I help by explain my program to them
            step by step until they understand. I have an interest in coding,
            web, programmer, and anything about information, system and
            technology.
          </p>

          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              My Projects
              <span className="group-hover:rotate-90 duration-500">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Adnan"
            className="rounded-2xl mx-auto "
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
