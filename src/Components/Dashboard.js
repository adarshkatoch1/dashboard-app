import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Das from "./Das.css";
import { useEffect } from 'react';

const SimpleDashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Use navigate function to navigate to another page
    navigate('/Profile');
  };

   
  
  //logout button function..
   const handleLogout = () => {
    sessionStorage.removeItem('id');
    navigate('/Form');
  };



 //add pages function..
 const handlenewPage = () => {
   // Use navigate function to navigate to another page
   navigate('/Pages');
 }




  // Check if the user is logged in
  useEffect(() => {
    const userId = sessionStorage.getItem('id');

    if (!userId) {
      // Redirect to the login page if the user is not logged in
      navigate('/Form');
    }
  }, [navigate]);



  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  My Dashboard
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Pages" onClick={handlenewPage}>
                Pages
                </a>
              </li>
              <li className="nav-item">
                {/* Use onClick to trigger the handleClick function */}
                <a className="nav-link" href="/Profile" onClick={handleClick}>
                  Go to Profile
                </a>
              </li>
              <li>
              <button className="logout-button" onClick={handleLogout}>
                  Log out
                </button>
              </li>
              <br></br>
              {/* <li>
                <button onClick={handlenewPage}>Add pages</button>
              </li> */}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="container mt-4">
            <h2>Dashboard</h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimpleDashboard;
