import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { Layout } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const use = async () => {
      // eslint-disable-next-line
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} /> {/* eslint-disable-line */}
      </Layout>
    </AnimatePresence>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.any.isRequired, // eslint-disable-line
};

export default MyApp;
