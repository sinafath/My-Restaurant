import type { FormEvent } from "react";
import useFetch from "../shares/useFetch";

type CustomFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    elements: {
      password: HTMLInputElement;
      email: HTMLInputElement;
      username: HTMLInputElement;
    };
  };
};
const Register = () => {
  const { error, postRequest, loading } = useFetch();

  function handleSubmit(event: CustomFormEvent) {
    const { password, email, username } = event.target.elements;
    postRequest(
      {
        password: password.value,
        email: email.value,
        username: username.value,
      },
      "./api/register"
    );
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username-input">username:</label>
        <input id="username-input" name="username" />
        <label htmlFor="email-input">email:</label> 
        <input type="email" id="email-input" name="email" />
        <label htmlFor="password-input">password:</label>
        <input type="password" id="password-input" name="password" />
        <label htmlFor="confirm-input">confirm:</label>
        <input type="password" id="confirm-input" name="password-confirm" />
        <button type="submit" disabled={loading}>
          Submit
        </button>
        {error && <div role="alert"> {error} </div>}
      </form>
    </div>
  );
};
export default Register;
