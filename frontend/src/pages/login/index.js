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
    email:Yup.string().email('Must be a valid Email').required("Email is required")
    ,
    password:Yup.string().required('Password in required')

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
                      />
                      <LoginInput
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleLoginChange}
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
      </div>
    </div>
  );
}
