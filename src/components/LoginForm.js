import axios from 'axios'
import React, { useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import {useCookies} from 'react-cookie';
import styles from './styles/loginForm.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";


const SignIn = () => {
  const url = 'http://ec2-34-229-6-6.compute-1.amazonaws.com/api/auth/local'
  const {setAuth} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/homepage';

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  })
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(url, {
      identifier: formData.userName,
      password: formData.password
      })
      .then((response) => {
        console.log('user profile', response?.data?.user);
        console.log( 'token:' ,response?.data?.jwt);

        const token = response?.data?.jwt;
        //FIXME!!! need to set access based on roles
        const roles = response?.data?.roles;

        setCookie( 'token', token, {path:'/', maxAge: 6000} );

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
    <div>
    <div className={`${styles.formContainer}`}>

    <section className={`Form my-0 mx-5`}>
          <div className={`${styles.container}`}>
              <div className={`${styles.row} row`}>
                  {<div className={`col-lg-5`}>
                  {/* Picture was here <img src={Logo} className={`img-fluid alt=`}/>*/}
                  </div>}
                  <div className={`col-lg-20 px-5 p-5`}>
                      {/* <h1 className={`font-weight-bold py-3`}>Vngle</h1> */}
                      <h4>Sign into your Vngle account</h4>
                      <form onSubmit={handleSubmit}>
                          <div className={`form-row`}>
                              <div className={`col-lg-12`}>
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
                            <div className={`col-lg-12`}>
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

                          <div className={`form-row d-flex justify-content-center`}>
                            <div className={`col-lg-9`}>
                                <button 
                                onClick={handleSubmit}
                                type="button" className={`${styles.btn1} mt-4 mb-5 mt-4`}>Login</button>
                            </div>
                          </div>
                          <a href="#">Forgot Password</a>
                          <p>Don't have an account? <a href="#">Register here</a></p>
                      </form>
                      
                  </div>
              </div>
          </div>
      </section>
     

    </div>
    <Container as="footer" className="text-center mt-0 footer">
        <Row>
          
          <Col className="mb-0">
          
          <Container className="mb-3 mt-3 mx-0">
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