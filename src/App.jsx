import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  
  console.log("👋 Address:", address);
  
  if (!address) {
    return (
      <div className="landing">
        <h1>Bem-vind@s à FreedomDAO</h1>
        <button
          onClick={connectWithMetamask}
          className="btn-hero"  
        >
          Conecte sua carteira
        </button>
        <p>Junte-se à minha DAO</p>
      </div>
    )
  } else {
    return (
      <div className="landing">
        <h1>👀 carteira conectada, e agora?!</h1>
      </div>
    )
  }
  
}

export default App
