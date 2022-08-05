import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.png'
import {useCookies} from 'react-cookie';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import styles from './styles/siteHeader.module.css'

export default function SiteHeader() {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const handleRemoveCookie = () => {
    console.log('cookie func called');
    console.log(cookies);
    removeCookie('token',  { path: '/' });
    console.log(cookies);

  }
  return (
    <Navbar className={`${styles.topHeader} navbar-dark bg-dark`} sticky='top'>
      <div class="container-fluid">
          <Link class="navbar-brand" to='/homepage'>
            <Navbar.Brand href="homepage">
              <img
                alt=""
                src={Logo}
                width="45"
                height="45"
                className=" align-top"
              />
            </Navbar.Brand>
        </Link>
      </div>
  
      <Nav className={`${styles.menuLinks}`}>
        <Link to="/homepage" className="btn-1"><h3>Stories</h3></Link>
        <Link to='/' className=""><h3>Logout</h3></Link>
        <Link to='/' className="" onClick={handleRemoveCookie}><h3>Account</h3></Link>
      </Nav>  
    </Navbar>
  )
}