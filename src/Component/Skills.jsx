import React, { useEffect, useState } from "react";

const skillsData = [
  { name: "HTML", Level: 90 },
  { name: "CSS", Level: 90 },
  { name: "JavaScript", Level: 75 },
  { name: "React", Level: 80 },
  { name: "Tailwind", Level: 60 },
];

const Skills = () => {
  const [isVisible, setisVisible] = useState(false);

   useEffect(() => {
     const observer = new IntersectionObserver(
        (enteries)=>{
            enteries.forEach((entry)=>{
                if (entry.isIntersecting){
                    setisVisible(true);
                }
            });
        },
        {threshold: 0.2}
     );
     const section = document.getElementById("skills-section");
     if(section) observer.observe(section);
     return () => {
       if (section) observer.unobserve(section);
     };
   }, []);
   
  return (
    <>
      <div
        id="skills-section"
        className="my-20 px-4 md:mx-16 mx-auto max-w-screen-lg overflow-hidden"
      >
        <h1 className="text-xl md:text-3xl font-bold mb-5">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-11">
          {skillsData.map(({ name, Level }, index) => (
            <div key={index}>
              <p className="text-sm md:text-base font-semibold mb-1 ">{name}</p>
              <div className="bg-gray-200 rounded-full h-4 relative">
                <div
                  className="bg-blue-500 h-4  rounded-full transition-all duration-1000 ease-out "
                  style={{ width: isVisible ? `${Level}%` : "0%", }}
                ></div>
                <span
                  className="absolute right-0 bottom-3  text-xs text-gray-700 transform translate-x-1/2 -translate-y-1/2"
                  style={{ visibility: isVisible ? "visible" : "hidden" }}
                >
                  {Level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
