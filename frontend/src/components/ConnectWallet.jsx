import { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = ({ setProvider, setSigner, setAccount }) => {
  const [error, setError] = useState("");

  const connect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13fb" }], // Citrea Testnet Chain ID: 5115
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const account = await signer.getAddress();
        setProvider(provider);
        setSigner(signer);
        setAccount(account);
      } catch (err) {
        setError("Failed to connect wallet: " + err.message);
      }
    } else {
      setError("Please install Metamask");
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={connect}
      >
        Connect Wallet
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ConnectWallet;