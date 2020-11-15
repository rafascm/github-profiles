import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Text,
  TextProps
} from '@chakra-ui/react'

type Props = { user: Record<string, string> }

const ProfileCardAdditionalInfo: React.FC<Props> = ({ user }) => (
  <Flex {...containerProps}>
    <Flex>
      <Flex flexDir="column" alignContent="center" m="1rem">
        <Text fontWeight="bold">Followers</Text>
        <Text {...countProps}>{user.followers}</Text>
      </Flex>
      <Flex flexDir="column" alignContent="center" m="1rem">
        <Text fontWeight="bold">Following</Text>
        <Text {...countProps}>{user.following}</Text>
      </Flex>
    </Flex>
    <Box w="25rem" p="1rem">
      <Heading size="sm" textAlign="center">{`"${
        user.bio || 'Bio not found'
      }"`}</Heading>
    </Box>
  </Flex>
)

export default ProfileCardAdditionalInfo

const containerProps: FlexProps = {
  minW: '20rem',
  bgColor: 'purple.400',
  borderRightRadius: 'md',
  minH: '30rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  // color: 'gray',
  flexGrow: 3
}

const countProps: TextProps = {
  fontSize: '5xl',
  fontWeight: 'bold',
  color: 'gray.700',
  textAlign: 'center'
}
