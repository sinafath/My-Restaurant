import Link from "Components/Link";
import styled from "styled-components";
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
const StyledLink = styled(Link)`
  color: blue
`;
export { Error, Submit, Background ,StyledLink};
