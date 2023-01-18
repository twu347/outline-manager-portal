import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";

function App(){
    return(
      <div className="container">
          <Header/>
          <hr/>

          
          <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />} />
        
      </Routes>
      </BrowserRouter>
        </div>
      
      
        
    )
};

export default App;