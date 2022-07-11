import axios from 'axios'
import React, {useState} from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:1337/api/auth/local', {
      identifier: formData.userName,
      password: formData.password
      })
      .then((response) => {
        console.log('user profile', response.data.user);
        console.log( 'toke:' ,response.data.jwt);
        console.log(response.data.user);
        // <Routes>
        // <Route path="/" element={response.data.user.confirmed ? <Navigate to='/homepage' /> : <p>login failed</p>} />
        // </Routes>
        response.data.user.confirmed && navigate('/homepage')
      })
    .catch((error) => {
      window.alert( error.response.data.error.message)
      console.log('an error occurred:', error)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label htmlFor='Name'>UserName</label>
        <input 
          type='text' 
          name='title'
          placeholder='username'
          autoComplete='new-username'
          value={formData.title} 
          onChange={(e) => {setFormData({...formData, userName: e.target.value})}}
        />

        <label htmlFor='Password'>Password</label>
        <input
          type='password'
          name='password' 
          placeholder='password'
          autoComplete='new-password'
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
