import React from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <>
      <section className="">
        <div className="py-20 bg-gray-900">
          <div className="mx-auto px-4">
            <div className="mb-12 text-center  tansform-none">
              <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl ">
                {t('services.title')}
              </h2>
              <div className="m-auto h-1 w-20 bg-blue-500"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative  bg-gray-800 overflow-hidden rounded-xl p-8 shadow-xl tansition-all duration-300">
                <div className="mb-6 flex h-16  w-16 bg-blue-500/20 items-center justify-center rounded-lg p-3 tansition-all duration-300 group-hover:bg-blue-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-8 w-8 text-blue-400"
                  >
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z M22 17.65V9.3M2 9.3v8.36a1 1 0 0 0 .6.91l8.57 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 .59-.92V9.29 M4.01 13 12 16.5 19.99 13"></path>
                  </svg>
                </div>
                <h3 class="mb-4 text-xl font-bold text-white">
                  {t('services.fullStack.title')}
                </h3>
                <p className="text-gray-300">
                  {t('services.fullStack.description')}
                </p>
                <div class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
                <div class="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
                <div class="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
              <div className="group relative  bg-gray-800 overflow-hidden rounded-xl p-8 shadow-xl tansition-all duration-300">
                <div className="mb-6 flex h-16  w-16 bg-blue-500/20 items-center justify-center rounded-lg p-3 tansition-all duration-300 group-hover:bg-blue-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-8 w-8 text-blue-400"
                  >
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z M3 9h18 M9 21V9"></path>
                  </svg>
                </div>
                <h3 class="mb-4 text-xl font-bold text-white">
                  {t('services.frontEnd.title')}
                </h3>
                <p className="text-gray-300">
                  {t('services.frontEnd.description')}
                </p>
                <div class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
                <div class="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
                <div class="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
              <div className="group relative  bg-gray-800 overflow-hidden rounded-xl p-8 shadow-xl tansition-all duration-300">
                <div className="mb-6 flex h-16  w-16 bg-blue-500/20 items-center justify-center rounded-lg p-3 tansition-all duration-300 group-hover:bg-blue-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-8 w-8 text-blue-400"
                  >
                    <path d="M5 12H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3 M5 4v16 M9 4h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9 M9 12v8 M9 12h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9"></path>
                  </svg>
                </div>
                <h3 class="mb-4 text-xl font-bold text-white">
                  {t('services.backEnd.title')}
                </h3>
                <p className="text-gray-300">
                  {t('services.backEnd.description')}
                </p>
                <div class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
                <div class="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10"></div>
                <div class="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
