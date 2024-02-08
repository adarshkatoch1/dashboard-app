import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Formstyle from "./Formstyle.css";
import Form2 from "./Form2.js";
// import Form2Component from './Form2';
// import SimpleDashboard from './Dashboard';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas/index1.jsx';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js';
import { TextField } from '@mui/material';
import {Box} from '@mui/material';
import {CssBaseline} from '@mui/material';
import { Button } from '@mui/material';
import Container from "@mui/material/Container";





const initialValues = {
  email: "",
  password: ""
}
const MyFormComponent = () => {



  const navigates =useNavigate();

  //creating state for holding error message..
  const [errorMessage, setErrormessage] = useState('');


 //Handle sign-up logic here..
//  const handleSignUp = () => {
//   //handle sign-up logic here..

//   //redirect to login page after successfully registration
//   navigate('/Form');
//  }
 


//defining ref for dom manuplation
const btnRef = useRef();

  // Handle form input changes...
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, action) => {
      try {
        const response = await fetch('http://localhost:8000/Form/login_form.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
        console.log(responseData);
        //setEmailNotExists(true);
        if(responseData.message==true)
        {
        // Store the user ID and name in session storage
         sessionStorage.setItem('id',responseData.id);
        //  sessionStorage.setItem('name', responseData.name);

           // Store the user ID in the global context
          //  login({ id: responseData.id });


         navigates('/Dashboard');
          action.resetForm();
          
        }else {
          setErrormessage('Invalid username or password');
        }
        
  
        // You can handle the response data here
  
        // Reset the form after successful submission
       
  
        // If you want to navigate after submission, you can use a navigation library
        // For example, if you are using React Router, you can navigate like this:
       
  
      } catch (error) {
        console.error('Error:', error.message);
      }

    },
  });



//changing backgroundcolor of button
  // useEffect(() => {
  //   btnRef.current.style.backgroundColor = "blueviolet"
  // }, []);
  
  

   


  return (
<>
{/* //creating routing whenever user login he will redirected to dashboard */}


{/* <div className='form-container'> */}
<CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: 'lightblue',
            minHeight: '600px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: 'auto',
          }}
        >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        {errorMessage && <p className='form-errors'>{errorMessage}</p>}
        
        <Box sx={{ m: 5, width: '50ch' }}>
          <TextField
            id="email"
            required
            label="Email"
            variant="outlined"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
           
          />
          {errors.email && touched.email && (
            <p className='form-errors'>{errors.email}</p>
          )}
        </Box>

        <Box sx={{ m: 5, width: '50ch' }}>
          <TextField
            id="password"
            required
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className='form-errors'>{errors.password}</p>
          )}
        </Box>

        <Button type="submit" id='btn' ref={btnRef} variant="contained">
          Submit
        </Button>
      </form>
      </Box>
      </Container>
    {/* </div> */}

    {/* Sign up link start here */}
    <nav>
          <ul>
            <li>
        Don't have an account? <Link to="/form2">Sign-up</Link>
            </li>
          </ul>
        </nav>

        <Footer />
      
    </>
   

  )
 
  }

 
export default  MyFormComponent;
