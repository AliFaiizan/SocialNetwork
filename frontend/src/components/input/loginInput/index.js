import { ErrorMessage, useField } from 'formik';
import React from 'react'
import './loginInputstyles.css'
export default function LoginInput({placeholder,...props}) {

   const [field,meta] = useField(props)
  return (
    <div className="input-wrap">
      <div>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>
      <input
        className={meta.touched && meta.error && "input-error-border"}
        {...field}
        {...props}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
      />
      {meta.touched && meta.error}
    </div>
  );
}
