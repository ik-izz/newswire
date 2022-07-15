import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useCookies } from "react-cookie";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    // const cookies = useCookies();
    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    console.log(cookies);
  return (
    //FIXME need to change to dynamicly check cookie storage for token.
    //Need to validate that token stored is actually still valid
    cookies?.token
        ? <Outlet/> 
        : <Navigate to='/' state={{from: location}} replace />
  )
}

export default RequireAuth