import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
import { MoralisProvider } from "react-moralis"
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');
import { NotificationProvider } from "@web3uikit/core"

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Nft Marketplace</title>
          </Head>
          <MoralisProvider initializeOnMount={false}>
          <NotificationProvider>
          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
              <ContentContainer>
                <Component {...pageProps} />
              </ContentContainer>
              <Footer/>
            </div>
          </ContextProvider>
          </NotificationProvider>
          </MoralisProvider>
        </>
    );
};

export default App;
