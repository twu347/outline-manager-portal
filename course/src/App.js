import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Courses from './components/courses/courses';
import Indicators from "./components/indicators/indicators";
import Outline1 from "./components/outline1/outline1";
import AdminHome from "./components/adminPanel/adminHome";
import ReviewOutline from "./components/reviewOutline/reviewOutline";
import ShowOutline from "./components/showOutline/showOutline";
import ViewOutlines from "./components/viewOutlines/viewOutlines";
import Archive from "./components/archive/Archive";
import Manual from "./components/manual/manual";
import ViewStatus from "./components/viewStatus/viewStatus";
import InstructorHome from "./components/instructorHome/instructorHome";
import InstructorInfo from "./components/instructorInfo/instructorInfo";
import ChangePassword from './components/changePassword/changePassword';
import AdminToken from "./components/adminToken/adminToken";
import InstructorToken from "./components/instructorToken/instructorToken";

class App extends Component{
  render(){
    return(
    <div className="container">
      <Header/>
      <hr/>

      {/* define routers */}
      <BrowserRouter>
        <Routes>
          <Route element={<AdminToken/>}>
             <Route path="/adminHome" element={<AdminHome/>} exact/>
             <Route path="/reviewOutline" element={<ReviewOutline/>} exact/>
             <Route path="/courses" element={<Courses />} exact/>
          </Route>
        
          <Route element={<InstructorToken/>}>
             <Route path="/instructorHome" element={<InstructorHome/>}/>
             <Route path="/instructorInfo" element={<InstructorInfo/>}/>
             <Route path="/archive" element={<Archive/>}/>
          </Route>

          <Route path="/"  element={<Login />} exact/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/outline1" element={<Outline1/>}/>
          <Route path="/indicators" element={<Indicators/>}/>
          <Route path="/adminHome" element={<AdminHome/>}/>
          <Route path="/reviewOutline" element={<ReviewOutline/>}/>
          <Route path="/showOutline" element={<ShowOutline/>}/>
          <Route path="/outlines" element={<Outline1/>}/>
          <Route path="/viewOutlines" element={<ViewOutlines/>}/>
          <Route path="/manual" element={<Manual/>}/>
          <Route path="/viewStatus" element={<ViewStatus/>}/>
          <Route path="/archive" element={<Archive/>}/>
          <Route path="/instructorHome" element={<InstructorHome/>}/>
          <Route path="/instructorInfo" element={<InstructorInfo/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>
        </Routes>
      </BrowserRouter>

      {/* <Footer/> */}
    </div>   
    ) 
  }
};

export default App;