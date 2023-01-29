import TeamImg01 from '../assets/img/team-1-800x800.jpg';
import TeamImg02 from '../assets/img/team-2-800x800.jpg';
import TeamImg03 from '../assets/img/team-3-800x800.jpg';
import TeamImg04 from '../assets/img/team-4-470x470.png';
import TitleComponent from './TitleComponent';

const titleData = {
  titleText: 'Kako kupiti kartu?',
  subtitleText: 'Pronađite svoj fakultet i njegovog ambasadora i jednostavno kliknite, pozovite i rezervišite!',
  colorText: '[Ambasadori studentijade]',
  backgroundText: 'PROMOTERI',
  backgroundColor: 'text-white',
};

const Team = ()=> {
  return(
  <section className="bg-gray-100 pt-12">
    <TitleComponent {...titleData} />
    <div className="container mx-auto w-full lg:w-3/4 m-auto">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg04.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Ryan Tompson
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                FTN
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg01.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Romina Hadid
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                EF
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg02.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Alexa Smith
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                PMF
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg03.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Jenna Kardi
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                FTN
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg04.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Ryan Tompson
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                FTN
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg01.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Romina Hadid
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                EF
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg02.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Alexa Smith
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                PMF
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 lg:mb-12 px-4">
          <div className='transition-all duration-300 hover:shadow-lg hover:bg-white'>
            <img
              alt="..."
              src={TeamImg03.src}
              className="shadow-lg rounded-full max-w-full mx-auto pt-2"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-2 text-center">
              <h5 className="text-lg font-bold">
                Jenna Kardi
                  </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                FTN
              </p>
              <p className="text-color">[0616485011]</p>
              <div className="mt-2 mb-6 pb-2">
                <button
                  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  </section>
  );
};

export default Team;