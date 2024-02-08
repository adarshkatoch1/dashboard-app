import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./page.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

const Page = () => {
  const { id } = useParams();
  const [pageDetails, setPageDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;


    // fetch details from the server..
    const fetchPageDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/Form/get_data.php?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          if (isMounted) {
            // Check if the fetched data has changed before updating state
            if (JSON.stringify(data.data[0]) !== JSON.stringify(pageDetails)) {
              setPageDetails(data.data[0] || {});




               // Log image URLs to the console..
            console.log('Image URLs:', data.data.map(item => `http://localhost:8000/uploads/${item.image}`));
            
            }
          }
        } else {
          setError('Error loading page details.');
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        setError('Error loading page details.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      console.log('Fetching details for id:', id);
      fetchPageDetails();
    }

    return () => {
      isMounted = false; // Cleanup to prevent state updates on unmounted component..
    };
  }, [id, pageDetails.title]);

  useEffect(() => {
    console.log('Current id:', id);
    console.log('Current title:', pageDetails.title);
  }, [id, pageDetails.title]);

  return (
    <>


      {/* material mui styling */}
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
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              {Object.keys(pageDetails).length > 0 ? (
                <>
                  <h1>{pageDetails.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: pageDetails.discription }}
                    style={{ marginTop: '20px' }}
                  />
                  {/* Add other page details here */}
                  {pageDetails.image && (
                    <img src={`http://localhost:8000/Form/uploads/${pageDetails.image}`} alt={pageDetails.title} style={{ maxWidth: '100%', marginTop: '20px' }} />
                  )}
                </>
              ) : (
                <p>No details available for this page.</p>
              )}
            </>
          )}
          {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
        </Box>
      </Container>



    </>
  );
};

export default Page;
