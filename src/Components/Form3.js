// form.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import FormComponent from './Form';
import Form2Component from './Form2';
import SimpleDashboard from './Dashboard';
import Profile from './Profile';
import Pages from './Pages';
import NotFound from './NotFound'; // Import the NotFound component
import AboutUsPage from './Aboutpage';
import Page from './Page';
const Form3 = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/form" element={<FormComponent />} />
          <Route path="/form2" element={<Form2Component />} />
          <Route path="/Dashboard" element={<SimpleDashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path='/Aboutpages' element={<AboutUsPage />} />
          <Route path="/about/:id" element={<Page />} />
        <Route path="/" element={<Outlet />}/>
        {/* Add more routes as needed */}
          {/* The wildcard route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <nav>
        
        </nav>
      </div>
    </Router>
  );
};

export default Form3;
