import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { Layout } from "../components";
import "../styles/globals.scss";
import "../styles/card.css";
import "../styles/afterMovie.css";

function MyApp({ Component, pageProps }) {
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
