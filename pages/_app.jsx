import React, { useContext, useState } from 'react';
import { Layout } from '../components';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.scss'
import '../styles/card.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      </Layout>
    </AnimatePresence>
)};

export default MyApp
