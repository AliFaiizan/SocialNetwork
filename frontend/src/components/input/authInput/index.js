import { ErrorMessage, useField } from 'formik';
import React from 'react'
import './loginInputstyles.css'
import {useMediaQuery} from 'react-responsive';

export default function LoginInput({placeholder,bottom,...props}) {
   const desktopView= useMediaQuery({
    query:"(min-width:850px)"
   })
   
   const [field,meta] = useField(props)
  return (
    <div className="input-wrap">
      {meta.touched && meta.error && !bottom && (
        <Error field={field} desktopView={desktopView} />
      )}
      <input
        className={meta.touched && meta.error ? "input-error-border" : ""}
        {...field}
        {...props}
        name={field.name}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && bottom && (
        <Error field={field} desktopView={desktopView} bottom />
      )}

      {/* icon */}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!bottom && !desktopView && '60%' } ` }}
        ></i>
      )}
    </div>
  );
} 

const Error=({field,bottom,desktopView}) => {
    console.log(desktopView)
    if(bottom){
        return (
          <div className={desktopView ? "input-error-desktop" : "input-error"}>
            <ErrorMessage name={field.name} />
            <div
              className={
                desktopView ? "error-arrow-desktop" : "error-arrow-bottom"
              }
            ></div>
          </div>
        );}else if(!bottom){
            
            return (
              <div className={desktopView?"input-error-desktop":"input-error"}>
                <ErrorMessage name={field.name} />
                <div className={desktopView?"error-arrow-desktop":"error-arrow-top"}></div>
              </div>
            );
        }
        
    
}
