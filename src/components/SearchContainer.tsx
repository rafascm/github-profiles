import { Flex, Grid, GridProps } from '@chakra-ui/react'

const SearchContainer: React.FC = ({ children }) => (
  <Grid as="main" {...gridProps}>
    <Flex gridArea="content" flexDir="column" justifyContent="center">
      {children}
    </Flex>
  </Grid>
)

export default SearchContainer

const gridProps: GridProps = {
  height: '100vh',
  templateColumns: 'minmax(1rem, 1fr) minmax(auto, 64rem) minmax(1rem, 1fr)',
  templateRows: '1fr 1fr 1fr',
  templateAreas: "'. . .''. content .' '. . .'",
  justifyContent: 'center',
  alignItems: 'center'
}
