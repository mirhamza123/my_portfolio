import React from "react";
import { useTranslation } from "react-i18next";
import project1 from "./images/project1.png";
import calculator from "./images/calculator.png";
import keyboard from "./images/keyboard.png"; // Ensure this image exists in your project

function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 md:text-4xl">
              {t('projects.title')}
            </h2>
            <p className="h-1 mb-4 w-20 mx-auto bg-blue-500"></p>
          </div>
          {""}
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className=" group relative overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-48 overflow-hidden group-hover:scale-105">
                <img
                  src={project1}
                  alt=""
                  srcset=""
                  className="h-full w-full  transition-transform duration-500  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title  p-6">
                <h3 className="text-white text-xl font-bold mb-2">{t('projects.easyBank.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('projects.easyBank.description')}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    React
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Node.js
                  </span>
                </div>
                <button class="  h-10 bg-black hover:bg-blue-500/10 text-blue-400 font-semibold hover:text-blue-300 py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
                  <a href="https://mirhamza123.github.io/EasyBank/">
                    {t('projects.easyBank.viewProject')}
                  </a>
                </button>
              </div>
            </div>
            {/*  */}
            <div className=" group relative overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-48 overflow-hidden group-hover:scale-105">
                <img
                  src={calculator}
                  alt=""
                  srcset=""
                  className="h-full w-full  transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title  p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {t('projects.calculator.title')}
                </h3>
                <p className="text-gray-300 mb-4">
                  {t('projects.calculator.description')}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    React
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Node.js
                  </span>
                </div>
                <button class="  h-10 bg-black hover:bg-blue-500/10 text-blue-400 font-semibold hover:text-blue-300 py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
                  <a href="https://calculator-eta-pearl.vercel.app/">View Project</a> 
                </button>
              </div>
            </div>
            {/*  */}
            <div className=" group relative overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-48 overflow-hidden group-hover:scale-105">
                <img
                  src={keyboard}
                  alt=""
                  className="h-full w-full  transition-transform duration-500  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title  p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {t('projects.keyboard.title')}
                </h3>
                <p className="text-gray-300 mb-4">
                  {t('projects.keyboard.description')}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    React
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Node.js
                  </span>
                </div>
                <button class="h-10 bg-black hover:bg-blue-500/10 text-blue-400 font-semibold hover:text-blue-300 py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
                  <a href="https://mirhamza123.github.io/keyboard-Events-project/">
                    {t('projects.keyboard.viewProject')}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
