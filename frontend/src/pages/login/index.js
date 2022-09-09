import React, { useState } from 'react'
import "./styles.css"
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/input/loginInput';

const loginInfo={
  email:'',
  password:''
}

export default function Login() {
  const [login,setLogin] = useState(loginInfo)

  const {email,password}=login;

  const handleLoginChange=(e) => { 
      const {name,value} =e.target;
      setLogin({
        ...login,
        [name]:value
      })
   }

  const loginValidation=Yup.object({
    email:Yup.string().required("Email is required").email('Must be a valid Email')
    ,
    password:Yup.string().required('Password is required')

  })

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-wrap">
          <div className="login-1">
            <img src="../../icons/facebook.svg" alt="facebookicon" />
            <span>
              Facebook helps you connect and share with the people in you life
            </span>
          </div>
          <div className="login-2">
            <div className="login-2-wrap">
              <Formik
                enableReinitialize
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {(formik) => {
                  return (
                    <Form>
                      <LoginInput
                        type="text"
                        name="email"
                        placeholder="Enter you email or phone number"
                        onChange={handleLoginChange}
                        value={email}
                      />
                      <LoginInput
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleLoginChange}
                        value={password}
                        bottom
                      />
                      <button type="submit" className="blue-btn">
                        Login
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <Link to="/forgotPassword" className="forget-password">
                ForgotPassword
              </Link>
              <div className="sign-spliter"> </div>
              <button className="blue-btn open-signup">Create Account</button>
            </div>
            <Link to="/" className="sign-extra">
              <b>Create a Page </b>
              for a celebrity brand or business
            </Link>
          </div>
        </div>

        <footer className="login-footer">
          <div className="login-footer-wrap">
            <Link to="/">English(UK)</Link>
            <Link to="/">Français(FR)</Link>
            <Link to="/">العربية</Link>
            <Link to="/">ⵜⴰⵎⴰⵣⵉⵖⵜ</Link>
            <Link to="/">Español (España)</Link>
            <Link to="/">italiano</Link>
            <Link to="/">Deutsch</Link>
            <Link to="/">Português (Brasil)</Link>
            <Link to="/">हिन्दी</Link>
            <Link to="/">中文(简体)</Link>
            <Link to="/">日本語</Link>
            <Link to="/" className="footer-square">
              <i className="plus-icon"></i>
            </Link>
          </div>
          <div className="footer-splitter"></div>
          <div className="login-footer-wrap">
            <Link to="/">Sign Up</Link>
            <Link to="/">Log in</Link>
            <Link to="/">Messenger</Link>
            <Link to="/">Facebook Lite</Link>
            <Link to="/">Watch</Link>
            <Link to="/">Places</Link>
            <Link to="/">Games</Link>
            <Link to="/">Marketplace</Link>
            <Link to="/">Facebook Pay</Link>
            <Link to="/">Oculus</Link>
            <Link to="/">Portal</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Bulletin</Link>
            <Link to="/">Local</Link>
            <Link to="/">Fundraisers</Link>
            <Link to="/">Services</Link>
            <Link to="/">Voting Information Centre</Link>
            <Link to="/">Groups</Link>
            <Link to="/">About</Link>
            <Link to="/">Create ad</Link>
            <Link to="/">Create Page</Link>
            <Link to="/">Developers</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">
              AdChoices
              <i className="adChoices-icon"></i>
            </Link>
            <Link to="/">Terms</Link>
            <Link to="/">Help</Link>
          </div>
          <div className="login-footer-wrap">
            <Link to="/" style={{ fontSize: "12px", marginTop: "10px" }}>
              Meta © 2022
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
