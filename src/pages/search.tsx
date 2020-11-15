import {
  Grid,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  Fade
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { motion } from 'framer-motion'

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const { isOpen, onOpen } = useDisclosure()
  const [user, setUser] = useState(null)

  const submitClickHandler = e => {
    e.preventDefault()
    if (inputValue.length < 3) return
    fetchUser()
    setInputValue('')
    onOpen()
  }

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${inputValue}`)
    const data = await response.json()
    setUser(data)
  }
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="minmax(1rem, 1fr) minmax(auto, 64rem) minmax(1rem, 1fr)"
      templateRows="1fr 1fr 1fr"
      templateAreas="'. . .''. content .' '. . .'"
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="content" flexDir="column" justifyContent="center">
        <form onSubmit={e => submitClickHandler(e)}>
          <FormControl id="search">
            <FormLabel mb="0">Github Profile Username</FormLabel>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              spacing=".5rem"
              maxW="38rem"
            >
              <Input
                mt="1rem"
                colorScheme="purple"
                placeholder="Who are you looking for?"
                color="gray.200"
                focusBorderColor="purple.400"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                maxW="30rem"
              />

              <Button
                mt="1rem"
                colorScheme="purple"
                focusBorderColor="purple.400"
                rightIcon={<ArrowForwardIcon />}
                type="submit"
              >
                Search
              </Button>
            </Flex>
          </FormControl>
        </form>
        {user && (
          <Fade in={isOpen}>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.5 }}
            >
              <ProfileCard user={user} />
            </motion.div>
          </Fade>
        )}
      </Flex>
    </Grid>
  )
}
export default Search

const variants = {
  hidden: { y: 100 },
  visible: { y: 0 }
}
