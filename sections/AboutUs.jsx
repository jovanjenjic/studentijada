import React from "react";
import aboutUs from "../public/aboutUs.png";
import mission from "../public/mission.png";
import vision from "../public/vision.png";

function AboutUs() {
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Ko smo mi
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              O nama
            </h3>
            <p className="text-gray-600 mb-8">
              Studentska unija je vodeća i najveća studentska organizacija
              Fakulteta tehničkih nauka u Novom Sadu koja okuplja studente u
              cilju poboljšanja neformalnog obrazovanja i kvaliteta studiranja.
              <br />
              <br />
              Kroz svoj rad omogućuje studentima aktivno učešće u donošenju
              odluka, učešću na domaćim i međunarodnim projektima kao i
              organizovanju neformalnih studentskih aktivnosti.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img alt="About us" src={aboutUs.src} />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img alt="Mission" src={mission.src} />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Misija
              </h3>
              <p className="text-gray-600 mb-8">
                Studentska unija teži ostvarenju misije okupljanja grupe mladih
                i ambicioznih studenata koji su proaktivni i žele da unapređuju
                svoja znanja, veštine i kvalitet studiranja.
                <br />
                <br />
                Svoju ambiciju i organizacioni duh realizuju kroz mnogobrojne
                konferencije, predavanja, radionice, takmičenja ali i druga
                dešavanja kojima se Studentima poboljšava kvalitet studiranja,
                širi neformalno obrazovanje i pospešuje konekcije i sticanje
                novih poznanstava.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Vizija
            </h3>
            <p className="text-gray-600 mb-8">
              Studentska unija kosntantno teži uključivanju što većeg broja
              studenata u rad same organizacije ali i privlačenje studenata
              ostalih fakulteta kroz razne vidove saradnji kako bi kreirali
              trendove studentskog organizovanja i održavali lidersku poziciju
              među omladinskim studentskim organizacijama.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img alt="Mission" src={vision.src} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
