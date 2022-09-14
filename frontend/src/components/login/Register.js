import { Form, Formik } from 'formik'
import React ,{useState} from 'react'
import AuthInput from '../input/authInput';
import * as Yup from 'yup';

export default function Register({formState}) {


const [user, setUser] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    byear:new Date().getFullYear(),
    bmonth:new Date().getMonth(),
    bday:new Date().getDay(),
    gender:''
});
const {
  firstname,
  lastname,
  email,
  password,
  byear,
  bmonth,
  bday,
  gender}=user

const years= Array.from(new Array(100),(val,index) => { 
  return byear-index;
 })

const months= Array.from(new Array(12),(val,index) => { 
  return index+1;
 })

const getDay=() => { 
  return new Date(byear,bmonth,0).getDate();
 }

const days = Array.from(new Array(getDay()), (val, index) => {
   return 1+index;
 });


const handleRegisterChange=(e) => {
  const {name,value}=e.target;

  setUser({...user,[name]:value})
}


const registerValidation = Yup.object({
  firstname: Yup.string()
    .required("First Name is required")
    .length(3,"Name length should be greater than 3 chracters"),
  lastname: Yup.string().required("Enter you Last name"),
  email:Yup.string().required('Email is required'),
  password:Yup.string().required('Password is required').min(8,'Password should be atleat 8 characters long'),
  gender:Yup.string()
});

  return (
    <div className="blur ">
      <div className="register">
        <div className="register-header">
          <i className="exit_icon" onClick={formState}></i>
          <span className="signuptitle">Sign Up</span>
          <span className="singupdescription">It's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            firstname,
            lastname,
            email,
            password,
            bday,
            bmonth,
            byear,
            gender

          }}
          validationSchema={registerValidation}
        >
          {(formik) => {
            return (
              <Form className="register-form">
                <div className="reg-line">
                  <AuthInput
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleRegisterChange}
                    value={firstname}
                  />

                  <AuthInput
                    type="text"
                    name="lastname"
                    placeholder="Surname"
                    onChange={handleRegisterChange}
                    value={lastname}
                    rightErrorLog={false}
                  />
                </div>
                <div >
                  <AuthInput
                    type="text"
                    name="email"
                    placeholder="Email or Phone Number"
                    onChange={handleRegisterChange}
                    value={email}
                  />
                </div>
                <div >
                  <AuthInput
                    type="password"
                    name="password"
                    placeholder="New Password"
                    onChange={handleRegisterChange}
                    value={password}
                  />
                </div>
                <div className="reg-col">
                  <div className="reg-line-header">
                    Date of birth
                    <i className="info_icon" />
                  </div>
                  <div className="reg-grid">
                    <select
                      name="bday"
                      value={bday}
                      onChange={handleRegisterChange}
                    >
                      {days.map((day, i) => {
                        return (
                          <option value={day} key={i}>
                            {day}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      name="bmonth"
                      value={bmonth}
                      onChange={handleRegisterChange}
                    >
                      {months.map((month, i) => {
                        return (
                          <option value={month} key={i}>
                            {month}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      name="byear"
                      value={byear}
                      onChange={handleRegisterChange}
                    >
                      {years.map((year, i) => {
                        return (
                          <option value={year} key={i}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="reg-col">
                  <div className="reg-line-header">
                    Gender
                    <i className="info_icon" />
                  </div>
                  <div className="reg-grid">
                    <label htmlFor="Male">
                      Male
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={handleRegisterChange}
                      />
                    </label>
                    <label htmlFor="Female">
                      Female
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={handleRegisterChange}
                      />
                    </label>
                    <label htmlFor="Other">
                      Other
                      <input
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                        onChange={handleRegisterChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="reg-info">
                  By Clicking SignUp, you agree to our{" "}
                  <span>Terms, Data Policy</span> and <span>cookie policy</span>{" "}
                  you may recieve SMS notification from us and can opt at any
                  time
                </div>
                <div className="reg-button-wrapper">
                  <button type="submit" className="blue-btn open-signup">
                    Sign Up
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
 