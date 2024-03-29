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
    const [outlineStatus, setOutlineStatus] = useState([]);

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
                setOutlineStatus(data.map((outline) => `${outline.courseNumber} - ${outline.courseTitle} = ${outline.approved ? 'approved' : 'not approved'}`));
        });
    };
    
    return(
        <div>
            <div >
                <div className="topBar19">
                    <input id="profShow" className="profSearch3" placeholder="Enter prof name"/>
                    <button class="showBtn3" onClick={showInfo}> Show </button>
                    <button class="instructorPortal13" onClick={goInstructorHome}>Back to Instructor Home</button>
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
                <div className="outlineStatusBox">
                    <div className="outlineStatusTitleBox">
                        <h4 className="outlineStatusTitle">Outline Status</h4>
                    </div>
                    <div className="outlineStatusInfo">
                        {outlineStatus.map((outline, index) => (
                            <h5 key={index}>{outline}</h5>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InstructorInfo;