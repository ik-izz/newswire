import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.png'
import {useCookies} from 'react-cookie';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SiteHeader() {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const handleRemoveCookie = () => {
    console.log('cookie func called');
    console.log(cookies);
    removeCookie('token',  { path: '/' });
    console.log(cookies);

  }
  return (
    <Navbar sticky="top" className="site-header" expand="lg">
      <div className='logoContainer'>
        <Navbar.Brand className='logo'>
          <img 

          src={Logo}
          />
        </Navbar.Brand>
    </div>
    
    <div className='login-container'>
      <Link to="/homepage"><h3>Stories</h3></Link>
      <Link to='/' onClick={handleRemoveCookie}><h3>Logout</h3></Link>
      <Link to="/homepage"><h3>Account</h3></Link>
    </div>  
    </Navbar>
  )
}