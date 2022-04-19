import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"; 
import {useState, useEffect} from "react";
import Home from './components/home';


function App() {
  return (
    <div id="bootstrap-overrides">
      <Routes>
        <Route
          path="/"
          element={
            <Home
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
