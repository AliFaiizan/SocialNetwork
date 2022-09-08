import React from 'react'
import "./styles.css"
import {Formik,Form} from 'formik';
import { Link } from 'react-router-dom';

export default function Login() {
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
              <Formik>
                {(formik) => {
                  return (
                    <Form>
                      <input type="text" />
                      <input type="text" />
                      <button type="submit" className='blue-btn'>Login</button>
                    </Form>
                  );
                }}
              </Formik>
              <Link to="/forgotPassword" className='forget-password'>ForgotPassword</Link>
              <div className="sign-spliter" > </div>
              <button className="blue-btn open-signup">Create Account</button>

            </div>
            <Link to="/" className='sign-extra' >
              <b>Create a Page </b>
              for a celebrity brand or business
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
