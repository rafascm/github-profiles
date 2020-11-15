import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  InputProps,
  FlexProps
} from '@chakra-ui/react'
import { FormEvent } from 'react'
import SearchButton from '../components/SearchButton'

type Props = {
  submit: (e: FormEvent<HTMLFormElement>) => void
  setValue: (value: string) => void
  value: string
}

const SearchForm: React.FC<Props> = ({ submit, value, setValue }) => {
  return (
    <form onSubmit={e => submit(e)}>
      <FormControl id="search">
        <FormLabel mb="0">Github Profile Username</FormLabel>
        <Flex {...flexProps}>
          <Input
            {...inputProps}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <SearchButton mt="4" type="submit" />
        </Flex>
      </FormControl>
    </form>
  )
}

export default SearchForm

const inputProps: InputProps = {
  mt: '1rem',
  colorScheme: 'purple',
  placeholder: 'Who are you looking for?',
  color: 'gray.200',
  focusBorderColor: 'purple.400',
  maxW: '30rem'
}

const flexProps: FlexProps = {
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  maxW: '38rem'
}
