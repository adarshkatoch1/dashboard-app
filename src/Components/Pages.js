import React, { useState } from 'react';
import { useEffect } from 'react';
import pages from "./pages.css";
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill styles
import './imageUploader.css';
// Import the image uploader styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

const Pages = () => {
// const {pagesData, updatePagesData } = usePagesContext();

const [editorValue, setEditorValue] = useState('test2');
const [image, setImage] = useState('');




  // state variable to store data
  const [formdata, setFormdata] = useState({
    title: "",
    slug: "",
    discription: "",
    image: "",
    status: '1',
  });


  const [errors, setErrors] = useState({
    title: "",
    slug: "",
    discription: "",
    image : "",
    status:"",
  });


  //for storing id in session storage ...
  const userId = sessionStorage.getItem('id');

  // state for checking when the user click on add
  const [isOpenform, setIsOpenform] = useState(false);
  //isOpenform:To track whether the form should be open or closed.

  const [formsList, setFormsList] = useState([]);
  // State to store the list of forms

  // const [formsList, setFormsList] = useState([]);

  //add state to handle file input
  const [selectedFile, setSelectedFile] = useState(null);

  const [imageFile, setImageFile] = useState(null);
   // State variable to store success message
   const [successMessage, setSuccessmessage] = useState("");

  // State to track the selected form for editing on edit button
  const [selectedForm, setSelectedform] = useState({});

  // const formData = new FormData();
  // formData.append('file', file);
  



  //function for opening edit form ...
  const handleEdit = async (form) => {
    // Set the selected form for editing
    setSelectedform(form);
  
    // Set the form data with the details of the selected form.
    setFormdata({
      title: form.title || "",
      slug: form.slug || "",
      discription: form.discription || "",
      image : form.image || "",
      status: parseInt(form.status, 10) || 0, // Ensure it's parsed as a base-10 integer
    });
  
    // Open the form
    setIsOpenform(true);
  };
  

//function handle for editing form
const handleSubmitEdit = async () => {
  try {
    if (!selectedForm || !selectedForm.id) {
      console.error('No form selected for editing');
      return;
    }

    // Create a new FormData object
    const formData = new FormData();

    // Append form data to FormData object
    formData.append('id', selectedForm.id);
    formData.append('title', formdata.title);
    formData.append('slug', formdata.slug);
    formData.append('discription', editorValue);
    formData.append('status', formdata.status);

    // Append the new image file if it exists
    if (imageFile) {
      formData.append('image', imageFile);
    }

    // Make the API call to update the form data
    const response = await fetch(`http://localhost:8000/Form/Page_update.php`, {
      method: 'POST',
      body: formData, // Send FormData instead of JSON.stringify
    });

    if (response.ok) {
      // If the update is successful, update the formsList state
      const updatedFormsList = formsList.map((f) => f.id === selectedForm.id ? { ...f, ...formdata } : f);
      setFormsList(updatedFormsList);

      // Close the form
      setIsOpenform(false);
      setSelectedform(null);

      console.log('Form Data updated successfully:', formdata);
      console.log(selectedForm.id)
      alert("Form updated successfully");
    } else {
      console.error('Error updating form data:', response.statusText);
      alert("Error updating form data");
    }
  } catch (error) {
    console.error('Error updating form data:', error);
    alert("Error updating form data");
  }
};

  



 const navigate = useNavigate();








// Function to handle deleting all records..
const handleDelete = async (form) => {
  // Ask the user for confirmation
  const isConfirmed = window.confirm("Are you sure you want to delete?");

  if (!isConfirmed) {
    return; // Do nothing if the user cancels the confirmation
  }

  try {
    // Make a DELETE request to delete the record..
    const response = await fetch(`http://localhost:8000/Form/delete_data.php?id=${form.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // If the deletion is successful, update the formsList state
      const updatedFormsList = formsList.filter((f) => f.id !== form.id);
      setFormsList(updatedFormsList);

      // Delete the associated file from the folder
      // const filename = form.image; // Assuming 'image' is the field storing the filename
      // const fileResponse = await fetch(`http://localhost:8000/uploads/${filename}`, {
      //   method: 'DELETE',
      // });

      // if (fileResponse.ok) {
      //   console.log('File deleted successfully');
      // } else {
      //   console.error('Error deleting file:', fileResponse.statusText);
      //   setSuccessmessage("Error deleting file"); // Set error message if file deletion fails
      // }

      // Set the success message 
      setSuccessmessage("Record deleted successfully");
      console.log('Record deleted successfully', response);
      alert("Record deleted successfully");

      // Add this line to log the response content
      console.log(await response.text());
    } else {
      console.error('Error:', response.statusText);
      setSuccessmessage("Error deleting record"); // Set error message if deletion of record fails
    }
  } catch (error) {
    console.error('Error:', error);
    setSuccessmessage("Error deleting record"); // Set error message if an error occurs
  }
};








// Function to fetch pages data...
const fetchPagesData = async () => {
  try {
    const response = await fetch('http://localhost:8000/Form/get_data.php');
    if (response.ok) {
      const responseData = await response.json();

      if (responseData.success) {
        const pagesData = responseData.data.map(page => ({
          ...page,
          imageUrl: `http://localhost:8000/Form/uploads/${page.image}` // Assuming the image file is stored in the 'uploads' directory
        }));
        console.log('Pages Data:', pagesData);
    
        console.log(formsList);
        console.log("Inside fetchPagesData function");
console.log("formsList before updating:", formsList);
setFormsList(pagesData);
console.log("formsList after updating:", formsList);

        setFormsList(pagesData);
      } else {
        console.error('Error in responseData:', responseData.message);
      }
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};



// ...

useEffect(() => {
  fetchPagesData();
}, []);
// Empty dependency array to run the effect only once when the component mounts

// ... (rest of your component code)
useEffect(() => {
  console.log('Forms List:', formsList);
}, [formsList]);






  // handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Perform validation only if the form is in edit mode and the input value is changing
    if (selectedForm && formdata[name] !== value) {
      let error = "";
      if (name === 'title' && value.length < 3) {
        error = "title must be more than 3 characters";
      } else if (name === "slug" && value.length < 6) {
        error = "slug must be more than 6 characters";
      } else if (name === 'status') {
        setFormdata((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  


  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };




// handle form submission..
 // Function to handle form submission
  


 const submitHandler = async (e) => {
  e.preventDefault();

  // Form validation
  if (formdata.title.length < 3 || formdata.slug.length < 6) {
    alert("Title must be at least 3 characters long and slug must be at least 6 characters long");
    return;
  }

  // Create a new FormData object
  const formData = new FormData();
  // Append form data to FormData object
  formData.append('title', formdata.title);
  formData.append('slug', formdata.slug);
  formData.append('discription', editorValue); // Make sure to update the key name if needed
  formData.append('status', formdata.status);
  formData.append('image', imageFile);

  try {
    const response = await fetch(selectedForm ? 'http://localhost:8000/Form/Page_update.php' : 'http://localhost:8000/Form/pages.php', {
      method: selectedForm ? 'PUT' : 'POST',
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.success) {
        setFormsList(responseData.data);
        // Call fetchPagesData to fetch the updated data after submitting the form
        fetchPagesData(); // Add this line
        setFormdata({
          title: "",
          slug: "",
          discription: "",
          image: "",
          status: '1', // Reset status to default..
        });
        setEditorValue("");
        setIsOpenform(false);
        setSelectedform(null);
        setSuccessmessage(responseData.message || "Record added successfully");
      } else {
        if (responseData.errors) {
          setErrors(responseData.errors);
        }
      }
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};






      //logout button function..
   const handleLogout = () => {
    sessionStorage.removeItem('id');
    navigate('/Form');
  };





  const handleCancel = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Clear all the validation errors
    setErrors({
      title: "",
      slug: "",
      discription: "",
      status: "",
    });
  
    // Reset the form data
    setFormdata({
      title: "",
      slug: "",
      discription: "",
      status: "",
    });
  
    // Set isOpenform state to false to hide the form
    setIsOpenform(false);
  
    // Clearing existing success message
    setSuccessmessage("");
  
    // Reset the selectedForm state
    setSelectedform(null);
  };
  
  const handleEditorChange = (value) => {
    setEditorValue(value);
  };


   const openForm = () => {
  // Reset the selectedForm state to null
  setSelectedform(null);
  // Open the form when the "Add" button is clicked
  setIsOpenform(true);
};





    useEffect(() => {
      if (selectedForm) {
        // Set the editor value to the original value when in edit mode
        setEditorValue(selectedForm.discription || '');
      } else {
        // Set the editor value to an empty string for a new form
        setEditorValue('');
      }
    }, [selectedForm]);

    
    //handleImage function here
    // const handleImageUpload = async (e) => {
    //   const file = e.target.files[0];
    
    //   try {
    //     // Create a FormData object to send the file as part of the request
    //     const formData = new FormData();
    //     formData.append('file', file);
    
    //     // Make a POST request to your image upload endpoint
    //     const response = await fetch('http://localhost:8000/Form/pages.php', {
    //       method: 'POST',
    //       body: formData,
    //     });
    
    //     if (response.ok) {
    //       // If the upload is successful, get the image URL from the response
    //       const imageUrl = await response.json();
    
    //       // Update the state with the image URL
    //       setImage(imageUrl);
    
    //       console.log('Image uploaded successfully:', imageUrl);
    //     } else {
    //       console.error('Error uploading image:', response.statusText);
    //     }
    //   } catch (error) {
    //     console.error('Error uploading image:', error);
    //   }
    // };
    
    


    
  return (
    
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  My Dashboard
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pages
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Profile">
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
      
      <button className='add-btn' onClick={openForm}>Add</button>

      {/* creating button using material UI */}
      {/* <Button variant="contained" onClick={openForm} >Add</Button> */}
      
     

  {/* Render the form only if isOpenform is true or selectedForm is not null */}
      {/* /* Render the form only if isOpenform is true */} 
{isOpenform && (
  <form onSubmit={submitHandler} className='form-container2' enctype="multipart/form-data">
          <label>
            Title:
            <input
              type='text'
              name='title'
              value={formdata.title}
              onChange={handleInputChange}
            />
            {errors.title && <span style={{color:'red'}}>{errors.title}</span>}
          </label>
          <label>
            Slug:
            <input
              type='text'
              name='slug'
              value={selectedForm ? selectedForm.slug : formdata.slug}
              onChange={handleInputChange}
            />
            {errors.slug && <span style={{color:'red'}}>{errors.slug}</span>}
          </label>
          <label>
            Description:
            <ReactQuill className='my-quill-editor-container'
            name='discription'
        value={editorValue}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block'],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean'],
          ],
        }}
        formats={[
          'header',
          'bold', 'italic', 'underline', 'strike',
          'color', 'background',
          'list', 'bullet',
          'blockquote', 'code-block',
          'script', 'sub', 'super',
          'indent', 'direction', 'size',
          'font', 'align',
          'clean',
        ]}
        theme="snow" // You can change the theme (snow, bubble, or another custom theme)
        placeholder="Type your text here..."
      />

<label>
  Image:
  {selectedForm.imageUrl && <img src={selectedForm.imageUrl} alt="Uploaded" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
  <input
    type='file'
    accept='image/*'
    onChange={handleImageChange}
  />
  {errors.image && <span style={{color:'red'}}>{errors.image}</span>}
</label>

         


          </label>
          <label>
            Status:
            <select
              name="status"
              value={formdata.status}
              onChange={handleInputChange}
            >
             
              <option value="1">Enable</option>
              <option value="0">Disable</option>
            </select>
          </label>
          <br />

          {/* material ui styling for buttons */}
<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
  <Button onClick={handleCancel} variant='contained' sx={{ width: '45%' }}>Cancel</Button>
  <Button onClick={handleSubmitEdit} variant='contained' sx={{ width: '45%' }}>Save</Button>
</Box>

          <input type='submit' name="submit" value="submit" />
        </form>

        
      )}




   {/*Showing existing pages inside the table */}
<table className='table-container'>
  <thead>
    <tr>
      <th>Title</th>
      <th>Status</th>
      
      {/* Add more columns as needed */}
    </tr>
  </thead>
  <tbody>
    {formsList.map((form, index) => (
      <tr key={index}>
        <td>{form.title}</td>
        <td>{form.status === '1' ? 'Enable' : (form.status === '0' ? 'Disable' : 'Unknown')}</td>



        {/* <td>{form.discription}</td> */}
       
        {/* Add more columns as needed */}
        <td><button onClick={() => handleEdit(form)}>Edit</button></td>
        <td><button onClick={() => handleDelete(form)}>Delete</button></td>
      </tr>

    ))
    }

    <tr>
        <td colSpan="4" className='success-message'>
          {successMessage}
        </td>
      </tr>
  </tbody>
</table>


      </div>
    </div>
  );
};

export default Pages;
