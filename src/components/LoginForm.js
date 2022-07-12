import axios from 'axios'
import React, { useState} from 'react'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const SignIn = () => {
  const {setAuth} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/homepage';

  const [formData, setFormData] = useState({
    
    userName: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:1337/api/auth/local', {
      identifier: formData.userName,
      password: formData.password
      })
      .then((response) => {
        console.log('user profile', response?.data?.user);
        console.log( 'token:' ,response?.data?.jwt);

        const token = response?.data?.jwt;
        //FIXME!!! need to set access based on roles
        const roles = response?.data?.roles;

        setAuth({ token, roles, status:true})

        //upon successful login it navigates user to page they came from,
        // if no path exists it will mavigate them to the homepage
        navigate(from, {replace : true});
        // response.data.user.confirmed && navigate('/homepage');

      })
    .catch((error) => {
      window.alert( error.response.data.error.message)
      console.log('an error occurred:', error)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label htmlFor='username'>UserName:</label>
        <input 
          type='text' 
          id='username'
          placeholder='username'
          autoComplete='off'
          value={formData.title} 
          onChange={(e) => {setFormData({...formData, userName: e.target.value})}}
          required
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          placeholder='password'
          value={formData.password} 
          onChange={(e) => {setFormData({...formData, password: e.target.value})}}
        ></input>
        <input type='submit' value='submit'
        //  onClick={() => navigate('/homepage')}
         />
    </form>
  )
}

export default SignIn
