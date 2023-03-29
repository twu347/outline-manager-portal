import React, { useEffect } from "react";
import './adminHome.css'
import { useState } from "react";

import { Link,Outlet, useNavigate } from "react-router-dom";
import { setAdminToken } from "../adminToken/adminToken";

function AdminHome(){
    let navigate = useNavigate();

    function logout(){
        setAdminToken(false);
        navigate('/');
    }

    function goCourses(){
        navigate('/Courses')
    }
    
    function goReview(){
        navigate('/reviewOutline')
    }

    function goLogin(){
        navigate('/')
    }

    function goChangePassword(){
        navigate('/changePassword')
    }

    function goViewStatus(){
        navigate('/viewStatus')
    }

    return(
        <div>
            <div class="header">
                <button class="logoutBtn" onClick={goLogin}>Log Out</button>
                <button class="passwordBtn" onClick={goChangePassword}>Change Password</button>
                <div class="left-content">
                    <h3 class="adminSubtitle">Please Select A Type of Service:</h3>
                </div>
            </div>
            <div class="buttons">
                <button class="assignBtn" onClick={goCourses}>Assign Courses</button>
                <button class="reviewBtn" onClick={goReview}>Review Course Outline</button>
                <button class="viewStatusBtn" onClick={goViewStatus}>View Outlines Status</button>
            </div>
        </div>
        
    );
}

export default AdminHome;