import React from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import "./button.scss";
import { useState } from "react";
const ButtonOne = () => {
  const [status, setStatus] = useState("Connect Wallet");
  const connectWallet = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setStatus(`Connected ${address.slice(0, 5)}.....${address.slice(-4, 43)}`);
  };
  return (
    <a
      className='btn-action'
      onClick={connectWallet}
      style={{ textAlign: "center" }}
    >
      {status}
    </a>
  );
};

export default ButtonOne;
