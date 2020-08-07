import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Routes from './tugas15/Routes'

function App() {
  return (
    <>
      {/* <FoodTable/> */}
      {/* <FoodTableNew /> */}
      {/* <FoodTableHook /> */}
      {/* <FoodTableContext /> */}
      {/* <FoodTableApp/> */}
      {/* <Timer start={101} /> */}
      <Router>
       <Routes/>

      </Router>
    </>
  );
} 

export default App;
