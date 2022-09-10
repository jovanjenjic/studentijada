import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
