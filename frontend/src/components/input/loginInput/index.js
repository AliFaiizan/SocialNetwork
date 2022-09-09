import { ErrorMessage, useField } from 'formik';
import React from 'react'
import './loginInputstyles.css'


export default function LoginInput({placeholder,bottom,...props}) {

   const [field,meta] = useField(props)
  return (
    <div className="input-wrap">
      {meta.touched&&meta.error&& !bottom &&
      <Error field={field}/>}
      <input
        className={meta.touched && meta.error ? "input-error-border" : ""}
        {...field}
        {...props}
        name={field.name}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && bottom && <Error field={field} bottom />}
      {meta.touched && meta.error && (
        <i className="error_icon" style={{ top: `${!bottom && "63%"}` }}></i>
      )}
    </div>
  );
} 

const Error=({field,bottom}) => {
    
    if(bottom){
        return (
          <div className="input-error">
              <ErrorMessage name={field.name} />
              <div className="error-arrow-bottom"></div>
          </div>
        )}else if(!bottom){
            
            return (
              <div className="input-error">
                <ErrorMessage name={field.name} />
                <div className="error-arrow-top"></div>
              </div>
            );
        }
        
    
}
