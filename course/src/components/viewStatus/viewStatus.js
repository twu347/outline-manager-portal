import React, { useEffect, useState } from "react";
import "./viewStatus.css";
import { Link,Outlet, useNavigate } from "react-router-dom";
import process from "process";

function ViewStatus(){
    let navigate = useNavigate();
    const [courseNumbers, setCourseNumbers] = useState([]);
    const [courseTitles, setCourseTitles] = useState([]);
    const [outlineStatus, setOutlineStatus] = useState([]);
    
    function goInstructorPortal(){
        navigate('/Outline1');
    }

    function Search(){
        const profShow = document.getElementById('prof-search').value;
        fetch(`${process.env.REACT_APP_CLIENT_APP_API_ADDRESS}/api/getInfo/${profShow}`)
        .then(res=>res.json())
        .then(data => {
            setCourseNumbers(data.map((outline) => outline.courseNumber));
            setCourseTitles(data.map((outline) => outline.courseTitle));
            setOutlineStatus(data.map((outline) => `${outline.courseNumber} - ${outline.courseTitle} = ${outline.approved ? 'Approved' : 'Not Approved'}`));
        });
    }
    
    return(
        <div>
            <div class="search-box">
                <input type="text" id="prof-search" placeholder="Enter Prof Name"></input>
                <button class="search" onClick={Search}>View Outlines</button>
                <button class="instructorPortal" onClick={goInstructorPortal}>Back to Home</button>
            </div>
            <div class="header"> 
                <h2 class="heading">Outlines Approval Status</h2>
            </div>
            <div class="box">
                {courseTitles.map((courseTitles, index) => 
                    <div class="boxes" key={index}>
                        <p>Course Title: {courseTitles}, Course Number: {courseNumbers[index]}</p>
                        <p>Status: {outlineStatus[index]}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ViewStatus;