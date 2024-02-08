import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import footer from "./footer.css";
const Footer = () => {
const [formsList, setFormsList] = useState([]);
const { id } = useParams(); // accessing the id parameter from the URL...

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch your formsList data here...
        const response = await fetch('http://localhost:8000/Form/get_data.php');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setFormsList(data.data || []);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

// ...

useEffect(() => {
  // Check if the id parameter exists in the URL
  if (id) {
    // Fetch additional data based on the id parameter...
    const fetchPageDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/Form/get_data.php?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // Update the state with the fetched data
          const updatedFormsList = formsList.map(form =>
            form.id === data.data[0].id ? data.data[0] : form
          );
          setFormsList(updatedFormsList);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPageDetails();
  }
}, [id]);

// ...


// ...

return (
  <footer style={{ backgroundColor: '#a36ae8', padding: '30px', textAlign: 'center' }} className='footer-container'>
    <table>
      <tbody>
        {formsList
          .filter(form => form.status === '1') // Filter only enabled pages.
          .map((form, index) => (
            <tr key={index}>
              <td>
                {console.log('form.id:', form.id)}
                <Link to={`/about/${form.id}`}>{form.title}</Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </footer>
);
// ...

};

export default Footer;
