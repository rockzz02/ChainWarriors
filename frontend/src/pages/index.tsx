import type { NextPage } from "next";
import Head from "next/head";
import Info from "../components/Info"

import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta
          name="description"
          content="NFT Marketplace"
        />
      </Head>
      <HomeView />
      <Info/>
   
    </div>
  );
};

export default Home;
