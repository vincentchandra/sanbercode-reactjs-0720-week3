import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodTable from "./tugas11/FoodTable"
import Timer from "./tugas12/Timer"
import FoodTableNew from "./tugas13/FoodTableNew"
import FoodTableHook from "./tugas14/FoodTableHook"

function App() {
  return (
    <>
      {/* <FoodTable/> */}
      {/* <FoodTableNew /> */}
      <FoodTableHook />
      <Timer start={101} />
    </>
  );
} 

export default App;
