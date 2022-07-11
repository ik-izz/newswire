import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.png'

export default function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/"><h1>Stories</h1></Link>
      <Link to='/Login'><h3>Login</h3></Link>
      <img 
      className='logo'
      src={Logo}
      />
    </div>
  )
}