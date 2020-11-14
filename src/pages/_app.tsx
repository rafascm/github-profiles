import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import { AnimatePresence, motion } from 'framer-motion'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
