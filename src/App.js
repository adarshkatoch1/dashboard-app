import './App.css';
// import Form from './Components/Form3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Component2/Navbar';
// import Home from './Component2/Home';
// import About from './Component2/About';
import Form3 from "./Components/Form3";
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';




const theme = createTheme();



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Form3 />
    </div>
    </ThemeProvider>
  );
}

export default App;
