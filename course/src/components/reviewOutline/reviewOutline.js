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
            {courseOutlines.map(courseOutline => (
                <div class="boxes" key={courseOutline._id}>
                    <p>Course Title: {courseOutline.courseTitle}</p>
                    <p>Course Number: {courseOutline.courseNumber}</p>
                    <p>Approved: {courseOutline.approved}</p>
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
                    <button>Review</button>
                </div>
            ))}
        </div>
    );
}

export default ReviewOutline;