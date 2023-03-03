import React, { useEffect } from "react";
import './instructorInfo.css'
import { useState } from "react";
import CourseList from "../courseList/courseList";
import { Link,Outlet, useNavigate } from "react-router-dom";

import process from "process";

function InstructorInfo(){
    let navigate = useNavigate();

    function goInstructorHome(){
        navigate('/instructorHome');
    }

    var matchedData={};
        // fetch saved information based on profName and courseNumber
    function showInfo(){
        const profShow = document.getElementById('profShow').value;
        fetch(`${process.env.REACT_APP_CLIENT_APP_API_ADDRESS}/api/getInstructorInfo/${profShow}`).then((res)=>{
            res.json().then((data)=>{
                document.getElementById('courseNumber').innerHTML = 
                for(let i = 0; i<data.length; i++ ){
                    return "Course Number: " + data[i].courseNumber.toString();
                }
                document.getElementById('courseTitle').innerHTML = "Course Title: " + data[0].courseTitle.toString();
                document.getElementById('office').innerHTML = "Office: " + data[0].office.toString();
                document.getElementById('extension').innerHTML = "Extension: " + data[0].extension.toString();
                document.getElementById('email').innerHTML =  "Email: " + data[0].email.toString();
                matchedData = data[0];
            });
        });
    };
    
    return(
        <div>
            <div >
                <div>
                    <input id="profShow" placeholder="enter prof name"/>
                    <button onClick={showInfo}> show </button>
                    <button onClick={goInstructorHome}>Back to Instructor Home</button>
                </div>
                <div class="instructorCoursesBox">
                    <h5 type="number" id="courseNumber" className="title" name='courseNumber' required></h5>
                </div>
            </div>
        </div>
    )
};

export default InstructorInfo;