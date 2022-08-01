import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LandingComponent from './LandingComponent';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;