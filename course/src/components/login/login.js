import React from "react";
import './login.css'

function Login(){
    return(
        <div>
            <div class="login">
                <h2 class="heading">Login To Portal</h2>
                <input type="text" class="username" placeholder="Please Enter Your Username"/>
                <input type="text" class="password" placeholder="Please Enter Your Password"/>
                <a href="https://www.registrar.uwo.ca/resources/student_center_access_guide.html" class="forgotLink">Forgot Username or Password?</a >
                <button class="loginBtn">Login</button>
            </div>

            <div class="splitBar"></div>

            <div>
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
                    </div>
                </ul>
            </div>
        </div>
    )
};

export default Login;