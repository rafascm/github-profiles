import ProfileCard from '../components/ProfileCard'
import { FormEvent, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Container from '../components/SearchContainer'
import SearchForm from '../components/SearchForm'

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const { isOpen, onOpen } = useDisclosure()
  const [user, setUser] = useState(null)

  const submitClickHandler = (e: FormEvent<HTMLFormElement>) => {
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
    <Container>
      <SearchForm
        submit={submitClickHandler}
        value={inputValue}
        setValue={setInputValue}
      />
      {user && <ProfileCard user={user} isOpen={isOpen} />}
    </Container>
  )
}
export default Search
