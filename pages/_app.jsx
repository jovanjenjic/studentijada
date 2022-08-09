import React, { useContext, useState } from 'react';
import { Layout } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.scss'
import '../styles/card.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
)};

export default MyApp
