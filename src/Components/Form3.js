// form.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormComponent from './Form';
import Form2Component from './Form2';

const Form3 = () => {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/form" index element={<FormComponent />} />
          <Route path="/form2" element={<Form2Component />} />
        </Routes>
        <nav>
          <ul>
            <li>
        Don't have an account? <Link to="/form2">Sign-up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default Form3;
