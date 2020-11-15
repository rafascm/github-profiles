/* eslint-disable camelcase */
import Container from '../components/ProfileCardContainer'
import AdditionalInfo from './ProfileCardAdditionalInfo'
import MainInfo from './ProfileCardMainInfo'

type Props = { user: Record<string, string>; isOpen: boolean }

const ProfileCard: React.FC<Props> = ({ user, isOpen }) => {
  console.log(user)
  return (
    <Container isOpen={isOpen}>
      <MainInfo user={user} />
      <AdditionalInfo user={user} />
    </Container>
  )
}

export default ProfileCard
