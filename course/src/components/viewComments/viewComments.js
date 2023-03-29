import React, { useEffect } from "react";
import './viewComments.css'
import { useState } from "react";
import CourseList from "../courseList/courseList";
import { Link,Outlet, useNavigate } from "react-router-dom";

import process from "process";

function ViewComments(){
    let navigate = useNavigate();
    const [profName, setProfName] = useState('');
    const [courseNumbers, setCourseNumbers] = useState([]);
    const [email, setEmail] = useState('');
    const [office, setOffice] = useState('');
    const [extension, setExtension] = useState('');
    const [comments, setComments] = useState([]);
    const [outlineStatus, setOutlineStatus] = useState([]);

    function goInstructorHome(){
        navigate('/instructorHome');
    }

    var matchedData={};
        // fetch saved information based on profName and courseNumber
    function showInfo(){
        const profShow = document.getElementById('profShow21').value;
        fetch(`${process.env.REACT_APP_CLIENT_APP_API_ADDRESS}/api/getComments/${profShow}`)
            .then((res) => res.json())
            .then((data) => {
                setCourseNumbers(data.map((outline) => outline.courseNumber));
                setComments(data.map((outline) => outline.comment));
        });
    };
    
    return(
        <div>
            <div >
                <div>
                    <input id="profShow21" placeholder="Enter prof name"/>
                    <button class="showBtn31" onClick={showInfo}> Show </button>
                    <button class="instructorPortal3" onClick={goInstructorHome}>Back to Instructor Home</button>
                </div>
                <div className="instructorCoursesBox1">
                    <table>
                        <thead>
                            <tr>
                                <th>Comment</th>
                                <th>Course Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((courseTitle, index) => (
                                <tr key={index}>
                                    <td>{courseTitle}</td>
                                    <td>{courseNumbers[index]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default ViewComments;