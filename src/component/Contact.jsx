// import React from "react";

// function Contact() {
//   function handle(evt) {
//     evt.preventDefault();
//     evt.target.reset();
//   }

//   return (
//     <>
//       <section className="py-20 bg-gray-900">
//         <div className="mx-auto px-4">
//           {/* title */}
//           <div className="mb-12 text-center">
//             <h2 className="mb-2 text-white text-3xl font-bold md:text-4xl">
//               Contact
//             </h2>
//             <div className="h-1 w-20 mx-auto bg-blue-500"></div>
//             <p className=" mt-4 text-lg text-white">Connect with me</p>
//             <p className="text-gray-400">
//               I'm always open to discussing new projects, creative ideas, or
//               opportunities to be part of your vision. Whether you have a
//               question, want to collaborate, or just want to say hi, feel free
//               to reach out!
//             </p>
//           </div>
//           {/* form */}
//           <div className=" flex flex-col gap-10 md:flex-row">
//             <div className=" w-full md:w-1/2">
//               <form
//                 className="bg-gray-800 p-8 rounded-lg  spacing-y-6"
//                 onSubmit={(e) => handle(e)}
//               >
//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-gray-300 font-medium text-sm mb-2"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 flex h-10 bg-gray-700  text-white rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500   "
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className=" block text-gray-300 font-medium text-sm mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 flex h-10 bg-gray-700  text-white rounded-md   focus:outline-none focus:ring-2 focus:ring-blue-500   "
//                     placeholder="Your Email"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="message"
//                     className="block text-gray-300 font-medium text-sm mb-2"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Your Message"
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300 cursor-pointer"
//                 >
//                   Send Message
//                 </button>
//                 <p className="text-center text-sm text-gray-400 mt-5">
//                   "Send me Email directly at"
//                   <a
//                     href="mailto:mirh7169@gmail.com"
//                     className="text-blue-400 hover:text-blue-300"
//                   >
//                     mirh7169@gmail.com
//                   </a>
//                 </p>
//               </form>
//             </div>

//             {/* form2 */}
//             <div className="w-full md:w-1/2">
//               <div className="relative overflow-hidden bg-gray-800 rounded-xl p-8 shadow-xl">
//                 <h3 className=" mb-4 text-white text-xl  font-bold">
//                   Contact information
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         class="h-5 w-5 text-blue-400"
//                       >
//                         <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
//                         <polyline points="15,9 18,9 18,11"></polyline>
//                         <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
//                         <line x1="6" x2="7" y1="10" y2="10"></line>
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 class="text-sm font-medium text-gray-400">Email</h4>
//                       <a
//                         href="mailto:mirh7169@gmail.com"
//                         class="text-blue-400 hover:text-blue-300"
//                       >
//                         mirh7169@gmail.com
//                       </a>
//                     </div>
//                   </div>
//                   <div class="flex items-start">
//                     <div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         class="h-5 w-5 text-blue-400"
//                       >
//                         <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//                         <circle cx="12" cy="10" r="3"></circle>
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 class="text-sm font-medium text-gray-400">Address</h4>
//                       <p class="text-white">
//                         hayatabad phase 4, Peshawar, Pakistan
//                       </p>
//                     </div>
//                   </div>
//                   <div>
//                     <h4 class="mb-3 text-sm font-medium text-gray-400">
//                       Social
//                     </h4>
//                     <div class="flex space-x-4">
//                       <a
//                         href="https://github.com/mirhamza123?tab=repositories"
//                         className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30 hover:text-blue-300"
//                         aria-label="GitHub"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           class="h-5 w-5"
//                         >
//                           <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
//                           <path d="M9 18c-4.51 2-5-2-7-2"></path>
//                         </svg>
//                       </a>

