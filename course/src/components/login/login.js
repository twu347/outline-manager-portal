import React from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";
import './login.css'
import { useState } from "react";
import Footer from "../footer/footer";
import process from "process";

function Login(){
    
    // API link 
    let navigate = useNavigate();
    const link = <Link to="/Courses">Login</Link>

    // login use state 
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');

    // fetch login back-end API to verify username and password 
    function Userlogin(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_SERVER_APP_API_ADDRES + "/api/login", {method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((res)=>{
            res.json().then(data=>{
                if(data.result == 1){
                    navigate('/adminHome');
                }
                else if(data.result == 2){
                    navigate('/Outline1');
                }
                else{
                    alert('Username & Password Incorrect')
                }
            });
        });
    };

    return(
        <div>
            <form class="login">
                <input type="text" class="username" placeholder="Please Enter Your Username" value={username} onChange={(e) => setName(e.target.value)}/>
                <input type="text" class="password" placeholder="Please Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <a href="https://www.registrar.uwo.ca/resources/student_center_access_guide.html" class="forgotLink">Forgot Username or Password?</a >
                <button class="loginBtn" onClick={Userlogin}>Login</button>
            </form>

            <div class="splitBar"></div>

            <div>
                <h2 className="aboutHeading2">Login To Portal</h2>
                <h2 class="aboutHeading">About Portal</h2>
            </div>

            <div>
                <ul>
                    <div class="about">
                        <p>Cousrse Outline Manager Portal will be unavailable on Sundays until 6am due to maintenance</p >
                        <li class="list">
                            <p>Need to Activate your Western Identity?</p >
                        </li>
                        <li class="list">
                            <a href="https://identity.uwo.ca/activate-he;jsessionid=5B22BA8514E0CF334F7E356F4DA6747C?0" target="_blank">
                                <p>Click Here To Activate</p >
                            </a>
                        </li>
                        
                        <li class="list">
                            <p>Don't know your access code?</p >
                        </li>

                        <li class="list">
                            <a href="https://studentservices.uwo.ca/secure/PIN/GetUserID.cfm" target="_blank">
                                <p>Click here for Access Code Retrieval</p >
                            </a>
                        </li>
                        
                        <li class="list">
                            <p>Forgot your Western Identity password?</p >
                        </li>

                        <li class="list">
                            <a href="https://identity.uwo.ca/reset-my-password?1" target="_blank">
                                <p>Click here to reset your password </p >
                            </a>
                        </li>
                        
                        <li class="list">
                            <p>If you have any questions</p >
                        </li>

                        <li class="list">
                            <a href="https://studentservices.uwo.ca/callBack/" target="_blank">
                                <p>Virtual Helpline</p >
                            </a>
                        </li>

                        <br></br>
                        <li class="list">
                            <p>To view the user manual</p>
                        </li>

                        <li class="list">
                            <a href="/manual" target="_blank">
                                <p>User Manual</p>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
            <Outlet />
            <Footer/>
        </div>
    )
};

export default Login;