// About.js
import React, { useEffect } from 'react'

const About = () => {

  useEffect( () => {
    alert("You are entered into about us page")
  }, []);

  return (
    <div>
      <h1>This is the about us page</h1>
    </div>
  )
}

export default About;
