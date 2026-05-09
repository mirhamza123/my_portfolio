import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import Typed from "typed.js";
import "./Hero.css";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";
import main from "./images/main.svg";


function Hero() {
  const el = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const options = {
      strings: [
        "Front End Developer",
        "Back End Developer",
        "MERN Stack Developer",
      ],
      startDelay: 500,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      showCursor: false,
      smartBackspace: true,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="  min-h-screen bg-black text-white">
        <div className="header relative h-screen w-full bg-center bg-cover  bg-no-repeat  bg-cover bg-[url('/cloud.jpg')] opacity-[0.9]">
          <main className="   mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 md:mt-0 md:flex-row md:justify-between lg:px-[50px]">
            <div className="  sm:text-center lg:text-left ">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-white opacity-[1] transform-none">
                  Hi, I am Hamza Mir
                </span>
                <span
                  ref={el}
                  className=" z-0 block text-blue-500  lg:inline"
                ></span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                I am Front End/ Back End/Development <br />I am Currently
                working an a MERN Stack developer.
              </p>
              <div className="flex md:justify-start ">
                <a
                  href="https://github.com/mirhamza123?tab=repositories"
                  className=" mr-5 mt-8 cursor-pointer text-white transition-transform hover:scale-125 opacity-[0.9] transform-none"
                >
                  <img
                    src={github}
                    alt="github"
                    className="transition-all duration-300 hover:scale-125"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-mir-9126692b6/"
                  className=" mr-5 mt-8 cursor-pointer text-white transition-transform hover:scale-125 opacity-[0.9] transform-none"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="transition-all duration-300 hover:scale-125"
                  />
                </a>
                <a
                  href="mailto:mirh7169@gmail.com"
                  className=" mr-5 mt-8 cursor-pointer text-white transition-transform hover:scale-125 opacity-[0.9] transform-none"
                >
                  <img
                    src={email}
                    alt="email"
                    className="w-[60px]  transition-all duration-300 hover:scale-125"
                  />
                </a>
              </div>
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 ">
                <button 
                  onClick={scrollToContact}
                  className="cursor-pointer  inline-flex  items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                >
                  Get Started
                </button>
                <a href="">
                  <button className="cursor-pointer inline-flex  items-center justify-center gap-2 whitespace-nowrap text-sm font-medium  rounded-md border border-transparent bg-white px-5 py-3 text-base text-blue-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <img
              src={main}
              alt="image"
              className="md:w-3/6 hidden lg:block opacity-[1] translate-y-[40px]"
            />
          </main>
        </div>
      </main>
    </>
  );
}

export default Hero;
