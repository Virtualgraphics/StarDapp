import type { AppProps } from "next/app";
import {
  ThirdwebProvider,

} from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider


    
      clientId={'c4af3df6c2aac61f4295b4bf6dee9086'}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
