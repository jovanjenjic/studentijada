import React, { useContext, useState } from 'react';
import { Layout } from '../components';
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/card.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
)};

export default MyApp
