import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useCookies } from "react-cookie";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    const [cookies] = useCookies(['token']);
  return (
    //FIXME Need to validate that token stored is actually still valid
    // Checks if token is stored if it there is one it returns the children routes otherwise it reroutes the user to the login page
    cookies?.token
       ? <Outlet/> 
      : <Navigate to='/' state={{from: location}} replace />
  )
}

export default RequireAuth