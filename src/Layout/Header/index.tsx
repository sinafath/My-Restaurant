import { useState } from "react";
import { useBoolean } from "react-use";
import Hamburger from "./HamburgerIcon";
import Wrapper from "./Wrapper";
import List from "./List";

export default function Header() {
  const [HeaderFixed, setHeaderFixed] = useState(true);
  const [toggled, toggle] = useBoolean(false);
  return (
    <Wrapper
      HeaderFixed={HeaderFixed}
      disable={toggled}
      onPin={() => setHeaderFixed(false)}
      onUnfix={() => setHeaderFixed(true)}
    >
      <List />
      <Hamburger HeaderFixed={HeaderFixed} toggled={toggled} toggle={toggle} />
    </Wrapper>
  );
}
