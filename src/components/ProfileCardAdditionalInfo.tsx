import { Box } from '@chakra-ui/react'

type Props = { user: Record<string, string> }

const ProfileCardAdditionalInfo: React.FC<Props> = ({ user }) => (
  <Box minW="20rem" bgColor="purple.400" borderRightRadius="md" flexGrow={3}>
    {user.followers}
  </Box>
)

export default ProfileCardAdditionalInfo
