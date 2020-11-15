import { Fade, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type Props = { isOpen: boolean }

const ProfileCardContaner: React.FC<Props> = ({ children, isOpen }) => (
  <Fade in={isOpen}>
    <motion.div {...motionProfileCardProps}>
      <Flex flexWrap="wrap" mt="10">
        {children}
      </Flex>
    </motion.div>
  </Fade>
)

export default ProfileCardContaner

const motionProfileCardProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  variants: { hidden: { y: 100 }, visible: { y: 0 } },
  transition: { ease: 'easeOut', duration: 0.5 }
}
