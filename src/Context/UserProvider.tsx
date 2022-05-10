import { createContext, useState } from "react";
import type { ReactNode } from "react";

type UserProvider = {
  children: ReactNode;
};
type User = {
  setUser: (c: string) => void;
  user: {} | undefined;
};

const UserContext = createContext<User>({
  setUser: () => {},
  user: {},
});

const UserProvider = ({ children }: UserProvider) => {
  const [user, setUser] = useState<{} | undefined>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider };
export default UserContext;
