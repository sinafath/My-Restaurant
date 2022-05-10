import useFetch from "Hooks/useFetch";
import { NEXT_URL } from "Config";
import { Email, Password } from "Components/Form/Input";
import Form from "Components/Form";
import { Error, Submit, Background } from "Components/Profile";
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
        <Link url="account/register"> register </Link>
      </Form>
    </Background>
  );
}

export default Login;
