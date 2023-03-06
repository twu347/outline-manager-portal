import React, { useEffect } from "react";
import './instructorInfo.css'
import { useState } from "react";
import CourseList from "../courseList/courseList";
import { Link,Outlet, useNavigate } from "react-router-dom";

import process from "process";

function InstructorInfo(){
    let navigate = useNavigate();
    const [profName, setProfName] = useState('');
    const [courseNumbers, setCourseNumbers] = useState([]);
    const [email, setEmail] = useState('');
    const [office, setOffice] = useState('');
    const [extension, setExtension] = useState('');
    const [courseTitles, setCourseTitles] = useState([]);

    function goInstructorHome(){
        navigate('/instructorHome');
    }

    var matchedData={};
        // fetch saved information based on profName and courseNumber
    function showInfo(){
        const profShow = document.getElementById('profShow').value;
        fetch(`${process.env.REACT_APP_CLIENT_APP_API_ADDRESS}/api/getInstructorInfo/${profShow}`)
            .then((res) => res.json())
            .then((data) => {
                setCourseNumbers(data.map((outline) => outline.courseNumber));
                setEmail(data[0].email.toString());
                setOffice(data[0].office.toString());
                setExtension(data[0].extension.toString());
                setCourseTitles(data.map((outline) => outline.courseTitle));
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
                <div className="instructorCoursesBox">
                    <table>
                        <thead>
                            <tr>
                                <th>Course Title</th>
                                <th>Course Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseTitles.map((courseTitle, index) => (
                                <tr key={index}>
                                    <td>{courseTitle}</td>
                                    <td>{courseNumbers[index]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="personalInfoBox">
                    <div className="personalTitleBox">
                        <h4 className="personalTitle">Personal Information</h4>
                    </div>
                    <div className="personalInfo">
                        <h5 className="emailText">Email: {email}</h5>
                        <h5 className="officeText">Office: {office}</h5>
                        <h5 className="extensionText">Extension: {extension}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InstructorInfo;