import React from "react";
import './courses.css'
import { useState } from "react";
import Prof from "../prof/prof";
function Courses(){

    const [users, setUser] = useState([]);

  function setUsers(event){

    event.preventDefault();
    
        fetch('http://localhost:3333/api/logins').then((res)=>{
          res.json().then((data)=>{
            setUser(data);
          })
       })
       
       
  }
  const UserElements =users.map(user=> <Prof key = {user._id} value = {user.username} /> )

  

    return(
        <div>
            <div className="box"></div>
            <h1> This is Admin Panel </h1>
            <button onClick={setUsers}>Click</button>
            {UserElements}
        </div>
    )
};

export default Courses;