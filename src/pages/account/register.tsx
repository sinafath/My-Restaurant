import { NEXT_URL } from "Config";
import useFetch from "Hooks/useFetch";
import Input, { Email, Password } from "Components/Form/Input";
import Form from "Components/Form";
import { Error, Submit,Background, StyledLink } from "Components/Profile";

function Register() {
  const { postRequest, setError, error, loading } = useFetch(
    `${NEXT_URL}/api/auth/register`
  );

  function handleSubmit({ confirm, password, ...rest }: any) {
    if (confirm === password) {
      postRequest({ password, ...rest });
    } else {
      setError("Password and Confirm Password do not match");
    }
  }

  return (
    <Background>
      <Form onSubmit={handleSubmit}>
        <Input title="username" />
        <Email />
        <Password />
        <Password title="confirm" />
        <Error message={error} />
        <Submit loading={loading} />
        <StyledLink url="/login"> login</StyledLink>
      </Form>
    </Background>
  );
}
export default Register;
