import { useContext } from "react";
import UserContext from "Context/UserProvider";

const useUser = () => useContext(UserContext);

export default useUser;
