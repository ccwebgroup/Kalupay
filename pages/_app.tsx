import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  safeWallet,
} from "@thirdweb-dev/react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Head from "next/head";
import "/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {NETWORKDEVNET, NETWORKMAINNET} from "../const/addresses";
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'black.400',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: 'false',
    cssVarPrefix: 'ck',
  },
})


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const clientAPI = process.env.THIRDWEB_API_KEY as string;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={NETWORKDEVNET}
      clientId={clientAPI}
      autoConnect={true}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            localWallet(),
            embeddedWallet({
              recommended: true,
              auth: {
                options: [
                  "email",
                  "google",
                  "apple",
                  "facebook",
                ],
              },
            }),
            trustWallet(),
            rainbowWallet(),
          ],
        }),
        localWallet(),
        embeddedWallet({
          recommended: true,
          auth: {
            options: [
              "email",
              "google",
              "apple",
              "facebook",
            ],
          },
        }),
        trustWallet(),
        rainbowWallet(),
      ]}
    >
      <ChakraProvider theme={theme}>
      <CSSReset />
        <Head>
          <title>
            Kalupay - A Super DApp designed for your journey on Web3.
          </title>
          <meta
            name="description"
            content="A Super DApp designed for your journey on Web3."
          />
          <meta
            property="og:title"
            content="Kalupay - A Super DApp designed for your journey on Web3."
          />
          <meta
            property="og:description"
            content="A Super DApp designed for your journey on Web3."
          />
          <meta property="og:image" content="/metadata.png" />
          <meta property="og:url" content="https://kalupay.goshendao.com" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Kalupay - A Super DApp designed for your journey on Web3."
          />
          <meta
            name="twitter:description"
            content="A Super DApp designed for your journey on Web3."
          />
          <meta name="twitter:image" content="/metadata.png" />
          <meta name="twitter:url" content="https://kalupay.goshendao.com" />
        </Head>
        <Component {...pageProps} />
        <SpeedInsights />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
