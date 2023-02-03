import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Courses from './components/courses/courses';
import Prof from "./components/prof/prof";
import Indicators from "./components/indicators/indicators";

class App extends Component{
  render(){
    return(
    <div className="container">
      <Header/>
      <hr/>

      {/* define routers */}
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/courses" element={<Courses />}/>
          <Route path="/profs" element={<Prof/>}/>
          <Route path="/indicators" element={<Indicators/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>   
    ) 
  }
};

export default App;


