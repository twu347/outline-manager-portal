import React, { useEffect } from "react";
import './instructorInfo.css'
import { useState } from "react";
import CourseList from "../courseList/courseList";
import { Link,Outlet, useNavigate } from "react-router-dom";
import process from "process";

function InstructorInfo() {
    const [courseOutlines, setCourseOutlines] = useState([]);
    let navigate = useNavigate();

    function goViewOutline(){
        navigate('/viewOutline');
    }

    function goLogin(){
        navigate('/');
    }

    function goInstructorHome(){
        navigate('/instructorHome');
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_CLIENT_APP_API_ADDRESS + '/api/courseOutlines')
            .then(res => res.json())
            .then(data => setCourseOutlines(data));
    }, []);

    return (
        <div>
            <button onClick={goInstructorHome}>Return To Instructor Home</button>
            <button onClick={goLogin}>Logout</button>
        <div class = "box1">
            {courseOutlines.map(courseOutline => (
                <div class="boxes" key={courseOutline._id}>
                    <p>Course Title: {courseOutline.courseTitle}</p>
                    <p>Course Number: {courseOutline.courseNumber}</p>
                    <p>Professor: {courseOutline.profName}</p>
                    <button
                    className="approve-btn"
                    onClick={() => {
                        // Call PUT request to update courseOutline.approved
                        fetch(`/api/outline/${encodeURIComponent(courseOutline._id)}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                approved : "true"
                            })
                        }).then(response => {
                            // Handle response
                            console.log(response);
                        }).catch(error => {
                            // Handle error
                            console.error("Error: "+error);
                        });
                        window.location.reload();
                    }}
                >
                    Approve
                </button>
                    <button onClick={goViewOutline}>Review</button>
                </div>
            ))}
        </div>
        </div>
    );
}

export default InstructorInfo;