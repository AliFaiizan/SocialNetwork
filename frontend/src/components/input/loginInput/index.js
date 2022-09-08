import { ErrorMessage, useField } from 'formik';
import React from 'react'
import './loginInputstyles.css'


export default function LoginInput({placeholder,bottom,...props}) {

   const [field,meta] = useField(props)
   console.log(field)
  return (
    <div className="input-wrap">
      {meta.touched && meta.error && !bottom ? (
        <div className="input-error">
          <ErrorMessage name={field.name} />
        </div>
      ) : (
        <></>
      )}
      {meta.touched && meta.error && <div className="error-arrow-bottom"></div>}
      <input
        className={meta.touched && meta.error ? "input-error-border" : ""}
        {...field}
        {...props}
        name={field.name}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && bottom ? (
        <div className="input-error">
          <ErrorMessage name={field.name} />
        </div>
      ) : (
        <></>
      )}
      {meta.touched && meta.error && <div className="error-arrow-bottom"></div>}
      {meta.touched && meta.error && (
        <i className="error_icon" style={{ top: `${!bottom && "63%"}` }}></i>
      )}
    </div>
  );
} 
