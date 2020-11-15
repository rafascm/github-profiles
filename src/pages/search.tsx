import ProfileCard from '../components/ProfileCard'
import { FormEvent, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Container from '../components/SearchContainer'
import SearchForm from '../components/SearchForm'

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [user, setUser] = useState(null)

  const submitClickHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.length < 3) return
    fetchUser()
    setInputValue('')
    setTimeout(onOpen, 500)
  }

  const fetchUser = async () => {
    try {
      onClose()
      setUser(null)

      const data = await (
        await fetch(`https://api.github.com/users/${inputValue}`)
      ).json()
      data.id && setUser(data)
    } catch (error) {
      alert('Not found')
    }
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