//                       <a
//                         href="https://www.linkedin.com/in/hamza-mir-9126692b6/"
//                         class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30 hover:text-blue-300"
//                         aria-label="LinkedIn"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           class="h-5 w-5"
//                         >
//                           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                           <rect width="4" height="12" x="2" y="9"></rect>
//                           <circle cx="4" cy="4" r="2"></circle>
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <footer class="bg-black py-8">
//         <div class="container mx-auto px-4 text-center">
//           <p class="text-gray-400">
//             Made in 2025 with{" "}
//             <span class="inline-block animate-pulse text-red-500">❤️</span> by
//             Hamza mir
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Contact;
import React, { useRef } from "react"; // 1. useRef add kiya
import emailjs from "@emailjs/browser"; // 2. EmailJS import kiya
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const { t } = useTranslation();
  const form = useRef(); // 3. Form reference banaya

  function handle(evt) {
    evt.preventDefault();

    // 4. EmailJS Sending Logic
    // In IDs ko apne EmailJS dashboard se replace karen
    emailjs.sendForm(
      'service_4enjwks', 
      'template_fbl89ng', 
      form.current, 
      'nQlrqzj6OtsU1HUHB'
    )
    .then((result) => {
        toast.success(t('notifications.messageSent'));
        evt.target.reset(); 
    }, (error) => {
        toast.error(t('notifications.messageError'));
    });
  }

  return (
    <>
      <section id="contact" className="py-20 bg-gray-900">
        <div className="mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-white text-3xl font-bold md:text-4xl">{t('contact.title')}</h2>
            <div className="h-1 w-20 mx-auto bg-blue-500"></div>
            <p className=" mt-4 text-lg text-white">{t('contact.subtitle')}</p>
            <p className="text-gray-400">
              {t('contact.description')}
            </p>
          </div>

          <div className=" flex flex-col gap-10 md:flex-row">
            <div className=" w-full md:w-1/2">
              {/* 5. form par ref={form} lagaya aur inputs ke 'name' set kiye */}
              <form
                ref={form}
                className="bg-gray-800 p-8 rounded-lg spacing-y-6"
                onSubmit={handle}
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 font-medium text-sm mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"  // Template variable se match karega
                    className="w-full px-3 py-2 flex h-10 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.name')}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className=" block text-gray-300 font-medium text-sm mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Template variable se match karega
                    className="w-full px-3 py-2 flex h-10 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.email')}
                    required
                  />
                </div>

                {/* Topic ke liye hidden field ya dynamic field (Aapke template mein 'title' tha) */}
                <input type="hidden" name="title" value="Portfolio Inquiry" />

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 font-medium text-sm mb-2">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message" // Template variable se match karega
                    rows="4"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.message')}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300 cursor-pointer"
                >
                  {t('contact.form.sendButton')}
                </button>
              </form>
            </div>

            {/* Baaki code (Contact Info) same rahega... */}
           <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden bg-gray-800 rounded-xl p-8 shadow-xl">
                <h3 className=" mb-4 text-white text-xl  font-bold">
                  {t('contact.info.title')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
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
                        class="h-5 w-5 text-blue-400"
                      >
                        <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                        <polyline points="15,9 18,9 18,11"></polyline>
                        <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                        <line x1="6" x2="7" y1="10" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-400">{t('contact.info.email')}</h4>
                      <a
                        href="mailto:mirh7169@gmail.com"
                        class="text-blue-400 hover:text-blue-300"
                      >
                        mirh7169@gmail.com
                      </a>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
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
                        class="h-5 w-5 text-blue-400"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-400">{t('contact.info.address')}</h4>
                      <p class="text-white">
                        hayatabad phase 4, Peshawar, Pakistan
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 class="mb-3 text-sm font-medium text-gray-400">
                      {t('contact.info.social')}
                    </h4>
                    <div class="flex space-x-4">
                      <a
                        href="https://github.com/mirhamza123?tab=repositories"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30 hover:text-blue-300"
                        aria-label="GitHub"
                      >
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
                          class="h-5 w-5"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/hamza-mir-9126692b6/"
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30 hover:text-blue-300"
                        aria-label="LinkedIn"
                      >
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
                          class="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-black py-8">
         {/* Footer Content */}
          <div class="container mx-auto px-4 text-center">
            <p class="text-gray-400">
              {t('footer.madeWith')}{" "}
              <span class="inline-block animate-pulse text-red-500">❤️</span> {t('footer.by')}
            </p>
          </div>
      </footer>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Contact;