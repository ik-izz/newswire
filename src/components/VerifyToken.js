import { useCookies } from "react-cookie";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const VerifyToken = () => {
    const location = useLocation()
    const [cookies] = useCookies(['token'])
    const url = 'http://localhost:1337/api/reviews'

    const VerifyToken = () => {    
        fetch(url, {
            method: 'Get',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${cookies.token}`,
            },
        })
        .then(async res => {
            return(
                res.status === 200 ? true : <Navigate to='/' state={{from:location}} replace/>
            );
        })
        .catch(err => {
            console.log(err);
        })
    }
 
}

export default VerifyToken;