import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// Makes the authcontext easily accessible via hook
const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth