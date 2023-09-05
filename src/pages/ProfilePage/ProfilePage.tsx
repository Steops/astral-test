import { Body } from 'components/Body/Body';
import { EditView } from 'components/EditView/EditView';
import { mock } from 'mock/mock';

const ProfilePage = () => (
  <Body className='profile-page'>
    <EditView data={mock.fieldsData} />
  </Body>
);

export default ProfilePage;
