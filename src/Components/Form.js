import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Formstyle from "./Formstyle.css";
import Form2 from "./Form2.js";
import { useFormik } from 'formik';
import { signupSchema } from '../schemas/Index.jsx';

const initialValues = {
  email: "",
  password: ""
}

const Form = () => {

  const{values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values)
      
      action.resetForm();
    }
  })

  

  

   



  return (
    <>
    <h2>Login</h2>
    <div className='form-container2'>
    <form className='form2' onSubmit={handleSubmit}>
      <label>
        <h5>Email:</h5>
        <input typeof='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} ></input>
      </label>
      { errors.email && touched.email ? ( <p className='form-errors'>{errors.email}</p>) :null}
      <label>
      <h5>Password:</h5>
        <input type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} ></input>
      </label>
      { errors.password && touched.password ? ( <p className='form-errors'>{errors.password}</p>) :null}
      <input type="submit" id='btn' value="Submit" />
      
      </form>
     </div>
    </>
  )
  }

 
export default Form;
