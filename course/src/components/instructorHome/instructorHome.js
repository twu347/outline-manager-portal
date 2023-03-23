import React, { useEffect } from "react";
import './instructorHome.css'
import { useState } from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";

function InstructorHome(){
    let navigate = useNavigate();

    function goOutline1(){
        navigate('/Outline1')
    }
    
    function goIndicators(){
        navigate('/indicators')
    }

    function goLogin(){
        navigate('/')
    }

    function goInstructorInfo(){
        navigate('/instructorInfo')
    }

    function goViewComment(){
        navigate('/viewComments')
    }
  
    function goChangePassword(){
        navigate('/changePassword')
    }

    return(
        <div>
            <div class="header">
                <button class="logoutBtn" onClick={goLogin}>Log Out</button>
                <button class="passwordBtn" onClick={goChangePassword}>Change Password</button>
                <h3>Please Select A Type of Service:</h3>
            </div>
            <div class="instructorHomeBtns">
                <button class="assignBtn" onClick={goOutline1}>Create/Edit Outline</button>
                <button class="reviewBtn" onClick={goIndicators}>GA Indicators</button>
                <button class="reviewBtn" onClick={goInstructorInfo}>My Account</button>
                <button class="reviewBtn" onClick={goViewComment}>View Comments</button>
            </div>
        </div>
        
    );
}

export default InstructorHome;