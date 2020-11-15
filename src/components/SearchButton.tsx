import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { mt: string; type?: any }

const SearchButton: React.FC<Props> = props => (
  <Button
    mt={props.mt}
    type={props.type}
    colorScheme="purple"
    rightIcon={<ArrowForwardIcon />}
  >
    Search
  </Button>
)
export default SearchButton
