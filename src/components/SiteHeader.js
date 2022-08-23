import React from 'react'
import { Link } from 'react-router-dom'
import {useCookies} from 'react-cookie';

// Styling
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../static/logo.png'
import styles from './styles/siteHeader.module.css'

export default function SiteHeader() {
  // Using the react cookie library https://github.com/reactivestack/cookies/tree/master/packages/react-cookie
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  // Removes the stored cookie when a user logs out
  const handleRemoveCookie = () => {
    removeCookie('token',  { path: '/' });
  }

  return (
    <Navbar className={`${styles.topHeader} navbar-dark `} sticky='top'>
      <div class="container-fluid">
          <Link class="navbar-brand" to='/homepage'>
            <Navbar.Brand href="homepage">
              <img
                alt=""
                src={Logo}
                width="60"
                height="65"
                className=" align-top"
              />
            </Navbar.Brand>
        </Link>
      </div>
      
    {cookies?.token
    ?
      <Nav className={`${styles.menuLinks}`}>
        <Link to="/homepage" className="btn-1"><h3>Stories</h3></Link>
        <Link to='/' className="" ><h3>Account</h3></Link>
        <Link to='/' className="" onClick={handleRemoveCookie}><h3>Logout</h3></Link>
      </Nav>  
    :
      <Nav className={`${styles.menuLinks}`}>
        <Link to='/' className=""><h3>Login</h3></Link>
      </Nav>  }
    </Navbar>
  )
}