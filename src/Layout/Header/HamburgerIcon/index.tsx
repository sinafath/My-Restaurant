import classNames from "classnames/bind";
import { Squash } from "hamburger-react";
import styles from "./Index.module.css";

type Hamburger = React.ComponentProps<typeof Squash> & {
  HeaderFixed: boolean;
};

let cx = classNames.bind(styles);

const Hamburger = ({ toggled, HeaderFixed, ...rest }: Hamburger) => (
  <div
    className={cx({
      Hamburger,
      HamburgerFixed: toggled,
    })}
  >
    <Squash
      toggled={toggled}
      {...rest}
      color={HeaderFixed && !toggled ? "white" : "black"}
    />
  </div>
);

export default Hamburger;
