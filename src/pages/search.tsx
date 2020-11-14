import {
  Grid,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('')

  const submitClickHandler = e => {
    e.preventDefault()
    if (inputValue.length < 3) return
    setInputValue('')
  }

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 64rem 1fr"
      templateRows="1fr 30rem 1fr"
      templateAreas="'. . .''. content .' '. . .'"
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="content" flexDir="column" justifyContent="center">
        <form onSubmit={e => submitClickHandler(e)}>
          <FormControl id="search">
            <FormLabel>Github Profile Username</FormLabel>
            <Flex>
              <Input
                colorScheme="purple"
                placeholder="Insert the username you're looking for..."
                color="gray.200"
                focusBorderColor="purple.400"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <Button
                ml="2"
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
      </Flex>
    </Grid>
  )
}
export default Search
