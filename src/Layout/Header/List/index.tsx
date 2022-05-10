import classNames from "classnames/bind";
import Link from "../../../Components/Link";
import useUser from "../../../Hooks/useUer";
import styles from "./Index.module.css";

interface DefaultLink extends Partial<Link> {
  children: string;
}

let cx = classNames.bind(styles);

const DefaultLink = ({ children, ...rest }: DefaultLink) => (
  <Link url={children} className={styles.navLink} {...rest}>
    {children}
  </Link>
);

function List() {
  const { user } = useUser();
  return (
    <>
      <div>
        <Link className={cx("nameRestaurant", "navLink")}>SinaFa</Link>
        <DefaultLink>menu</DefaultLink>
        <DefaultLink>about</DefaultLink>
        <DefaultLink>contact</DefaultLink>
      </div>
      <div>
        {user ? (
          <button> logout </button>
        ) : (
          <DefaultLink url="account/login">login</DefaultLink>
        )}
        <DefaultLink>order</DefaultLink>
      </div>
    </>
  );
}
export default List;
