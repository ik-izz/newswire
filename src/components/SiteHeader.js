import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.png'
import {useCookies} from 'react-cookie';

export default function SiteHeader() {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const handleRemoveCookie = () => {
    console.log('cookie func called');
    console.log(cookies);
    removeCookie('token',  { path: '/' });
    console.log(cookies);

  }
  return (
    <div className="site-header">
      <div className='logoContainer'>
        <div className='logo'>
          <img 

          src={Logo}
          />
        </div>
    </div>
    
    <div className='login-container'>
      <Link to="/homepage"><h1>Stories</h1></Link>
      <Link to='/'><h3>Login</h3></Link>
      <Link to='/' onClick={handleRemoveCookie}><h3>Logout</h3></Link>
    </div>  
    </div>
  )
}