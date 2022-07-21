import { useCookies } from "react-cookie";
//import { Outlet, useLocation, Navigate } from "react-router-dom";

const VerifyToken = (token) => {
    //const location = useLocation()
    const [cookies] = useCookies(['token'])
    const url = 'http://localhost:1337/api/reviews'

    const VerifyCall = async () => {    
        fetch(url, {
            method: 'Get',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${cookies.token}`,
            },
        })
        .then(async res => {
            console.log(res)
            return(
                res.status === 200 ? true : console.log('invalid token')
            );
        })
        .catch(err => {
            console.log(err);
        })
    }
    
}
export default VerifyToken;