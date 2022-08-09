import openImg from '../public/open.png';
import educationImg from '../public/education.png';
import settingsImg from '../public/settings.png';
import destionationImg from '../public/destination.png';
import fireworksImg from '../public/fireworks.png';
import closeImg from '../public/close.png';

const WhatWeDo = () => {
  return (
    <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-transparent">
        <div className="container xl:max-w-6xl mx-auto px-4">
            <header className="text-center mx-auto mb-16 lg:px-20">
                <h1 className="font-bold text-4xl text-white mb-4">Sadržaj</h1>
                <p className="text-light text-gray-200 text-xl">Ovo je ukratko o sadržaju, detaljnije o njemu ćeš saznati na konferenciji da ne kvarimo izenanđenje.</p>
            </header>
            <div className="flex flex-wrap flex-row -mx-4 text-center">
                <div className="flex-shrink lg:px-4 px-2 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="py-8 px-12 mb-12 rounded-lg bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <div className="inline-block text-gray-900 mb-4">
                                <img src={openImg.src} alt="otvaranje" />
                            </div>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Svečano otvaranje</h3>
                        <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                    </div>
                </div>
                <div className="flex-shrink lg:px-4 px-2 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <div className="py-8 px-12 mb-12 rounded-lg bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <div className="inline-block text-gray-900 mb-4">
                                <img src={educationImg.src} alt="otvaranje" />
                            </div>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Predavanja</h3>
                        <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                    </div>
                </div>
                <div className="flex-shrink lg:px-4 px-2 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                    <div className="py-8 px-12 mb-12 rounded-lg bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <div className="inline-block text-gray-900 mb-4">
                                <img src={settingsImg.src} alt="otvaranje" />
                            </div>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Radionice</h3>
                        <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                    </div>
                </div>
                <div className="flex-shrink lg:px-4 px-2 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >
                    <div className="py-8 px-12 mb-12 rounded-lg bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <div className="inline-block text-gray-900 mb-4">
                                <img src={destionationImg.src} alt="otvaranje" />
                            </div>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Organizovan izlet</h3>
                        <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                    </div>
                </div>
                <div className="flex-shrink lg:px-4 px-2 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                    <div className="py-8 px-12 mb-12 rounded-lg bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <div className="inline-block text-gray-900 mb-4">
                                <img src={fireworksImg.src} alt="otvaranje" />
                            </div>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Druženje</h3>
                        <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                    </div>
                </div>
                <div className="flex-shrink lg:px-4 px-2 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                    <div className="py-8 px-12 mb-12 rounded-lg bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-gray-900 mb-4">
                            <div className="inline-block text-gray-900 mb-4">
                                <img src={closeImg.src} alt="otvaranje" />
                            </div>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Svečano zatvaranje</h3>
                        <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhatWeDo;