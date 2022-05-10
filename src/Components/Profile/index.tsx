import Background from "./Background";
import styles from "./index.module.css";

type Error = {
  message: string;
};
type Submit = {
  loading: boolean;
};

const Error = ({ message }: Error) => (
  <> {message && <div role="alert"> {message} </div>}</>
);
const Submit = ({ loading }: Submit) => (
  <button type="submit" disabled={loading} className={styles.submit}>
    Submit
  </button>
);
export { Error, Submit, Background };
