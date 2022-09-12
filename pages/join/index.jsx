/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const initData = {
  ime: "",
  prezime: "",
  brTelefona: "",
  email: "",
  adresa: "",
  smer: "",
  godinaStudija: "",
  godinaUpisa: "",
  infoKorisnik: "",
};
const initDataError = {
  ime: false,
  prezime: false,
  brTelefona: false,
  email: false,
  smer: false,
  godinaStudija: false,
};
function Header() {
  const [formData, setFormData] = useState(initData);
  const [formDataError, setFormDataError] = useState(initDataError);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = () => {
    const data = {
      ...formData,
    };

    const { ime, prezime, brTelefona, email, smer, godinaStudija } = formData;

    if (!ime || !prezime || !brTelefona || !email || !smer || !godinaStudija) {
      setFormDataError({
        ime: !ime,
        prezime: !prezime,
        brTelefona: !brTelefona,
        email: !email,
        smer: !smer,
        godinaStudija: !godinaStudija,
      });
    } else {
      setLoading(true);
      axios
        .post(
          "https://sheet.best/api/sheets/8bff0c00-f978-426a-8140-67d9b26653c9",
          data
        )
        .then(() => {
          setShowSuccess(true);
          setFormData(initData);
          setLoading(false);
        })
        .catch(() => {
          setShowError(true);
        });
    }
  };

  const onInputChange = (key, value) => {
    setFormDataError({ ...formDataError, [key]: !value });
    setFormData({ ...formData, [key]: value });
  };

  return (
    <section className=" py-1 bg-blueGray-50">
      <div className=" w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="bg-slate-100 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6 lg:flex justify-center lg:justify-between">
            <div className="text-center flex justify-center">
              <h6 className="text-blueGray-700 text-xl font-bold m-auto">
                Forma za učlanjenje u Studentsku organizaciju
              </h6>
            </div>
            {showSuccess && (
              <div className="text-center flex justify-center">
                <h6 className="text-blueGray-700 text-xl font-bold lg:pt-0 pt-4">
                  <div
                    className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700"
                    role="alert"
                  >
                    Uspešno ste poslali zahtev. Neko će vas uskoro kontaktirati.
                  </div>
                </h6>
              </div>
            )}
            {showError && (
              <div className="text-center flex justify-center">
                <h6 className="text-blueGray-700 text-xl font-bold lg:pt-0 pt-4">
                  <div
                    className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
                    role="alert"
                  >
                    Došlo je do problema. Pokušajte ponovo.
                  </div>
                </h6>
              </div>
            )}
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Osnovne informacije
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="ime"
                  >
                    Ime
                  </label>
                  <input
                    id="ime"
                    type="text"
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ${
                      !formDataError?.ime
                        ? `ring-orange-300`
                        : `border-2 border-rose-600 ring-red-300`
                    } w-full ease-linear transition-all duration-150`}
                    placeholder="Ime"
                    value={formData?.ime}
                    onChange={(e) => onInputChange("ime", e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="prezime"
                  >
                    Prezime
                  </label>
                  <input
                    id="prezime"
                    type="text"
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ${
                      !formDataError?.prezime
                        ? `ring-orange-300`
                        : `border-2 border-rose-600 ring-red-300`
                    } w-full ease-linear transition-all duration-150`}
                    placeholder="Prezime"
                    value={formData?.prezime}
                    onChange={(e) => onInputChange("prezime", e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="brTelefona"
                  >
                    Broj telefona
                  </label>
                  <input
                    id="brTelefona"
                    type="number"
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ${
                      !formDataError?.brTelefona
                        ? `ring-orange-300`
                        : `border-2 border-rose-600 ring-red-300`
                    } w-full ease-linear transition-all duration-150`}
                    placeholder="Broj telefona"
                    value={formData?.brTelefona}
                    onChange={(e) =>
                      onInputChange("brTelefona", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email adresa
                  </label>
                  <input
                    type="email"
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ${
                      !formDataError?.email
                        ? `ring-orange-300`
                        : `border-2 border-rose-600 ring-red-300`
                    } w-full ease-linear transition-all duration-150`}
                    placeholder="neko@example.com"
                    value={formData?.email}
                    onChange={(e) => onInputChange("email", e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Mesto stanovanja ili adresa (opciono)
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ring-orange-300 w-full ease-linear transition-all duration-150"
                    placeholder="Janka Veselinovića 22, Novi Sad"
                    value={formData?.adresa}
                    onChange={(e) => onInputChange("adresa", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Informacije o fakultetu
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Studijski program i/ili usmerenje
                  </label>
                  <input
                    type="text"
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ${
                      !formDataError?.smer
                        ? `ring-orange-300`
                        : `border-2 border-rose-600 ring-red-300`
                    } w-full ease-linear transition-all duration-150`}
                    placeholder="Računarstvo i automatika"
                    value={formData?.smer}
                    onChange={(e) => onInputChange("smer", e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Godina studija
                  </label>
                  <input
                    type="text"
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ${
                      !formDataError?.godinaStudija
                        ? `ring-orange-300`
                        : `border-2 border-rose-600 ring-red-300`
                    } w-full ease-linear transition-all duration-150`}
                    placeholder="Prva"
                    value={formData?.godinaStudija}
                    onChange={(e) =>
                      onInputChange("godinaStudija", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Godina upisa (opciono)
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ring-orange-300 w-full ease-linear transition-all duration-150"
                    placeholder="2022"
                    value={formData?.godinaUpisa}
                    onChange={(e) =>
                      onInputChange("godinaUpisa", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Dodatne informacije
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Ostavi komentar / napisi nešto više o sebi (opciono)
                  </label>
                  <textarea
                    type="text"
                    className="h-20 max-h-20 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none outline-none focus:ring-2 ring-orange-300 w-full ease-linear transition-all duration-150"
                    placeholder="Tekst"
                    value={formData?.infoKorisnik}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        infoKorisnik: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onSubmitHandler}
            type="button"
            className="flex justify-center text-white	font-bold	 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 rounded-lg text-sm px-5 py-2.5 text-center mx-12 mb-4"
          >
            {loading && (
              <div role="status" className="flex justify-center">
                <svg
                  aria-hidden="true"
                  className="mr-2 w-5 h-8 text-gray-200 animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
            <p className="my-auto">Pošalji</p>
          </button>
        </div>
      </div>
    </section>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
