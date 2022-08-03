import React, { useContext, useState } from 'react';
import { Layout } from '../components';
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss'
import '../styles/card.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
)};

export default MyApp
