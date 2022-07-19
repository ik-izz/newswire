import React from "react";
 import useVerify from '../hooks/useVerify'
 import axios from "axios";
 import useFetch from '../hooks/useFetch'
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import VerifyToken from "../components/VerifyToken";
//import { useCookies } from "react-cookie";


const Test = () => {
    const [cookies] = useCookies(['token']);
    const { status } = useVerify('http://localhost:1337/api/posts', cookies?.token)
    console.log(`status is: ${status}`)

    return (
    status == 200
    ? <div>status:ok</div>
    : <p>status: bad</p>)

}
export default Test;