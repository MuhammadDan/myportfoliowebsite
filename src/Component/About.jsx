import React from "react";
import { FaBirthdayCake, FaPhoneAlt, FaCity, FaEnvelope, FaUserGraduate } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div name="About" className="my-20 md:px-20 px-4 mx-auto container max-w-screen-2xl overflow-hidden">
        <h1 className="md:text-3xl text-lg font-bold mb-5">About Me</h1>
        <h3 className="md:text-base text-sm text-justify font-bold text-purple-600">
          Creating Websites with Passion and Precision!
        </h3>
        <p className="my-4 text-justify md:text-base text-sm">
          I'm Muhammad Daniyal Khan, a passionate web developer focused on creating dynamic, user-friendly websites. I thrive on tackling challenges across various domains. I love exploring new technologies, collaborating with others, and delivering impactful digital experiences.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {/* Left Column */}
          <div>
            <p className="flex items-center text-sm md:text-base gap-2">
              <FaBirthdayCake className="text-purple-600" />
              <strong>Birthday:</strong> 5 July 2003
            </p>
            <p className="flex items-center text-sm md:text-base gap-2">
              <FaPhoneAlt className="text-purple-600" />
              <strong>Phone:</strong> +923440567494
            </p>
            <p className="flex items-center text-sm md:text-base gap-2">
              <FaCity className="text-purple-600" />
              <strong>City:</strong> Karachi, Pakistan
            </p>
          </div>
          {/* Right Column */}
          <div>
            <p className="flex items-center text-sm md:text-base gap-2">
              <AiOutlineUser className="text-purple-600" />
              <strong>Age:</strong> 21
            </p>
            <p className="flex items-center text-sm md:text-base gap-2">
              <FaUserGraduate className="text-purple-600" />
              <strong>Degree:</strong> Bachelor
            </p>
            <p className="flex items-center text-sm md:text-base gap-2">
              <FaEnvelope className="text-purple-600" />
              <strong>Email:</strong>{" "}
              <a href="mailto:daniyalk154330@gmail.com" className="text-blue-500">
                daniyalk154330@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
