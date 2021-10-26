import type { FormEvent } from "react";
import useFetch from "../shares/useFetch";
import styles from "../styles/Login.module.css";
import Picture from "../components/Picture";
type CustomFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    elements: { password: HTMLInputElement; email: HTMLInputElement };
  };
};
const Login = () => {
  const { error, postRequest, loading } = useFetch();

  function handleSubmit(event: CustomFormEvent) {
    const { password, email } = event.target.elements;
    postRequest(
      { password: password.value, email: email.value },
      "./api/login"
    );
    event.preventDefault();
  }

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email-input" className={styles.label}>email:</label>
        <input
          type="email"
          id="email-input"
          name="email"
          className={styles.input}
        />
        <label htmlFor="password-input" className={styles.label}>password:</label>
        <input
          type="password"
          id="password-input"
          name="password"
          className={styles.input}
        />
        <button type="submit" disabled={loading} className={styles.submit}>
          Submit
        </button>
        {error && <div role="alert"> {error} </div>}
      </form>
      </div>
  );
};
export default Login;
