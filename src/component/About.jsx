import React from "react";
import { useTranslation } from "react-i18next";
import code from "./images/code.jpg"; // Ensure this image exists in your project
// Adjust the path as necessary

function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="bg-gray-900 py-20">
        <div className="mx-auto py-4">
          <div className=" mb-12 text-center opecity-1 transform-none ">
            <h2 className="mb-2 text-white text-3xl font-bold md:text-4xl">
              {t('about.title')}
            </h2>
            <div className="h-1 w-20 mx-auto bg-blue-500"></div>
          </div>
          {/* main div image and about */}
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="w-full md:w-1/2  transform-none">
              <div className="group relative h-80 w-[90%] overflow-hidden m-auto rounded-2xl shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${code})` }}
                ></div>
                <div className="  absolute inset-0 flex items-center justify-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <span class="text-5xl font-bold text-white">3+</span>
                    <div class="absolute -inset-1 animate-spin-slow rounded-full border-2 border-dashed border-white/30"></div>
                  </div>
                </div>
                <div class="absolute bottom-0 w-full bg-black/30 p-4 text-center backdrop-blur-md">
                  <p class="text-lg font-semibold text-white">
                    {t('about.experience')}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-white p-2">
              <h3 className="text-2xl font-bold  text-blue-400 mb-4 ">
                {t('about.subtitle')}
              </h3>
              <p className="mb-6  text-gray-300 text-lg leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="mb-6  text-gray-300 text-lg leading-relaxed">
                {t('about.description2')}
              </p>
              <div class="mt-8 flex flex-wrap gap-3">
                <span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                  {t('about.skills.problemSolver')}
                </span>
                <span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                  {t('about.skills.creativeThinker')}
                </span>
                <span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                  {t('about.skills.teamPlayer')}
                </span>
                <span class="rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
                  {t('about.skills.detailOriented')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
