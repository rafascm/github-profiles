import { Flex, Box, Image, Text } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/ban-types
// eslint-disable-next-line camelcase
type Props = { user: { login: string; avatar_url: string; name: string } }

const ProfileCard: React.FC<Props> = ({ user }) => {
  console.log(user)
  return (
    <Flex flexWrap="wrap" mt="10">
      <Flex
        minW="16.9rem"
        bgColor="white"
        borderLeftRadius="md"
        minH="30rem"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="gray"
        flexGrow={1}
      >
        <Image
          borderRadius="full"
          src={user.avatar_url}
          boxSize="12rem"
          mb="1.2rem"
        />
        <Text fontSize="md" color="gray.500">
          {user.name}
        </Text>
        <Text fontSize="2xl" color="gray.800" mb="1rem" fontWeight="bold">
          {user.login}
        </Text>
        <Flex>
          <Box></Box>
          <Box></Box>
        </Flex>
      </Flex>
      <Box
        minW="20rem"
        bgColor="purple.400"
        borderRightRadius="md"
        flexGrow={3}
      >
        glugli
      </Box>
    </Flex>
  )
}

export default ProfileCard
