import React, { useEffect, useState } from 'react';
import './profile.css'; // Import your external CSS file
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const userId = sessionStorage.getItem('id');
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });



  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  });





  //validation for edit form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { fname: '', lname: '', email: '', phone: '' };

    if (editedData.fname.trim() === '') {
      newErrors.fname = 'First name is required';
      isValid = false;
    }

    if (editedData.lname.trim() === '') {
      newErrors.lname = 'Last name is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(editedData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }



    // Add phone validation if needed
    // For simplicity, assuming a valid phone is any non-empty string
    if (editedData.phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8000/Form/update.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: userId,
            fname: editedData.fname,
            lname: editedData.lname,
            email: editedData.email,
            phone: editedData.phone,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        if (responseData.success) {
          toggleEditMode();
          sendUserIdToServer();
        } else {
          console.error('Update failed:', responseData.message);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  const handleInputChange = (e, field) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  useEffect(() => {
    if (userData) {
      setEditedData({
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        phone: userData.phone || '',
      });
    }
  }, [userData]);



  const sendUserIdToServer = async () => {
    try {
      const response = await fetch('http://localhost:8000/Form/profile.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setUserData(responseData.message);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    if (!userId) {
      navigate('/Form');
      return;
    }

    sendUserIdToServer();
  }, [userId, navigate]);

 

  //logout function...
  const handleLogout = () => {
    sessionStorage.removeItem('id');
    navigate('/Form');
  };


  
 //add pages function..
 const handlenewPage = () => {
  // Use navigate function to navigate to another page
  navigate('/Pages');
}





 //toggle edit mode...
  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };


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
                
                <a className="nav-link" href="/Profile" >
                  Go to Profile
                </a>
              </li>
              <li>
              <button className="logout-button" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </nav>


        {/* Main Content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="profile-container">
            <h1 className="head">Welcome User</h1>
            {userId && (
              <div>
                <p className="user-id">ID: {userId}</p>
                {userData && (
                  editMode ? (
                    <form onSubmit={handleSubmit}>
                      <label>First Name:</label>
                      <input
                        type="text"
                        value={editedData.fname}
                        onChange={(e) => handleInputChange(e, 'fname')}
                      />
                      <p className="error">{errors.fname}</p>
                      <br></br>

                      <label>Last Name:</label>
                      <input
                        type="text"
                        value={editedData.lname}
                        onChange={(e) => handleInputChange(e, 'lname')}
                      />
                      <p className="error">{errors.lname}</p>
                      <br></br>
                      <label>Email:</label>
                      <input
                        type="text"
                        value={editedData.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                      />
                      <p className="error">{errors.email}</p>
                      <br></br>
                      <label>Mobile:</label>
                      <input
                        type="tel"
                        value={editedData.phone}
                        onChange={(e) => handleInputChange(e, 'phone')}
                      />
                      <p className="error">{errors.phone}</p>
                      <br></br>
                      <button type="button" onClick={toggleEditMode}>
                        Cancel
                      </button>
                      <br></br>
                      <br></br>
                      <button type="submit">Save Changes</button>
                    </form>
                  ) : (
                    <form className='profile-form'>
                    <div className="profile-picture">
                     <img src='https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-02.jpg' alt="Profile" />
                      </div>
                      <p className="user-info">First Name: {userData.fname}</p>
                      <p className="user-info">Last Name: {userData.lname}</p>
                      <p className="user-info">Email: {userData.email}</p>
                      <p className="user-info">Phone: {userData.phone}</p>
                    </form>
                  )
                )}
                {/* <button onClick={handleLogout} className="logout-button">
                  Log out
                </button> */}
                <button onClick={toggleEditMode} className="edit-button">
                  Edit
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
