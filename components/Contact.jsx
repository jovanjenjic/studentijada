import React from "react";

const Contact = ()=> {
  return (
    <section className="relative block py-10 bg-red-500">
      <div className="container mx-auto lg:px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Da li imas pitanja u vezi sa žurkom?
                    </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Popuni formu ispod, obavezno ostavi svoj email i neko će te kontaktirati u narednih 24h!
                    </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Ime i prezime
                      </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Ime i prezime"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                      </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Poruka
                      </label>
                  <textarea
                    rows={4}
                    cols={80}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Teks poruke..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="transition-all duration-500 bg-red-500 border hover:border-red-500 hover:bg-white hover:text-red-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    POŠALJI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;