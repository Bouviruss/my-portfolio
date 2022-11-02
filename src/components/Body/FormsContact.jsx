import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';



export const FormsContact = () => {
  const theName = useRef(null);
  const theEmail = useRef(null);
  const theMessage = useRef(null);


  const notify = () => toast("Thank you!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zbb08xr', 'template_uy3rhyv', form.current, 'TV78V9qZxrckQ1dPN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      // clear all input in the form
      theName.current.value = '';
      theEmail.current.value = '';
      theMessage.current.value = '';
  };
  return (
    <div>

      <div className="w-full md:w-2/3 p-10 m-auto shadow-lg rounded-xl my-10 dark:bg-gray-200">
        <h1 className="text-3xl font-semibold text-center dark:text-gray-900">
          Contact Form
        </h1>
        <form ref={form} onSubmit={sendEmail} 
          className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-900">Your name</span>
              <input
                ref={theName}
                type="text"
                name="user_name"
                className="
            w-full
            block px-16 py-2 mt-2
            border-gray-900
            rounded-md
            shadow-sm
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            dark:text-gray-900
          "
                placeholder="Enter your name"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-900">Email address</span>
              <input
                ref={theEmail}
                name="user_email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-900
            rounded-md
            shadow-sm
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            dark:text-gray-900
          "
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span 
              class="text-gray-900">Message</span>
              <textarea 
                ref={theMessage}
                name="message"
                placeholder="Enter your Message here!"
                required
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-900
            rounded-md
            shadow-sm
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            dark:text-gray-900
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button 
            onClick={notify}
              type="submit"
              value="Send"
              className="
            h-10
            px-5
            text-indigo-100
            bg-gradient-to-r from-cyan-500 to-teal-500
            rounded-lg"
            >
              Contact Us
            </button>
              <ToastContainer />
          </div>
        </form>
      </div>
    </div>

  );
};

export default FormsContact