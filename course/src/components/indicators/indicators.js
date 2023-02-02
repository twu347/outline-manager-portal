import React from "react";
import './indicators.css';
import './GA2';
import Table2 from "./GA2";
import Table1 from "./GA1";

function Indicators(){
    return(
        <div>
            <div class="header"> 
                <h2 class="heading">GA Indicator Information</h2>
            </div>
            <div class="catagories">
                <button id="1" class="catagoryBtn" onClick={showIndicator}>1 - Knowledge Base</button>
                <button id="2" class="catagoryBtn" onClick={showIndicator}>2 - Problem Analysis</button>
                <button id="3" class="catagoryBtn">3 - Investigation</button>
                <button id="4" class="catagoryBtn">4 - Design</button>
                <button id="5" class="catagoryBtn">5 - Use of Engineering Tools</button>
                <button id="6" class="catagoryBtn">6 - Individual and Team Work</button>
                <button id="7" class="catagoryBtn">7 - Communication Skills</button>
                <button id="8" class="catagoryBtn">8 - Professionalism</button>
                <button id="9" class="catagoryBtn">9 - Impact of Engineering on Society and Environment</button>
                <button id="10" class="catagoryBtn">10 - Ethics and Equity</button>
                <button id="11" class="catagoryBtn">11 - Economics and Project Management</button>
                <button id="12" class="catagoryBtn">12 - Life-Long Learning</button>
            </div>
            <div class="description" id="description">
                <div id="table1">
                    <Table1/>
                </div>
                <div id="table2">
                    <Table2/>
                </div>
            </div>
        </div>
    )
};



function showIndicator(e){
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    if (e.target.id == 1){
        table1.style.display = "block";
        table2.style.display = "none";
    }
    if (e.target.id == 2){
        table2.style.display = "block"
        table1.style.display = "none";
    }
}

// function showIndicator(e){
//     console.log(e.target.id);
//     var p = document.createElement('p');
//     var h2 = document.createElement('h2');
//     var description = document.getElementById("description");
//     var p2 = document.createElement('p');
//     var table = document.createElement('table');
//     var tr = document.createElement('tr'); tr.id = "row1";
//     var indicator = document.createElement('th');
//     var unnaceptable = document.createElement('th');
//     var belowExpect = document.createElement('th');
//     var meetsExpect = document.createElement('th');
//     var exceedsExpect = document.createElement('th');
//     if(e.target.id == 1){
//         h2.innerHTML = "1. Knowledge Base";
//         p.innerHTML = "Demonstrated competence in university level mathematics, natural sciences, engineering fundamentals, and specialized engineering knowledge appropriate to the program.";
//         p2.innerHTML = "(Base primarily on performance on Final Examinations for first year courses. Note this attribute is knowledge, not application, so “State Newton’s Third Law of Motion” is appropriate for this attribute whereas “Apply Newton’s Third Law of Motion to truss analysis using the Method of Sections” (or “Conduct Truss Analysis using the Method of Sections”) is Problem Analysis, Attribute 2).";
//         indicator.innerHTML = "Indicator";
//         unnaceptable.innerHTML = "Unnacceptable 1";
//         belowExpect.innerHTML = "Below Expectations 2";
//         meetsExpect.innerHTML = "Meets Expectations 3";
//         exceedsExpect.innerHTML = "Exceeds Expectations 4";
//         tr.appendChild(indicator);
//         tr.appendChild(unnaceptable);
//         tr.appendChild(belowExpect);
//         tr.appendChild(meetsExpect);
//         tr.appendChild(exceedsExpect);
//         table.appendChild(tr);
//         description.appendChild(h2);
//         description.appendChild(p);
//         description.appendChild(p2);
//         description.appendChild(table);
//     }
// }

export default Indicators;