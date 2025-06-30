import { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import Lend from "./components/Lend";
import Borrow from "./components/Borrow";
import Dashboard from "./components/Dashboard";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Citrea-lend</h1>
      </header>
      <main className="p-4">
        {!account ? (
          <ConnectWallet setProvider={setProvider} setSigner={setSigner} setAccount={setAccount} />
        ) : (
          <div className="space-y-4">
            <Dashboard provider={provider} signer={signer} account={account} />
            <Lend provider={provider} signer={signer} account={account} />
            <Borrow provider={provider} signer={signer} account={account} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;