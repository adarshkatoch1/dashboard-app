// DynamicPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DynamicPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default DynamicPage;
