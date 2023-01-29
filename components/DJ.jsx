import TitleComponent from './TitleComponent';

const titleData = {
  titleText: 'Ko pušta muziku?',
  subtitleText: 'Uz najbolje DJeve studentijada postaje novi sinonim za najbolji provod studenata u Beogradu!',
  colorText: '[Najbolja muzika]',
  backgroundText: 'DJEVI',
  backgroundColor: 'text-gray-100',
};

const DJ = () => {
  return(
    <section className="m-auto pb-24 pt-16 w-full lg:w-3/4">
      <TitleComponent {...titleData} />
      <div class="">  
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="grid gap-8 lg:grid-cols-2">
              <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:border-yellow-300 transition-all border border-red-400">
                <img src="http://studentijada.com/assets/dj1.e5266e31.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500" />
                <div class="sm:w-7/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-4">
                      <h4 class="text-xl font-semibold text-cyan-900">Atila</h4>
                      <p class="text-gray-600 text-sm font-medium text-gray-500">Jedno je sigurno, Dr Atila je najbolji DJ među doktorima i najbolji doktor među DJ-evima. Malo ko zna da je za njegov uspeh zapravo glavni krivac Mile Kitić, sa kojim je počeo da nastupa davne 2006. godine, zajedno sa Sandrom Afrikom....</p>
                    </div>
                    <a href="www.tailus.io" class="block w-max rounded-2xl transition-all duration-500 bg-red-500 border hover:border-red-500 hover:bg-white hover:text-red-600 text-white px-4">Pročitaj više</a>
                  </div>
                </div>
              </div>
              <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:border-yellow-300 transition-all border border-red-400">
                <img src="http://studentijada.com/assets/dj2.e0671d4d.jpeg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500" />
                <div class="sm:w-7/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-4">
                      <h4 class="text-xl font-semibold text-cyan-900">Totti</h4>
                      <p class="text-gray-600 text-sm font-medium text-gray-500">Dobro je poznato da čitav Rim gaji i veruje u jedno jedino Božanstvo, u svemogućeg boga Totija. Da li je reč o legendarnom igraču Rome Frančesku Totiju ili DJ Urošu iz Kumodraža ostaje nepoznanica, mada smo čvrsto uvereni da je ovo drugo....</p>
                    </div>
                    <a href="www.tailus.io" class="block w-max rounded-2xl transition-all duration-500 bg-red-500 border hover:border-red-500 hover:bg-white hover:text-red-600 text-white px-4">Pročitaj više</a>
                  </div>
                </div>
              </div>
              <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:border-yellow-300 transition-all border border-red-400">
                <img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500" />
                <div class="sm:w-7/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-4">
                      <h4 class="text-xl font-semibold text-cyan-900">Atila</h4>
                      <p class="text-gray-600 text-sm font-medium text-gray-500">Jedno je sigurno, Dr Atila je najbolji DJ među doktorima i najbolji doktor među DJ-evima. Malo ko zna da je za njegov uspeh zapravo glavni krivac Mile Kitić, sa kojim je počeo da nastupa davne 2006. godine, zajedno sa Sandrom Afrikom....</p>
                    </div>
                    <a href="www.tailus.io" class="block w-max rounded-2xl transition-all duration-500 bg-red-500 border hover:border-red-500 hover:bg-white hover:text-red-600 text-white px-4">Pročitaj više</a>
                  </div>
                </div>
              </div>
              <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-md hover:border-yellow-300 transition-all border border-red-400">
                <img src="http://studentijada.com/assets/dj2.e0671d4d.jpeg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500" />
                <div class="sm:w-7/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-4">
                      <h4 class="text-xl font-semibold text-cyan-900">Totti</h4>
                      <p class="text-gray-600 text-sm font-medium text-gray-500">Dobro je poznato da čitav Rim gaji i veruje u jedno jedino Božanstvo, u svemogućeg boga Totija. Da li je reč o legendarnom igraču Rome Frančesku Totiju ili DJ Urošu iz Kumodraža ostaje nepoznanica, mada smo čvrsto uvereni da je ovo drugo....</p>
                    </div>
                    <a href="www.tailus.io" class="block w-max rounded-2xl transition-all duration-500 bg-red-500 border hover:border-red-500 hover:bg-white hover:text-red-600 text-white px-4">Pročitaj više</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
   </section>
  );
}

export default DJ;