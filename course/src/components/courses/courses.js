import React, { useEffect } from "react";
import './courses.css'
import { useState } from "react";
import Prof from "../prof/prof";
import CourseList from "../courseList/courseList";

function Courses(){

    const [users, setUser] = useState([]);
    const [courses, setCourse] = useState([]);

  function setUsers(){
        fetch('http://localhost:3333/api/logins').then((res)=>{
          res.json().then((data)=>{
            setUser(data);
          })
       })    
  }
  function setCourses(){
    fetch('http://localhost:3333/api/courses').then((res)=>{
      res.json().then((data)=>{
        setCourse(data);
      })
   })    
}
  useEffect(()=>{setUsers();setCourses();},[])
  const UserElements =users.map(user=> <Prof key = {user._id} value = {user.username} /> ) 
  const CourseElements =courses.map(course=> <CourseList key = {course._id} value = {course.courseName} /> )

    return(
        <div>
            
            <h1> This is Admin Panel </h1>
            <div className="box">{UserElements}</div>
            
            <div>{CourseElements}</div>
            
        </div>
    )
};

export default Courses;