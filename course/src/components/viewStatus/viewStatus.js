import React, { useEffect, useState } from "react";
import "./viewStatus.css";
import { Link,Outlet, useNavigate } from "react-router-dom";
import process from "process";

function ViewStatus(){
    let navigate = useNavigate();
    const [courseNumbers, setCourseNumbers] = useState([]);
    const [courseTitles, setCourseTitles] = useState([]);
    const [outlineStatus, setOutlineStatus] = useState([]);
    
    function goAdminPortal(){
        navigate('/adminHome');
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
            <div class="search-box9">
                <input type="text" id="prof-search" className="prof-search" placeholder="Enter Prof Name"></input>
                <button class="viewOutlinesBtn1" onClick={Search}>View Outlines</button>
                <button class="instructorPortal12" onClick={goAdminPortal}>Back to Admin Panel</button>
            </div>
            <div class="header"> 
                <h2 class="heading123">Outlines Approval Status</h2>
            </div>
            <div class="box123">
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