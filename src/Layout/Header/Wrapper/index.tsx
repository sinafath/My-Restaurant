import classNames from "classnames/bind";
import type { ReactNode } from "react";
import styles from "./Index.module.css";
import HeaderRoom from "react-headroom";

let cx = classNames.bind(styles);
type Wrapper = React.ComponentProps<typeof HeaderRoom> & {
  children: ReactNode;
  HeaderFixed: boolean;
  disable: boolean;
};
function Wrapper({ HeaderFixed, disable, children, ...rest }: Wrapper) {
  
  let className = cx({
    transparent: HeaderFixed && !disable,
    hamburgerMenu: disable,
    header: !disable,
  });
  return (
    <div className={styles.headerContainer}>
      <HeaderRoom
        style={{ transform: disable ? "inherit" : undefined }}
        disable={disable}
        {...rest}
      >
        <div className={className}>{children}</div>
      </HeaderRoom>
    </div>
  );
}

export default Wrapper;
