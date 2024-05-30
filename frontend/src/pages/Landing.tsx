import { FaGithub } from "react-icons/fa";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import image from "../images/image.png";

export default function Landing() {
  const navigate = useNavigate();
  const githubHandler = () => {
    window.open("https://github.com/Rudra-Sankha-Sinhamahapatra/Stake");
  };
  const singin = () => {
    navigate("/signin");
  };

  const singup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="text-white flex justify-between px-6 md:px-12 lg:px-[25%] py-8 shadow-xl relative select-none">
          <div className="text-4xl md:text-6xl flex text-[#779556] ">
            <span className="mt-2 md:mt-4 text-xl md:text-2xl font-semibold text-white">
              Stake
            </span>
          </div>
          <div className="text-xl md:text-2xl mt-2 md:mt-4 font-semibold flex">
            <span className="pr-4 md:pr-14 hover:text-[#779556] transition-all cursor-pointer hover:underline">
              Play Online
            </span>
            <span
              onClick={singin}
              className="hover:text-[#779556] transition-all cursor-pointer hover:underline pr-4 md:pr-14"
            >
              Login
            </span>
            <span
              onClick={singup}
              className="hover:text-[#779556] transition-all cursor-pointer hover:underline"
            >
              Signup
            </span>
            <span
              onClick={githubHandler}
              className="text-2xl md:text-4xl hover:text-gray-400 cursor-pointer px-4 md:px-10"
            >
              <FaGithub />
            </span>
          </div>
        </div>
        <div className="mt-12 md:mt-28 flex flex-col md:flex-row mx-6 md:mx-[20%] relative select-none">
          <div className="mb-20">
            <h1 className="text-white text-start text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Ultimate{" "}
              <span className="block md:inline text-6xl md:text-8xl">
                STAKE
              </span>{" "}
              bet Destination
            </h1>
            <p className="text-white text-start text-base md:text-xl  pt-4 md:pr-32">
              Stake is your ultimate hub for mastering the exciting world of
              online gambling. Whether you're a novice eager to learn the basics
              or an experienced player looking to refine your strategies, we've
              got you covered.
            </p>
            <Button
              onClick={() => {
                navigate("/game");
              }}
              className="mt-4 md:mt-6 mb-10"
            >
              Play
            </Button>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              width={1450}
              style={{ height: "200px" }}
              className="rounded-2xl mx-auto md:ml-20"
              src={image}
            />
          </div>
        </div>
      </div>
    </>
  );
}
