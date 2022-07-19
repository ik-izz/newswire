import { useCookies } from "react-cookie";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useVerify from "../hooks/useVerify";



const VerifyToken = () => {
    const {auth} = useAuth()
    const location = useLocation()
    const [cookies] = useCookies(['token'])

    console.log(`About to call the verify hook`)
    const verified = useVerify('http://localhost:1337/api/reviews',cookies?.token)

    console.log(`I already passed the verify hook`)
    console.log(verified.status)
  return (
    verified.status == 200
    ? <Outlet/>
    : <Navigate to='/' state={{from:location}} replace/>
  )
}

export default VerifyToken;