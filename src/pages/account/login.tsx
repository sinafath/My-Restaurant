import useFetch from "Hooks/useFetch";
import { NEXT_URL } from "Config";
import { Email, Password } from "Components/Form/Input";
import Form from "Components/Form";
import { Error, Submit, Background, StyledLink } from "Components/Profile";
import Link from "Components/Link";

function Login() {
  const { postRequest, error, loading } = useFetch(
    `${NEXT_URL}/api/auth/login`
  );

  return (
    <Background>
      <Form onSubmit={postRequest}>
        <Email />
        <Password />
        <Error message={error} />
        <Submit loading={loading} />
        <StyledLink url="/register"> register </StyledLink>
      </Form>
    </Background>
  );
}

export default Login;
