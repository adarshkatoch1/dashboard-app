import React, { useState } from 'react';
import Formstyle from "./Formstyle.css";
import { useFormik } from 'formik';
import { signupSchema } from '../schemas/Index';
import { useNavigate } from 'react-router-dom';



 // Define state variables for form data
const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: ""
}

const MyFormComponent = () => {

const navigate =useNavigate();

//  //Handle sign-up logic here..
//  const handleSignUp = () => {
//   //handle sign-up logic here..

//   //redirect to login page after successfully registration
//   navigate('/Form');
//  }
 

  // Handle form input changes
  const{values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values)
      
     action.resetForm()
    }
  })

  // Handle form submission
  // const handleSubmit= async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:8000/Form/register.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const responseData = await response.json();
  //     console.log(responseData);

  //     // You can handle the response data here
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // };


  //Handler for button click

  const handleSignUp = () => {
    // Check if all required fields are filled
    if (values.fname.trim() !== '' && values.lname.trim() !== '' && values.email.trim() !== "" && values.phone.trim() !== "" && values.password.trim() !== "" ) {
      // If all fields are filled, navigate
      navigate('/Form');
    } else {
      // If any required field is not filled, show an error or take appropriate action
      alert('Please fill in all required fields.');
    }
  };








  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
    <h1>Create Account</h1>
      <label>
       <h5>First Name:</h5>
      
        <input
          type="text"
          name="fname"
          value={values.fname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <br /><br></br>
      { errors.fname && touched.fname ? ( <p className='form-errors'>{errors.fname}</p>) :null}

      <label>
        <h5>Last name:</h5>
        <input
          type="text"
          name="lname"
          value={values.lname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <br /><br></br>
      { errors.lname && touched.lname ? ( <p className='form-errors'>{errors.lname}</p>) :null}

      <label>
      <h5>Email:</h5>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <br /><br></br>
      { errors.email && touched.email ? ( <p className='form-errors'>{errors.email}</p>) :null}
      <label>
      <h5>Phone:</h5>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <br /> <br></br>
      { errors.phone && touched.phone ? ( <p className='form-errors'>{errors.phone}</p>) :null}
      <label>
      <h5>Password:</h5>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <br /> <br></br>
      { errors.password && touched.password ? ( <p className='form-errors'>{errors.password}</p>) :null}

      <button type="submit" id='btn' onClick={handleSignUp} >Submit</button>
    </form>
    </div>
  );
};

export default MyFormComponent;

