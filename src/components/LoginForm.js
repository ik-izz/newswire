import React, { useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import {useCookies} from 'react-cookie';
import axios from 'axios'

// Styling
import styles from './styles/loginForm.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import vngle3 from '../static/vngle3.mp4'

// Footer Icons
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";


const SignIn = () => {
  // Url needs to be changed to the proper server url and it needs to be stored in env file for best practice
  const url = 'http://ec2-34-207-151-192.compute-1.amazonaws.com/api/auth/local'

  //uses the context hook so the token, cookies and roles(not yet implemented) can be accessed globally
  const {setAuth} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/homepage';

  // Stores the form data in state
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  })

  // Using the react cookie library https://github.com/reactivestack/cookies/tree/master/packages/react-cookie
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  // Submits form data to Strapi (V4)
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(url, {
          identifier: formData.userName,
          password: formData.password
      })
      .then((response) => {
        const token = response?.data?.jwt;

        //FIXME!!! need to set access based on roles
        const roles = response?.data?.roles;

        setCookie( 'token', token, {path:'/', maxAge: 6000} );

        // Allows the token, cookie, and roles(not yet implemented) to be accessed globally
        setAuth({ token, roles, cookies});

        //upon successful login it navigates user to page they came from,
        // if no path exists it will mavigate them to the homepage
        navigate(from, {replace : true});

      })
    .catch((error) => {
      window.alert( error.response.data.error.message)
      console.log('an error occurred:', error)
    })
  }

  return (
    // Login page background video
    <div classname="overlay" >
      <video  autoplay='autoplay' muted='muted' loop='loop' className={styles.loginVideo}>
         <source src={vngle3} type="video/mp4" />
      </video>
      <div className={styles.videoCover}></div>
    <div className={`${styles.formContainer}`}>

    {/* Login form */}
    <section className={`Form`}>
          <div className={`${styles.container}`}>
              <div className={`${styles.row} row`}>
                  <div className={`p-5`}>
                      {/* <h1 className={`font-weight-bold py-3`}>Vngle</h1> */}
                      <h4>Sign into your Vngle account</h4>
                      <form onSubmit={handleSubmit}>
                          <div className={`form-row`}>
                              <div className={``}>
                              <input 
                                type='text' 
                                id='username'
                                placeholder='username'
                                autoComplete='off'
                                className={`form-control my-5 p-4`}
                                value={formData.title} 
                                onChange={(e) => {setFormData({...formData, userName: e.target.value})}}
                                required
                              />
                              </div>
                          </div>

                          <div className={`form-row`}>
                            <div className={``}>
                            <input
                              type='password'
                              id='password'
                              placeholder='password'
                              className={`form-control my-3 p-4`}
                              value={formData.password} 
                              onChange={(e) => {setFormData({...formData, password: e.target.value})}}
                            ></input>
                            </div>
                          </div>

                          <div className={`form-row d-flex justify-content-center `}>
                            <div className={`login col-lg-9 `}>
                                <button 
                                onClick={handleSubmit}
                                type="button" className={`${styles.btn1} mt-4 mb-5`}>Login</button>
                            </div>
                          </div>
                          <a href="#">Forgot Password</a>
                          <p>Don't have an account? <a href="#">Register here</a></p>
                      </form>
                      
                  </div>
              </div>
          </div>
      </section>
     
    {/* Footer */}
    </div>
    <Container as="footer" className="text-center">
        <Row>
          
          <Col className="mb-0">
          
          <Container>
          <h6>Follow us on social media for more</h6>
          
          <a href="https://www.instagram.com/vnglestories/" >
            <FiInstagram className='me-3'/>
          </a>
          
          
          <a href="https://www.facebook.com/vnglestories/" >
            <FiFacebook className='me-3'/>
          </a>
          
          
          <a href="https://www.linkedin.com/company/vngle/" >
            <FiLinkedin className='me-3'/>
          </a>
         
          <a href="https://twitter.com/vnglestories" >
            <FiTwitter className='me-3'/>
          </a>          
          </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn