import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import { AnimatePresence } from 'framer-motion'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Head>
        <title>Github Profiles</title>
        <link
          rel="icon"
          type="image/png"
          href="https://github.githubassets.com/favicons/favicon-dark.png"
        />
      </Head>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
