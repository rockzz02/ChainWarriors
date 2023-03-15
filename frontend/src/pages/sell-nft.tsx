import type { NextPage } from "next"
import Head from "next/head"
import { Sell_NftView } from "../views"

const Sell_Nft: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Nft Marketplace</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <Sell_NftView />
    </div>
  )
}

export default Sell_Nft
