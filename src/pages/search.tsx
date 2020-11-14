import { Grid } from '@chakra-ui/react'

const Search: React.FC = () => {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 64rem 1fr"
      templateRows="1fr 30rem 1fr"
      templateAreas="'. . .''. logo .' '. . .'"
      justifyContent="center"
      alignItems="center"
    ></Grid>
  )
}
export default Search
