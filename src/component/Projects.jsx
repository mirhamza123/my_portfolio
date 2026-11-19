import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import project1 from "./images/project1.png";
import calculator from "./images/calculator.png";
import keyboard from "./images/keyboard.png"; // Ensure this image exists in your project
import doctor from "./images/doctor.png"; // Ensure this image exists in your project
import helpdesk from "./images/helpdesk.png"; // Ensure this image exists in your project
import inventory from "./images/inventory.png"; // Ensure this image exists in your project

function Projects() {
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 md:text-4xl">
              {t("projects.title")}
            </h2>
            <p className="h-1 mb-4 w-20 mx-auto bg-blue-500"></p>
          </div>
          {""}
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* doctor apppointment */}
            <div className=" group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-40 overflow-hidden group-hover:scale-105">
                <img
                  src={doctor}
                  className="h-full w-full  transition-transform duration-500  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title flex flex-1 flex-col p-4">
                <h3 className="text-white text-xl font-bold mb-1">
                  {t("projects.doctor.title")}
                </h3>
                <p className="text-gray-300 mb-3">
                  {t("projects.doctor.description")}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
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
                <a
                  href="https://doctor-appointment-project-mu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex h-10 items-center justify-center rounded border border-blue-500 bg-black px-4 py-2 font-semibold text-blue-400 hover:border-transparent hover:bg-blue-500/10 hover:text-blue-300 cursor-pointer"
                >
                  {t("projects.doctor.viewProject")}
                </a>
              </div>
            </div>
            {/* */}
            {/* helpdesk */}
            <div className=" group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-40 overflow-hidden group-hover:scale-105">
                <img
                  src={helpdesk}
                  alt=""
                  srcset=""
                  className="h-full w-full  transition-transform duration-500  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title flex flex-1 flex-col p-4">
                <h3 className="text-white text-xl font-bold mb-1">
                  {t("projects.helpdesk.title")}
                </h3>
                <p className="text-gray-300 mb-3">
                  {t("projects.helpdesk.description")}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    NEXT JS
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                    Node.js
                  </span>
                </div>
                <a
                  href="https://helpdesk-ten-tau.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex h-10 items-center justify-center rounded border border-blue-500 bg-black px-4 py-2 font-semibold text-blue-400 hover:border-transparent hover:bg-blue-500/10 hover:text-blue-300 cursor-pointer"
                >
                  {t("projects.helpdesk.viewProject")}
                </a>
              </div>
            </div>
            {/*  */}
            {/* inventory-system  */}
            <div className=" group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-40 overflow-hidden group-hover:scale-105">
                <img
                  src={inventory}
                  alt=""
                  srcset=""
                  className="h-full w-full  transition-transform duration-500  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title flex flex-1 flex-col p-4">
                <h3 className="text-white text-xl font-bold mb-1">
                  {t("projects.inventory.title")}
                </h3>
                <p className="text-gray-300 mb-3">
                  {t("projects.inventory.description")}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
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
                <a
                  href="https://inventory-system-frontend-ivory.vercel.app/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex h-10 items-center justify-center rounded border border-blue-500 bg-black px-4 py-2 font-semibold text-blue-400 hover:border-transparent hover:bg-blue-500/10 hover:text-blue-300 cursor-pointer"
                >
                  {t("projects.inventory.viewProject")}
                </a>
              </div>
            </div>
            {/*  */}
            {showAllProjects && <>
            {/*easyBank  */}
            <div className="project-card-reveal group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-40 overflow-hidden group-hover:scale-105">
                <img
                  src={project1}
                  alt=""
                  srcset=""
                  className="h-full w-full  transition-transform duration-500  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title flex flex-1 flex-col p-4">
                <h3 className="text-white text-xl font-bold mb-1">
                  {t("projects.easyBank.title")}
                </h3>
                <p className="text-gray-300 mb-3">
                  {t("projects.easyBank.description")}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
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
                <a
                  href="https://mirhamza123.github.io/EasyBank/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex h-10 items-center justify-center rounded border border-blue-500 bg-black px-4 py-2 font-semibold text-blue-400 hover:border-transparent hover:bg-blue-500/10 hover:text-blue-300 cursor-pointer"
                >
                  {t("projects.easyBank.viewProject")}
                </a>
              </div>
            </div>
            {/* */}
            <div className="project-card-reveal group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-40 overflow-hidden group-hover:scale-105">
                <img
                  src={calculator}
                  alt=""
                  srcset=""
                  className="h-full w-full  transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title flex flex-1 flex-col p-4">
                <h3 className="text-white text-xl font-bold mb-1">
                  {t("projects.calculator.title")}
                </h3>
                <p className="text-gray-300 mb-3">
                  {t("projects.calculator.description")}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
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
                <a
                  href="https://calculator-eta-pearl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex h-10 items-center justify-center rounded border border-blue-500 bg-black px-4 py-2 font-semibold text-blue-400 hover:border-transparent hover:bg-blue-500/10 hover:text-blue-300 cursor-pointer"
                >
                  View Project
                </a>
              </div>
            </div>
            {/*  */}
            <div className="project-card-reveal group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-800   transition-all duration-300 ">
              <div className="image relative h-40 overflow-hidden group-hover:scale-105">
                <img
                  src={keyboard}
                  alt=""
                  className="h-full w-full  transition-transform duration-500  object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="title flex flex-1 flex-col p-4">
                <h3 className="text-white text-xl font-bold mb-1">
                  {t("projects.keyboard.title")}
                </h3>
                <p className="text-gray-300 mb-3">
                  {t("projects.keyboard.description")}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
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
                <a
                  href="https://mirhamza123.github.io/keyboard-Events-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex h-10 items-center justify-center rounded border border-blue-500 bg-black px-4 py-2 font-semibold text-blue-400 hover:border-transparent hover:bg-blue-500/10 hover:text-blue-300 cursor-pointer"
                >
                  {t("projects.keyboard.viewProject")}
                </a>
              </div>
            </div>
            </>}
            </div>
            {!showAllProjects && (
              <button
                type="button"
                onClick={() => setShowAllProjects(true)}
                className="mx-auto mt-8 block h-10 rounded border border-blue-500 bg-black px-4 py-2 font-semibold text-blue-400 transition-colors hover:border-transparent hover:bg-blue-500/10 hover:text-blue-300"
              >
                {t("projects.seeMore")}
              </button>
            )}
          </div>
      </section>
    </>
  );
}

export default Projects;
