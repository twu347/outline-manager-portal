import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Courses from './components/courses/courses';
import Indicators from "./components/indicators/indicators";
import Outline1 from "./components/outline1/outline1";
import AdminHome from "./components/adminPanel/adminHome";
import ReviewOutline from "./components/reviewOutline/reviewOutline";
import ViewOutline from "./components/viewOutline/viewOutline";
import ViewOutlines from "./components/viewOutlines/viewOutlines";

import Manual from "./components/manual/manual";
import Archive from "./components/archive/Archive";



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
          <Route path="/outline1" element={<Outline1/>}/>
          <Route path="/indicators" element={<Indicators/>}/>
          <Route path="/adminHome" element={<AdminHome/>}/>
          <Route path="/reviewOutline" element={<ReviewOutline/>}/>
          <Route path="/viewOutline" element={<ViewOutline/>}/>
          <Route path="/outlines" element={<Outline1/>}/>
          <Route path="/viewOutlines" element={<ViewOutlines/>}/>

          <Route path="/manual" element={<Manual/>}/>
          <Route path="/archive" element={<Archive/>}/>

        </Routes>
      </BrowserRouter>

      {/* <Footer/> */}
    </div>   
    ) 
  }
};

export default App;


