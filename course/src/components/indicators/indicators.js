import React from "react";
import './indicators.css';
import './Tables/GA2';
import Table2 from "./Tables/GA2";
import Table1 from "./Tables/GA1";
import Table3 from "./Tables/GA3";
import Table4 from "./Tables/GA4";
import Table5 from "./Tables/GA5";
import Table6 from "./Tables/GA6";
import Table7 from "./Tables/GA7";
import Table8 from "./Tables/GA8";
import Table9 from "./Tables/GA9";
import Table10 from "./Tables/GA10";
import Table11 from "./Tables/GA11";
import Table12 from "./Tables/GA12";
import { Link,Outlet, useNavigate } from "react-router-dom";

function Indicators(){
    let navigate = useNavigate();

    function goInstructorHome(){
        navigate('/instructorHome');
    }

    return(
        <div>
            <button className="instructorPortal" onClick={goInstructorHome}>Instructor Home</button>
            <div class="header"> 
                <h2 class="heading12">GA Indicator Information</h2>
            </div>
            <div class="catagories">
                <button id="1" class="catagoryBtn" onClick={showIndicator}>1 - Knowledge Base</button>
                <button id="2" class="catagoryBtn" onClick={showIndicator}>2 - Problem Analysis</button>
                <button id="3" class="catagoryBtn" onClick={showIndicator}>3 - Investigation</button>
                <button id="4" class="catagoryBtn" onClick={showIndicator}>4 - Design</button>
                <button id="5" class="catagoryBtn" onClick={showIndicator}>5 - Use of Engineering Tools</button>
                <button id="6" class="catagoryBtn" onClick={showIndicator}>6 - Individual and Team Work</button>
                <button id="7" class="catagoryBtn" onClick={showIndicator}>7 - Communication Skills</button>
                <button id="8" class="catagoryBtn" onClick={showIndicator}>8 - Professionalism</button>
                <button id="9" class="catagoryBtn" onClick={showIndicator}>9 - Impact of Engineering on Society and Environment</button>
                <button id="10" class="catagoryBtn" onClick={showIndicator}>10 - Ethics and Equity</button>
                <button id="11" class="catagoryBtn" onClick={showIndicator}>11 - Economics and Project Management</button>
                <button id="12" class="catagoryBtn" onClick={showIndicator}>12 - Life-Long Learning</button>
            </div>
            <div class="tables">
                <div id="table1">
                    <h2>1 - Knowledge Base</h2>
                    <p>Demonstrated competence in university level mathematics, natural sciences, engineering fundamentals, and specialized engineering knowledge appropriate to the program. (Base primarily on performance on Final Examinations for first year courses.  Note this attribute is knowledge, not application, so “State Newton’s Third Law of Motion” is appropriate for this attribute whereas “Apply Newton’s Third Law of Motion to truss analysis using the Method of Sections” (or “Conduct Truss Analysis using the Method of Sections”) is Problem Analysis, Attribute 2).</p>
                    <Table1/>
                </div>
                <div id="table2">
                    <h2>2 - Problem Analysis</h2>
                    <p>An ability to use appropriate knowledge and skills to identify, formulate, analyze and solve complex engineering problems in order to reach substantiated conclusions. (Applies to “one correct answer” problems and open-ended design problems)</p>
                    <Table2/>
                </div>
                <div id="table3">
                    <h2>3 - Investigation</h2>
                    <p>An ability to conduct investigations of complex problems by methods that include appropriate experiments, analysis and interpretation of data, and synthesis of information in order to reach valid conclusions.</p>
                    <Table3/>
                </div>
                <div id="table4">
                    <h2>4 - Design</h2>
                    <p>An ability to design solutions for complex, open-ended engineering problems and to design systems, components or processes that meet specified needs with appropriate attention to health and safety risks, applicable standards, and economic, environmental, cultural and societal considerations.</p>
                    <Table4/>
                </div>
                <div id="table5">
                    <h2>5 - Use of Engineering Tools</h2>
                    <p>An ability to create, select, apply, adapt, and extend appropriate techniques, resources, and modern engineering tools to a range of engineering activities, from simple to complex, with an understanding of the associated limitations.</p>
                    <ul>The scope of “Engineering Tools” (ET) includes
                        <li>Basic and advanced numerical modelling tools (spreadsheets, Matlab)</li>
                        <li>Computer-aided Engineering (CAx) Tools (design software, finite element analysis, 3-D printing)</li>
                        <li>Conventional engineering databases and resources (data/formula tables in handbooks/catalogues, materials specifications)</li>
                    </ul>
                    <Table5/>
                </div>
                <div id="table6">
                    <h2>6 - Individual and Team Work</h2>
                    <p>An ability to work effectively as a member and leader in teams preferably in a multidisciplinary setting</p>
                    <Table6/>
                </div>
                <div id="table7">
                    <h2>7 - Communication Skills</h2> 
                    <p>An ability to communicate complex engineering concepts within the profession and with society at large. Such ability includes reading, writing, speaking and listening, and the ability to comprehend and write effective reports and design documentation, and to give and effectively respond to clear instructions</p>
                    <Table7/>
                </div>
                <div id="table8">
                    <h2>8 - Professionalism</h2>
                    <p>An understanding of the roles and responsibilities of the professional engineer in society, especially the primary role of protection of the public and the public interest.</p>
                    <Table8/>
                </div>
                <div id="table9">
                    <h2>9 - Impact of Engineering on Society and the Environment</h2>
                    <p>An ability to analyze social and environmental aspects of engineering activities. Such ability includes an understanding of the interactions that engineering has with the economic, social, health, safety, legal, and cultural aspects of society, the uncertainties in the prediction of such interactions; and the concepts of sustainable design and development and environmental stewardship</p>
                    <Table9/>
                </div>
                <div id="table10">
                    <h2>10 - Ethics and Equity</h2>
                    <p>An ability to apply professional ethics, accountability, and equity.</p>
                    <Table10/>
                </div>
                <div id="table11">
                    <h2>11 - Economics and Project Management</h2>
                    <p>Appropriately incorporate economics and business practices including project, risk, and change management into the practice of engineering and to understand their limitations</p>
                    <Table11/>
                </div>
                <div id="table12">
                    <h2>12 - Life-Long Learning</h2>
                    <p>An ability to identify and to address their own educational needs in a changing world in ways sufficient to maintain their competence and to allow them to contribute to the advancement of knowledge.</p>
                    <Table12/>
                </div>
            </div>
        </div>
    )
};

function showIndicator(e){
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");
    var table4 = document.getElementById("table4");
    var table5 = document.getElementById("table5");
    var table6 = document.getElementById("table6");
    var table7 = document.getElementById("table7");
    var table8 = document.getElementById("table8");
    var table9 = document.getElementById("table9");
    var table10 = document.getElementById("table10");
    var table11 = document.getElementById("table11");
    var table12 = document.getElementById("table12");
    if (e.target.id == 1){
        table1.style.display = "block";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 2){
        table1.style.display = "none";
        table2.style.display = "block";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 3){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "block";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 4){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "block";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 5){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "block";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 6){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "block";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 7){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "block";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 8){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "block";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 9){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "block";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 10){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "block";
        table11.style.display = "none";
        table12.style.display = "none";
    }
    if (e.target.id == 11){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "block";
        table12.style.display = "none";
    }
    if (e.target.id == 12){
        table1.style.display = "none";
        table2.style.display = "none";
        table3.style.display = "none";
        table4.style.display = "none";
        table5.style.display = "none";
        table6.style.display = "none";
        table7.style.display = "none";
        table8.style.display = "none";
        table9.style.display = "none";
        table10.style.display = "none";
        table11.style.display = "none";
        table12.style.display = "block";
    }
}

export default Indicators;