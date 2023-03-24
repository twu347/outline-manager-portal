import React, { useEffect } from "react";
import './changePassword.css'
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import process from "process";

function ChangePassword(){
    let navigate = useNavigate();
    function goInstructorPortal(){
        navigate('/instructorHome')
    }

    function goAdminPortal(){
        navigate('/adminHome')
    }

    const [password, setPassword] = useState([]);
    const [name, setName] = useState('');
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById('newPassword').disabled = true;
    });

    function confirm(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_SERVER_APP_API_ADDRES + "/api/users", {method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                name: name,
                password: password,
            }),
        }).then((res)=>{
            res.json().then(data=>{
                if(data.result == true){
                    document.getElementById('newPassword').disabled = false;
                }
                else{
                    alert('Username & Password Incorrect')
                }
            });
        });
    };

    function setPwd(){
        const newPassword = document.getElementById('newPassword').value;
        fetch(`${process.env.REACT_APP_CLIENT_APP_API_ADDRESS}/api/putInfo/${name}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                password: newPassword            
            })
        });
        alert('Password Changed Successfully!')
    }

    return(
        <div>
            <div>
                <h1 class="heading23">Change Your Password</h1>
                <form class="step1">
                    <input type="text" class="userName" placeholder="Please Enter Your Username" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" class="oldPassword" placeholder="Please Enter Old Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button class="confirmBtn" onClick={confirm}>Confirm</button>
                </form>
            </div>
            <div>
                <form class="step2">
                    <input id="newPassword" class="newPwd" placeholder="Enter new password"></input>
                    <button class="setPwdBtn" onClick={setPwd}>Set Password</button>
                    <button class="instructorPortalBtn" onClick={goInstructorPortal}>Instructor Portal</button>
                    <button class="adminPortalBtn" onClick={goAdminPortal}>Admin Portal</button>
                </form>
            </div>
        </div>
    )
}
export default ChangePassword;