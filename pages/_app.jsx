import React from "react";

import "../assets/styles/index.css"
// import "../assets/styles/main.scss"
import "../assets/styles/gallery.css";
import "../assets/styles/TitleComponent.css";
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