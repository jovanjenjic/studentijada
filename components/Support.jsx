import React from "react";
import Support01 from '../public/img/support01.png'
import Support02 from '../public/img/support02.png'
import Support03 from '../public/img/support03.png'

const titleData = {
  backgroundText: 'PODRSKA',
  backgroundColor: 'text-amber-300',
};

const Gallery = () => {
  return(
    <section className="">
      <div className="bg-red-500">
        {/* <TitleComponent {...titleData} /> */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 lg:px-8">
          <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3">
            <div className="col-span-1 flex justify-center bg-red-500 py-8 px-8">
              <img className="max-h-28" src={Support02.src} alt="Workcation" />
            </div>
            <div className="col-span-1 flex justify-center bg-red-500 py-8 px-8">
              <img className="max-h-28" src={Support01.src} alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center bg-red-500 py-8 px-8">
              <img className="max-h-28" src={Support03.src} alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center bg-red-500 py-8 px-8">
              <img className="max-h-28" src={Support03.src} alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center bg-red-500 py-8 px-8">
              <img className="max-h-28" src={Support02.src} alt="Workcation" />
            </div>
            <div className="col-span-1 flex justify-center bg-red-500 py-8 px-8">
              <img className="max-h-28" src={Support01.src} alt="Mirage" />
            </div>
          </div>
        </div>
      </div>
   </section>
  );
}

export default Gallery;