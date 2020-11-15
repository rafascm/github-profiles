import SearchButton from '../components/SearchButton'
import Container from '../components/HomeContainer'
import { Heading, Img } from '@chakra-ui/react'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Container>
      <Img mb="12" src="/logo.svg" alt="github" />
      <Heading size="4xl">Github Profiles</Heading>
      <Link href="./search">
        <a>
          <SearchButton mt="6" />
        </a>
      </Link>
    </Container>
  )
}
export default Home
