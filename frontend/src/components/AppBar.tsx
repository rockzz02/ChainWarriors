import { FC } from "react";
import Link from "next/link";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import SolLogo from "../../public/nft4.png";
import styles from "../styles/custom.module.css";
import { ConnectButton } from "@web3uikit/web3";
import { MoralisProvider } from "react-moralis";

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              className="inline-block w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <img src={SolLogo.src} alt="" className={styles.sologo1} />
          <div className="hidden sm:inline w-22 h-22 md:p-2">
            <p style={{fontFamily: "monospace", fontSize: "25px"}}>ArtChain</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center">
          <div className="flex items-stretch">
            <Link href="/">
              <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
            </Link>
            <Link href="/checkwallet">
              <a className="btn btn-ghost btn-sm rounded-btn">Check Wallet</a>
            </Link>
            <Link href="/display">
              <a className="btn btn-ghost btn-sm rounded-btn">Display NFT</a>
            </Link>
            <Link href="/explore">
              <a className="btn btn-ghost btn-sm rounded-btn">Explore</a>
            </Link>
            <Link href="/candymachine">
              <a className="btn btn-ghost btn-sm rounded-btn">Candy Machine</a>
            </Link>
            <Link href="/soluno">
              <a className="btn btn-ghost btn-sm rounded-btn">SolUNO</a>
            </Link>
            <Link href="/sell-nft">
                    <a className="mr-4 p-6">Sell NFT</a>
            </Link>
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
            <ConnectButton moralisAuth={false} />
        </div>
      </div>
      {props.children}
    </div>
  );
};
