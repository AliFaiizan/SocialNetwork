import { Form, Formik } from 'formik'
import React ,{useState} from 'react'
import AuthInput from '../input/authInput';
import * as Yup from 'yup';

export default function Register() {


const [user, setUser] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    byear:'',
    bmonth:'',
    bday:'',
    gender:''
});
const {firstname,lastname,email,password,byear,bmonth,bday,gender}=user

const handleRegisterChange=(e) => {
  const {name,value}=e.target;

  setUser({...user,[name]:value})
}

const registerValidation = Yup.object({
  firstname: Yup.string()
    .required("First Name is required")
    .length(3,"Name length should be greater than 3 chracters"),
  lastname: Yup.string().required("Last name is required"),
});
  return (
    <div className='blur '>
    <div className='register'>
        <div className='register-header'>
            <i className='exit-icon'></i>
            <span>Sign Up</span>
            <span>It's quick and easy</span>
            <Formik
            enableReinitialize
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
                            placeholder="Last Name"
                            onChange={handleRegisterChange}
                            value={lastname}
                          />
                        </div>
                      </Form>
                    );
                 }}
            </Formik>
        </div> 
    </div>

    </div>
)
}
 