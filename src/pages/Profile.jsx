import UpdateUserForm from "../features/authentication/UpdateUserForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Profile = () => {
  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserForm />
      </Row>
      <Row>
        <Heading as="h3">Update your password</Heading>
      </Row>
    </>
  );
};

export default Profile;
