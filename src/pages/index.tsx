import { Box, Button, Heading, Grid, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="minmax(2rem, 1fr) minmax(auto, 64rem) 1fr"
      templateRows="repeat(3, 1fr)"
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
          transition={{ ease: 'easeOut', duration: 0.2 }}
        >
          <Box mb="12">
            <img src="/logo.svg" alt="github" />
          </Box>
          <Heading size="4xl">Github Profiles</Heading>
          <Box mt="6">
            <Link href="./search">
              <Button
                colorScheme="purple"
                rightIcon={<ArrowForwardIcon />}
                focusBorderColor="purple.400"
              >
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
