import { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers"; // ✅ Ethers v6 import
import Upload from "../artifacts/contracts/Upload.sol/Upload.json";
import "../styles/App.css";
import Display from "../components/Display";

function View() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const provider = new BrowserProvider(window.ethereum);

    const connectWallet = async () => {
      if (provider) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        console.log("Connected Address:", address);
        setAccount(address);

        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contract = new Contract(contractAddress, Upload.abi, signer);

        console.log("Smart Contract:", contract);
        setContract(contract);
        setProvider(provider);
      } else {
        alert("Metamask is not installed");
      }
    };

    provider && connectWallet();
  }, []);

  return (
    <>
      <div className="App">
        <h1 style={{ color: "white" }}>D-APP STUDIFY</h1>
        <p style={{ color: "white" }}>Account: {account || "Not connected"}</p>
        <Display contract={contract} account={account} />
      </div>
    </>
  );
}

export default View;
