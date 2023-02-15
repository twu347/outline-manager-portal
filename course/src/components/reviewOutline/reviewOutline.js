import React, { useEffect } from "react";
import './reviewOutline.css'
import { useState } from "react";
import CourseList from "../courseList/courseList";
import { Link,Outlet, useNavigate } from "react-router-dom";

function ReviewOutline() {
    const [courseOutlines, setCourseOutlines] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3333/api/courseOutlines')
            .then(res => res.json())
            .then(data => setCourseOutlines(data));
    }, []);

    return (
        <div class = "box">
            {console.log(courseOutlines)}
            {courseOutlines.map(courseOutline => (
                <div class="boxes" key={courseOutline._id} style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
                    <p>Course Title: {courseOutline.courseTitle}</p>
                    <p>Course Number: {courseOutline.courseNumber}</p>
                    <button class="approve-btn">Approve</button>
                    <button>Review</button>
                </div>
            ))}
        </div>
    );
}

export default ReviewOutline;