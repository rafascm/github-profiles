import { Flex, FlexProps, Image, Text } from '@chakra-ui/react'

type Props = { user: Record<string, string> }

const ProfileCardMainInfo: React.FC<Props> = ({ user }) => (
  <Flex {...containerProps}>
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
  </Flex>
)

export default ProfileCardMainInfo

const containerProps: FlexProps = {
  minW: '16.9rem',
  bgColor: 'white',
  borderLeftRadius: 'md',
  minH: '30rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: 'gray',
  flexGrow: 1
}
