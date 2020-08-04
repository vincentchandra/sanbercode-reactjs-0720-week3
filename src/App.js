import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodTable from "./tugas11/FoodTable"
import Timer from "./tugas12/Timer"

function App() {
  return (
    <>
      <FoodTable />
      <Timer start={101} />
    </>
  );
} 

export default App;
