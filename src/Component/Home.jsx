import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Daniyalpic from "../../src/assets/Dan1.jpg";
import DaniyalResume from "../../src/assets/Resume.pdf"

const Home = () => {
  return (
    <>
      <div name="Home" className="mt-16 px-5 md:px-20">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 md:mt-28 mt-12 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my World</span>
            <div className="flex space-x-2 text-lg md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Computer Scientist!", "Web Developer!", "Coder!"]}
                backSpeed={50}
                typeSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-base text-justify">
              I am a skilled and passionte web designer with experience in
              creating visually appealing and user-friendly websites.
            </p>
            <br />
            <a href={DaniyalResume} download="Daniyal_Resume.pdf"><button className="bg-purple-800 p-3 w-45 md:w-60 flex justify-center items-center gap-3 h-9 rounded-md text-white">
              Download Resume <FaDownload />
            </button></a>
            <br />
            <br />
            {/*Social media icon */}
            <div className="flex justify-between">
              <div>
                <h1 className="">Available on</h1>
                <ul className="flex space-x-3 mt-2">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookSquare className="md:text-2xl text-xl hover:scale-110 duration-200  cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/daniyal-khan-735a88262/"
                      target="_blank"
                    >
                      <FaLinkedin className="md:text-2xl text-xl hover:scale-110 duration-200  cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="">Currently Working on</h1>
                <div className="flex space-x-3 mt-2">
                  <FaReact className="md:text-2xl text-xl hover:scale-110 duration-200  cursor-pointer" />
                  <RiNextjsLine className="md:text-2xl text-xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaNodeJs className="md:text-2xl text-xl hover:scale-110 duration-200 cursor-pointer" />
                  <DiMongodb className="md:text-2xl text-xl hover:scale-110 duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:mx-12 md:mt-16 mt-8  px-10 order-1">
            <img
              src={Daniyalpic}
              className="rounded-full md:h-[350px] md:w-[320px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
};

export default Home;
