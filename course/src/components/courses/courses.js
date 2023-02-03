import React, { useEffect } from "react";
import './courses.css'
import { useState } from "react";
import Prof from "../prof/prof";
import CourseList from "../courseList/courseList";
import { Link,Outlet, useNavigate } from "react-router-dom";

function Courses(){
  let navigate = useNavigate();
  // define use state 
  const [users, setUser] = useState([]);
  const [courses, setCourse] = useState([]);

  function goIndicator(){
    navigate('/indicators')
  }

  // fetch login API
  function setUsers(){
    fetch('http://localhost:3333/api/logins').then((res)=>{
      res.json().then((data)=>{
        setUser(data);
      });
    });    
  };

  // fetch course API
  function setCourses(){
    fetch('http://localhost:3333/api/courses').then((res)=>{
      res.json().then((data)=>{
        setCourse(data);
      })
   })    
  }

  // assign course based on input 
  function assignCourse(){
    const inputUsername = document.getElementById('prof').value;
    const inputCourse = document.getElementById('course').value;
    fetch(`http://localhost:3333/api/putProf/${inputUsername}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({courseName: inputCourse})
    }).then((res)=>{
      res.json().then(data=>{
          if(data.result=="incorrect"){
            alert("Course name not found!")
          }else{
            alert("Success !");
          }
      });
  })
  }

  // delete assigned course 
  function deleteCourse(){
    const deleteUsername = document.getElementById('deleteProf').value;
    const deleteCourse = document.getElementById('deleteCourse').value;
    fetch(`http://localhost:3333/api/deleteProf/${deleteUsername}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({coursename: deleteCourse})
    }).then(res => {
      alert('Deleted');
    })
  }

  useEffect(()=>{setUsers();setCourses();},[users])
  const UserElements =users.map(user=> <Prof key = {user._id} value = {user.username} course = {user.assignedCourse}/> ) 
  const CourseElements =courses.map(course=> <CourseList key = {course._id} value = {course.courseName} /> )

  return(
    
    <div>
      <button onClick={goIndicator}>GA indicator</button>
      {/* display instructor information */}
      <div className="left-box">
        <div className="left-text"> Instructors And Related Course</div>
        <div className="left-content">{UserElements}</div>
      </div>

      {/* display course information */}
      <div className="right-box">
        <div className="right-text"> All Program Courses </div>
        <div className="right-content">{CourseElements}</div>
      </div>
      <div>

        {/* assign a course to instructor */}
        <div>
          <input className="input-instructor" type={Text} id="prof" placeholder="Enter Instructor Name To Assign Course"/>
          <input className="input-course" type={Text} id="course" placeholder="Enter Course Number To Assign Course" />
          <button className="assign-btn" onClick={assignCourse}> Assign Course </button>
        </div>

        {/* delete assigned course */}
        <div>
          <input className="delete-instructor" type={Text} id="deleteProf" placeholder="Choose Instructor"/>
          <input className="delete-course" type={Text} id="deleteCourse" placeholder="Delete Course"/>
          <button className="btn" onClick={deleteCourse}> Delete </button>
        </div>

      </div>  
    </div>
  )
};

export default Courses;