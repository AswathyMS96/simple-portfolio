import React, { useEffect, useState } from 'react';
import '../components/Topbar.css';
import Web3 from 'web3';

function TopBar() {
  // Connect Wallet
  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    connect();
  }, []);

  const connect = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3);
        setIsConnected(true);
      } else {
        console.log('Please install MetaMask or any other Ethereum-compatible wallet');
      }
    } catch (error) {
      console.log('Error connecting to wallet:', error);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-blue-100">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">STAKE</h1>
      </div>
      <div className="flex">
        <div className="items-center hidden px-6 md:flex">
          <p>About</p>
        </div>
        <div className="items-center hidden px-6 md:flex">
          <p>FAQ</p>
        </div>
        <div className="items-center hidden px-6 md:flex">
          <p>FilecoinStaking</p>
        </div>
        {/* wallet */}
            <div >
              {isConnected ? (
                <div className="buttonconnect">Connected</div>
              ) : (
                <button className="button-text" onClick={connect}>
                  Connect Wallet
                </button>
              )}
            </div>
      </div>
    </div>
  );
}

export default TopBar;

// import React from 'react';
// import '../components/Topbar.css';

// function TopBar() {
//   return (
//     <div className='top-bar fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-blue-100'>
//       <div className='flex items-center'>
//         <h1 className='text-xl font-bold'>STAKE</h1>
//       </div>
//       <div className='flex'>
//         <div className='items-center hidden px-6 md:flex'>
//           <p>About</p>
//         </div>
//         <div className='items-center hidden px-6 md:flex'>
//           <p>FAQ</p>
//         </div>
//         <div className='items-center hidden px-6 md:flex'>
//           <p>FilecoinStaking</p>
//         </div>
//         <button className='button-text'>Connect Wallet</button>
//       </div>
//     </div>
//   );
// }

// export default TopBar;
