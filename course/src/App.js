import React, { Component } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Courses from './components/courses/courses';


class App extends Component{
  render(){
    return(
        <div className="container">
          <Header/>
          <Login/>
          <Courses/>
          <Footer/>
        </div>
    );
  }
};

export default App;


