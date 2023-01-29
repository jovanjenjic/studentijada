import React from "react";
import TitleComponent from './TitleComponent';

import Image01 from '../public/img/zurka05.jpg';
import Image02 from '../public/img/zurka01.jpg';
import Image03 from '../public/img/zurka02.jpg';
import Image04 from '../public/img/zurka03.jpg';
import Image05 from '../public/img/zurka04.jpg';
import Image06 from '../public/img/zurka06.jpg';
import Image07 from '../public/img/zurka07.jpg';
import Image08 from '../public/img/zurka08.jpg';
import Image09 from '../public/img/zurka09.jpg';
import Image10 from '../public/img/zurka10.jpg';
import Image11 from '../public/img/zurka11.jpg';
import Image12 from '../public/img/zurka12.jpg';
import Image13 from '../public/img/zurka13.jpg';
import Image14 from '../public/img/zurka14.jpg';
import Carousel from './Carousel';

const titleData = {
  titleText: 'Kako izgleda žurka?',
  subtitleText: 'Studentijada je najveća regionalna studentska žurka, a ovako je to izgledalo ranije!',
  colorText: '[Najbolji provod]',
  backgroundText: 'GALERIJA',
  backgroundColor: 'text-gray-100',
};

const images = [Image01, Image02, Image03, Image04, Image05, Image06, Image07, Image08, Image09, Image10, Image11, Image12, Image13, Image14];

const Gallery = () => {
  return(
    <section className="">
        <TitleComponent {...titleData} />
      <div className="mx-auto w-full sm:w-2/3 m-auto hidden sm:grid">
        <div className="container mx-auto px-4 pb-20">
          <div className="gallery">
            {images.map((img, index) => 
              <figure className={`gallery__item gallery__item--${index+1}`}><img src={img?.src} alt={`Gallery image ${index+1}`} className="gallery__img" /></figure>
            )}
          </div>
        </div>
      </div>
      <div className="flex sm:hidden px-4 pb-10">
        <Carousel images={images} />
      </div>
   </section>
  );
}

export default Gallery;