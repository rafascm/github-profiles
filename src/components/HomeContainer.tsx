import { Flex, Grid, GridProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const HomeContainer: React.FC = ({ children }) => (
  <Grid as="main" {...gridProps}>
    <Flex gridArea="logo" flexDir="column">
      <motion.div {...motionProps}>{children}</motion.div>
    </Flex>
  </Grid>
)

export default HomeContainer

const gridProps: GridProps = {
  height: '100vh',
  templateColumns: 'minmax(2rem, 1fr) minmax(auto, 64rem) 1fr',
  templateRows: 'repeat(3, 1fr)',
  templateAreas: "'. . .''. logo .' '. . .'",
  justifyContent: 'center',
  alignItems: 'center'
}

const motionProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  variants: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  transition: { ease: 'easeOut', duration: 0.2 }
}
