import React from "react";
import { useTranslation } from "react-i18next";
import html from "./images/html.svg";
import css from "./images/css.svg";
import bootstrap from "./images/boostrap.svg";
import tailwind from "./images/tailwind.svg";
import javascript from "./images/javascrit.svg";
import express from "./images/express.svg";
import nodejs from "./images/node.js.svg";
import postman from "./images/postman.svg";
import firebase from "./images/firebase.svg";
import framer from "./images/framer.svg";
import git from "./images/git-plain.svg";
import github from "./images/github.png";
import nextjs from "./images/next.js.svg";
import typescript from "./images/typescript.svg";

function Tools() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-20 bg-black">
        <div className=" mx-auto px-4">
          {/* tools title */}
          <div className="text-center mb-12 text-white transform-none">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl ">
              {t('tools.title')}
            </h2>
            <div className=" m-auto h-1 w-20 bg-blue-500"></div>
            <p className=" mt-4 text-lg text-gray-300">
              {t('tools.description')}
            </p>
          </div>
          {/* tools decrition */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#E34f26" }}
              >
                <img
                  src={html}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">HTML</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105 ">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#ffff" }}
              >
                <img
                  src={css}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">CSS</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#795283" }}
              >
                <img
                  src={bootstrap}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Boostrap</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  src={tailwind}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">TailwindL</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#F7DF1E" }}
              >
                <img
                  src={javascript}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">javascrit</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  src={express}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Express js</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  src={nodejs}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Node js</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#FF6C37" }}
              >
                <img
                  src={postman}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Postman</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#FFCA28" }}
              >
                <img
                  src={firebase}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Firebase</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  src={framer}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">
                Framer motion
              </h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  src={git}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Git</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  src={github}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Github</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}
            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#fff" }}
              >
                <img
                  src={nextjs}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Next js</h3>
              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            {/*  */}

            <div className=" group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 text-center shadow-lg transition-all hover:shadow-xl opecity-1 tansform-none hover:scale-105">
              <div
                className=" relative mb-3 flex h-16 w-16 items-center justify-center rounded-full  bg-gray-900 p-3 "
                style={{ backgroundColor: "#007ACC" }}
              >
                <img
                  src={typescript}
                  alt=""
                  className="h-8 w-8"
                  width="32"
                  height="32"
                />
              </div>
              <h3 className=" TEXT-SM font-medium text-gray-200">Typescript</h3>

              <div class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tools;
