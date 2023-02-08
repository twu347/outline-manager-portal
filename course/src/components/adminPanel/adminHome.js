import React, { useEffect } from "react";
import './adminHome.css'
import { useState } from "react";
import Prof from "../prof/prof";
import CourseList from "../courseList/courseList";
import { Link,Outlet, useNavigate } from "react-router-dom";

function AdminHome(){
    return(
        <div>
            <h3 class="header">Please Select A Type of Service:</h3>
        </div>
    );
}

export default AdminHome;