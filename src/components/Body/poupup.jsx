import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';





function Poupup() {

  const [showModal, setShowModal] = React.useState(false);

  // this const for input 
  const theName = useRef(null);
  const theEmail = useRef(null);
  const theMessage = useRef(null);

  // notification if you click submit
  const notify = () => toast("Thank you!");
  const form = useRef();

  // method to send to Emailjs 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zbb08xr', 'template_uy3rhyv', form.current, 'TV78V9qZxrckQ1dPN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      // clear all input in the form after click submit
      theName.current.value = '';
      theEmail.current.value = '';
      theMessage.current.value = '';
  };

  return (
    <>
    <div className="container px-10 mx-0 min-w-full flex flex-col items-center">
      <button
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
        type="button"
        onClick={() => setShowModal(true)}>Contact Us</button>
    </div>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-200">
                <div className="flex items-start justify-between p-5 ">

                    <div className="w-full md:w-full p-10 m-auto shadow-lg rounded-xl my-10 dark:bg-gray-200">
                        <h1 className="text-3xl font-semibold text-center dark:text-gray-900">
                        Contact Form
                        </h1>
                        <form ref={form} onSubmit={sendEmail} 
                        className="mt-6">
                        <div className="mb-2">
                            <label>
                                <div className="text-gray-900">Your name</div>
                                <input
                                    ref={theName}
                                    type="text"
                                    name="user_name"
                                    className="
                                w-full
                                block px-4 py-2 mt-2
                                border-gray-900
                                rounded-md
                                shadow-sm
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                dark:text-gray-900"
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
                            mt-2 px-4 py-2
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
                            className="text-gray-900">Message</span>
                            <textarea 
                                ref={theMessage}
                                name="message"
                                placeholder="Enter your Message here!"
                                required
                                className="
                            block
                            w-full
                            mt-2 px-16 py-4
                            border-gray-900
                            rounded-md
                            shadow-sm
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                            dark:text-gray-900"
                                rows="4"
                            ></textarea>
                            </label>
                        </div>

                        <div className="mb-6">
                            <button 
                            onClick={notify}
                            type="submit"
                            value="Send"
                            className="
                            h-10
                            px-5
                            text-indigo-100
                            bg-gradient-to-r from-cyan-500 to-teal-500
                            rounded-lg
                            "
                            >
                            Submit
                            </button>
                            <ToastContainer />
                        </div>
                        </form>
                    </div>
                    
                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Poupup