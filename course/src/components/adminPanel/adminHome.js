import React, { useEffect } from "react";
import './adminHome.css'
import { useState } from "react";

import { Link,Outlet, useNavigate } from "react-router-dom";

function AdminHome(){
    return(
        <div>
            <div class="header">
                <h3>Please Select A Type of Service:</h3>
            </div>
            <div class="buttons">
                <button class="assignBtn">Assign Courses</button>
                <button class="reviewBtn">Review Course Outline</button>
            </div>
        </div>
        
    );
}

export default AdminHome;