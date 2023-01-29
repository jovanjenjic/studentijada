import React from "react";

import "../public/styles/index.css"
// import "../public/styles/main.scss"
import "../public/styles/gallery.css";
import "../public/styles/TitleComponent.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

function App({ Component, pageProps }) {

    React.useEffect(() => {
        const use = async () => {
          // eslint-disable-next-line
          (await import("tw-elements")).default;
        };
        use();
      }, []);

      
    return <Component {...pageProps} />

}

export default App