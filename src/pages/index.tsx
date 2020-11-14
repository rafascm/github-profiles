import { Box, Button, Heading, Grid, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 64rem 1fr"
      templateRows="1fr 30rem 1fr"
      templateAreas="'. . .''. logo .' '. . .'"
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <Box mb="12">
            <img src="/logo.svg" alt="github" />
          </Box>
          <Heading size="4xl">Github Profiles</Heading>
          <Box mt="6">
            <Link href="./search">
              <Button colorScheme="purple" rightIcon={<ArrowForwardIcon />}>
                Search
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Flex>
    </Grid>
  )
}
export default Home

const variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}
