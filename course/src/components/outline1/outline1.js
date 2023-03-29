import React, { useEffect, useState } from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import './outline1.css';
import process from "process";

function Outline1(){

    let navigate = useNavigate();
    var matchedData={};

    // recognzie user input 
    const handleInput = (e) =>{
        const id = e.target.id;
        matchedData[id] = e.target.value
    }

    function goLogin(){
        navigate('/')
    }

    // prevent refresh page 
    function goIndicator(){
        navigate('/Indicators');
    }
    function goArchive(){
        navigate('/Archive')
    }
    function goEditOutline(){
        navigate('/editOutline')
    }

    function goHome(){
        navigate('/instructorHome')
    }
    const handleForm = async (e) => {
        e.preventDefault();
        var count = 0;
        await fetch(process.env.REACT_APP_SERVER_APP_API_ADDRES + "/api/getDoc").then((res)=>{
            res.json().then(data=>{
                for(var i=0; i< data.length; i++){
                    if(data[i].courseNumber == document.getElementById('courseNumber').value && data[i].profName == document.getElementById('profName').value)
                    count++;
                }
                // Here I created a new schema for view each edit history.
                fetch('http://localhost:3333/api/editOutline', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            timeStamp: document.getElementById('timeStamp').value,
                            profName:document.getElementById('profName').value ,
                            courseNumber:document.getElementById('courseNumber').value,
                            courseTitle:document.getElementById('courseTitle').value, 
                            yearFrom:document.getElementById('yearFrom').value, 
                            yearTo:document.getElementById('yearTo').value, 
                            description:document.getElementById('description').value, 
                            office:document.getElementById('office').value, 
                            extension:document.getElementById('extension').value, 
                            email:document.getElementById('email').value, 
                            consultation:document.getElementById('consulation').value, 
                            calender:document.getElementById('calender').value, 
                            lectureHours:document.getElementById('lectureHours').value, 
                            labHours:document.getElementById('labHours').value, 
                            tutHours:document.getElementById('tutHours').value, 
                            antirequisite:document.getElementById('antirequisite').value, 
                            prerequisites:document.getElementById('prerequisite').value, 
                            corequisite:document.getElementById('corequisite').value, 
                            CEABScience:document.getElementById('CEABScience').value, 
                            CEABDesign:document.getElementById('CEABDesign').value, 
                            textbook:document.getElementById('textbook').value, 
                            requiredRef:document.getElementById('requiredRef').value, 
                            recommendRef:document.getElementById('recommendRef').value,
                            GAType1: document.getElementById('ga1').value,
                            GAType2: document.getElementById('ga2').value,
                            GAType3: document.getElementById('ga3').value,
                            GAType4: document.getElementById('ga4').value,
                            GAValue1: document.getElementById('nm1').value,
                            GAValue2: document.getElementById('nm2').value,
                            GAValue3: document.getElementById('nm3').value,
                            GAValue4: document.getElementById('nm4').value,
                            knowledge: document.getElementById('knowledge-base').value, 
                            problem: document.getElementById('problem-analysis').value, 
                            investigation: document.getElementById('investigation').value,
                            design: document.getElementById('design').value,
                            tools: document.getElementById('engineering-tools').value,
                            team: document.getElementById('individual-team').value,
                            communication: document.getElementById('communication-skills').value,
                            professionalism: document.getElementById('professionalism').value,
                            impact: document.getElementById('impact').value,
                            ethics: document.getElementById('ethic-equity').value,
                            economics: document.getElementById('project-management').value,
                            learning: document.getElementById('life-long-learning').value,
                            textarea01: document.getElementById('textarea01').value,
                            textarea02: document.getElementById('textarea02').value,
                            textarea03: document.getElementById('textarea03').value,
                            textarea04: document.getElementById('textarea04').value,
                            textarea11: document.getElementById('textarea11').value,
                            textarea12: document.getElementById('textarea12').value,
                            textarea13: document.getElementById('textarea13').value,
                            textarea14: document.getElementById('textarea14').value,
                            textarea21: document.getElementById('textarea21').value,
                            textarea22: document.getElementById('textarea22').value,
                            textarea23: document.getElementById('textarea23').value,
                            textarea24: document.getElementById('textarea24').value,
                            textarea31: document.getElementById('textarea31').value,
                            textarea32: document.getElementById('textarea32').value,
                            textarea33: document.getElementById('textarea33').value,
                            textarea34: document.getElementById('textarea34').value,
                            gradeHomework: document.getElementById('homeworkWeight').value,
                            gradeQuiz: document.getElementById('quizWeight').value,
                            gradeLab: document.getElementById('labWeight').value,
                            gradeMidterm: document.getElementById('midtermWeight').value,
                            homeworkAssignment: document.getElementById('homework-assignment-info').value,
                            quizzes: document.getElementById('quizzes-info').value,
                            lab: document.getElementById('lab-info').value,
                            midterm: document.getElementById('midterm-info').value,
                            latePolicy: document.getElementById('late-policy').value,
                            locker: document.getElementById('locker-location').value,
                            mobileDevice: document.getElementById('device-info').value,
                            clicker: document.getElementById('clicker-info').value, 
                            approved: "false"
                                                        
                        })
                    });



                if(count <=0){
                    fetch(process.env.REACT_APP_SERVER_APP_API_ADDRES + "/api/outline", {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            timeStamp: document.getElementById('timeStamp').value,
                            profName:document.getElementById('profName').value ,
                            courseNumber:document.getElementById('courseNumber').value,
                            courseTitle:document.getElementById('courseTitle').value, 
                            yearFrom:document.getElementById('yearFrom').value, 
                            yearTo:document.getElementById('yearTo').value, 
                            description:document.getElementById('description').value, 
                            office:document.getElementById('office').value, 
                            extension:document.getElementById('extension').value, 
                            email:document.getElementById('email').value, 
                            consultation:document.getElementById('consulation').value, 
                            calender:document.getElementById('calender').value, 
                            lectureHours:document.getElementById('lectureHours').value, 
                            labHours:document.getElementById('labHours').value, 
                            tutHours:document.getElementById('tutHours').value, 
                            antirequisite:document.getElementById('antirequisite').value, 
                            prerequisites:document.getElementById('prerequisite').value, 
                            corequisite:document.getElementById('corequisite').value, 
                            CEABScience:document.getElementById('CEABScience').value, 
                            CEABDesign:document.getElementById('CEABDesign').value, 
                            textbook:document.getElementById('textbook').value, 
                            requiredRef:document.getElementById('requiredRef').value, 
                            recommendRef:document.getElementById('recommendRef').value,
                            GAType1: document.getElementById('ga1').value,
                            GAType2: document.getElementById('ga2').value,
                            GAType3: document.getElementById('ga3').value,
                            GAType4: document.getElementById('ga4').value,
                            GAValue1: document.getElementById('nm1').value,
                            GAValue2: document.getElementById('nm2').value,
                            GAValue3: document.getElementById('nm3').value,
                            GAValue4: document.getElementById('nm4').value,
                            knowledge: document.getElementById('knowledge-base').value, 
                            problem: document.getElementById('problem-analysis').value, 
                            investigation: document.getElementById('investigation').value,
                            design: document.getElementById('design').value,
                            tools: document.getElementById('engineering-tools').value,
                            team: document.getElementById('individual-team').value,
                            communication: document.getElementById('communication-skills').value,
                            professionalism: document.getElementById('professionalism').value,
                            impact: document.getElementById('impact').value,
                            ethics: document.getElementById('ethic-equity').value,
                            economics: document.getElementById('project-management').value,
                            learning: document.getElementById('life-long-learning').value,
                            textarea01: document.getElementById('textarea01').value,
                            textarea02: document.getElementById('textarea02').value,
                            textarea03: document.getElementById('textarea03').value,
                            textarea04: document.getElementById('textarea04').value,
                            textarea11: document.getElementById('textarea11').value,
                            textarea12: document.getElementById('textarea12').value,
                            textarea13: document.getElementById('textarea13').value,
                            textarea14: document.getElementById('textarea14').value,
                            textarea21: document.getElementById('textarea21').value,
                            textarea22: document.getElementById('textarea22').value,
                            textarea23: document.getElementById('textarea23').value,
                            textarea24: document.getElementById('textarea24').value,
                            textarea31: document.getElementById('textarea31').value,
                            textarea32: document.getElementById('textarea32').value,
                            textarea33: document.getElementById('textarea33').value,
                            textarea34: document.getElementById('textarea34').value,
                            gradeHomework: document.getElementById('homeworkWeight').value,
                            gradeQuiz: document.getElementById('quizWeight').value,
                            gradeLab: document.getElementById('labWeight').value,
                            gradeMidterm: document.getElementById('midtermWeight').value,
                            homeworkAssignment: document.getElementById('homework-assignment-info').value,
                            quizzes: document.getElementById('quizzes-info').value,
                            lab: document.getElementById('lab-info').value,
                            midterm: document.getElementById('midterm-info').value,
                            latePolicy: document.getElementById('late-policy').value,
                            locker: document.getElementById('locker-location').value,
                            mobileDevice: document.getElementById('device-info').value,
                            clicker: document.getElementById('clicker-info').value, 
                            approved: "false"
                                                        
                        })
                    });
                }
                else{
                    fetch(`${process.env.REACT_APP_SERVER_APP_API_ADDRES}/api/putInfo/${document.getElementById('courseNumber').value}/${document.getElementById('profName').value}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            timeStamp: document.getElementById('timeStamp').value,
                            courseTitle:document.getElementById('courseTitle').value, 
                            yearFrom:document.getElementById('yearFrom').value, 
                            yearTo:document.getElementById('yearTo').value, 
                            description:document.getElementById('description').value, 
                            office:document.getElementById('office').value, 
                            extension:document.getElementById('extension').value, 
                            email:document.getElementById('email').value, 
                            consultation:document.getElementById('consulation').value, 
                            calender:document.getElementById('calender').value, 
                            lectureHours:document.getElementById('lectureHours').value, 
                            labHours:document.getElementById('labHours').value, 
                            tutHours:document.getElementById('tutHours').value, 
                            antirequisite:document.getElementById('antirequisite').value, 
                            prerequisites:document.getElementById('prerequisite').value, 
                            corequisite:document.getElementById('corequisite').value, 
                            CEABScience:document.getElementById('CEABScience').value, 
                            CEABDesign:document.getElementById('CEABDesign').value, 
                            textbook:document.getElementById('textbook').value, 
                            requiredRef:document.getElementById('requiredRef').value, 
                            recommendRef:document.getElementById('recommendRef').value,
                            GAType1: document.getElementById('ga1').value,
                            GAType2: document.getElementById('ga2').value,
                            GAType3: document.getElementById('ga3').value,
                            GAType4: document.getElementById('ga4').value,
                            GAValue1: document.getElementById('nm1').value,
                            GAValue2: document.getElementById('nm2').value,
                            GAValue3: document.getElementById('nm3').value,
                            GAValue4: document.getElementById('nm4').value,
                            knowledge: document.getElementById('knowledge-base').value, 
                            problem: document.getElementById('problem-analysis').value, 
                            investigation: document.getElementById('investigation').value,
                            design: document.getElementById('design').value,
                            tools: document.getElementById('engineering-tools').value,
                            team: document.getElementById('individual-team').value,
                            communication: document.getElementById('communication-skills').value,
                            professionalism: document.getElementById('professionalism').value,
                            impact: document.getElementById('impact').value,
                            ethics: document.getElementById('ethic-equity').value,
                            economics: document.getElementById('project-management').value,
                            learning: document.getElementById('life-long-learning').value,
                            textarea01: document.getElementById('textarea01').value,
                            textarea02: document.getElementById('textarea02').value,
                            textarea03: document.getElementById('textarea03').value,
                            textarea04: document.getElementById('textarea04').value,
                            textarea11: document.getElementById('textarea11').value,
                            textarea12: document.getElementById('textarea12').value,
                            textarea13: document.getElementById('textarea13').value,
                            textarea14: document.getElementById('textarea14').value,
                            textarea21: document.getElementById('textarea21').value,
                            textarea22: document.getElementById('textarea22').value,
                            textarea23: document.getElementById('textarea23').value,
                            textarea24: document.getElementById('textarea24').value,
                            textarea31: document.getElementById('textarea31').value,
                            textarea32: document.getElementById('textarea32').value,
                            textarea33: document.getElementById('textarea33').value,
                            textarea34: document.getElementById('textarea34').value,
                            gradeHomework: document.getElementById('homeworkWeight').value,
                            gradeQuiz: document.getElementById('quizWeight').value,
                            gradeLab: document.getElementById('labWeight').value,
                            gradeMidterm: document.getElementById('midtermWeight').value,
                            homeworkAssignment: document.getElementById('homework-assignment-info').value,
                            quizzes: document.getElementById('quizzes-info').value,
                            lab: document.getElementById('lab-info').value,
                            midterm: document.getElementById('midterm-info').value,
                            latePolicy: document.getElementById('late-policy').value,
                            locker: document.getElementById('locker-location').value,
                            mobileDevice: document.getElementById('device-info').value,
                            clicker: document.getElementById('clicker-info').value, 
                            approved: "false"
                        })
                    });
                }
            })
        })
    }

    // fetch saved information based on profName and courseNumber
    function showInfo(){
        const courseShow = document.getElementById('courseShow').value;
        const profShow = document.getElementById('profShow').value;
        fetch(`${process.env.REACT_APP_SERVER_APP_API_ADDRES}/api/getInfo/${courseShow}/${profShow}`).then((res)=>{
            res.json().then((data)=>{
                document.getElementById('timeStamp').value = data[0].timeStamp;
                document.getElementById('courseNumber').value = data[0].courseNumber;
                document.getElementById('courseTitle').value = data[0].courseTitle;
                document.getElementById('yearFrom').value=data[0].yearFrom;
                document.getElementById('yearTo').value = data[0].yearTo;
                document.getElementById('description').value = data[0].description;
                document.getElementById('profName').value = data[0].profName;
                document.getElementById('office').value = data[0].office;
                document.getElementById('extension').value = data[0].extension;
                document.getElementById('email').value = data[0].email;
                document.getElementById('consulation').value = data[0].consultation;
                document.getElementById('calender').value = data[0].calender; 
                document.getElementById('lectureHours').value = data[0].lectureHours; 
                document.getElementById('labHours').value = data[0].labHours; 
                document.getElementById('tutHours').value = data[0].tutHours; 
                document.getElementById('antirequisite').value = data[0].antirequisite; 
                document.getElementById('prerequisite').value = data[0].prerequisites; 
                document.getElementById('corequisite').value = data[0].corequisite; 
                document.getElementById('CEABScience').value = data[0].CEABScience; 
                document.getElementById('CEABDesign').value = data[0].CEABDesign; 
                document.getElementById('textbook').value = data[0].textbook; 
                document.getElementById('requiredRef').value = data[0].requiredRef; 
                document.getElementById('recommendRef').value = data[0].recommendRef;
                document.getElementById('ga1').value = data[0].GAType1;
                document.getElementById('ga2').value = data[0].GAType2;
                document.getElementById('ga3').value = data[0].GAType3;
                document.getElementById('ga4').value = data[0].GAType4;
                document.getElementById('nm1').value = data[0].GAValue1;
                document.getElementById('nm2').value = data[0].GAValue2;
                document.getElementById('nm3').value = data[0].GAValue3;
                document.getElementById('nm4').value = data[0].GAValue4;
                document.getElementById('knowledge-base').value = data[0].knowledge;
                document.getElementById('problem-analysis').value = data[0].problem;
                document.getElementById('investigation').value = data[0].investigation;
                document.getElementById('design').value = data[0].design;
                document.getElementById('engineering-tools').value = data[0].tools;
                document.getElementById('individual-team').value = data[0].team;
                document.getElementById('communication-skills').value = data[0].communication;
                document.getElementById('professionalism').value = data[0].professionalism;
                document.getElementById('impact').value = data[0].impact;
                document.getElementById('ethic-equity').value = data[0].ethics;
                document.getElementById('project-management').value = data[0].economics;
                document.getElementById('life-long-learning').value = data[0].learning;
                document.getElementById('textarea01').value = data[0].textarea01;
                document.getElementById('textarea02').value = data[0].textarea02;
                document.getElementById('textarea03').value = data[0].textarea03;
                document.getElementById('textarea04').value = data[0].textarea04;
                document.getElementById('textarea11').value = data[0].textarea11;
                document.getElementById('textarea12').value = data[0].textarea12;
                document.getElementById('textarea13').value = data[0].textarea13;
                document.getElementById('textarea14').value = data[0].textarea14;
                document.getElementById('textarea21').value = data[0].textarea21;
                document.getElementById('textarea22').value = data[0].textarea22;
                document.getElementById('textarea23').value = data[0].textarea23;
                document.getElementById('textarea24').value = data[0].textarea24;
                document.getElementById('textarea31').value = data[0].textarea31;
                document.getElementById('textarea32').value = data[0].textarea32;
                document.getElementById('textarea33').value = data[0].textarea33;
                document.getElementById('textarea34').value = data[0].textarea34;
                document.getElementById('homeworkWeight').value = data[0].gradeHomework;
                document.getElementById('quizWeight').value = data[0].gradeQuiz;
                document.getElementById('labWeight').value = data[0].gradeLab;
                document.getElementById('midtermWeight').value = data[0].gradeMidterm;
                document.getElementById('homework-assignment-info').value = data[0].homeworkAssignment;
                document.getElementById('quizzes-info').value = data[0].quizzes;
                document.getElementById('lab-info').value = data[0].lab;
                document.getElementById('midterm-info').value = data[0].midterm;
                document.getElementById('late-policy').value = data[0].latePolicy;
                document.getElementById('locker-location').value = data[0].locker;
                document.getElementById('device-info').value = data[0].mobileDevice;
                document.getElementById('clicker-info').value = data[0].clicker;
                matchedData = data[0];
                setSelectedGA1(data[0].GAType1);
                setSelectedNumber(data[0].GAValue1);

                setSelectedGA2(data[0].GAType2);
                setSelectedNumber2(data[0].GAValue2);

                setSelectedGA3(data[0].GAType3);
                setSelectedNumber3(data[0].GAValue3);

                setSelectedGA4(data[0].GAType4);
                setSelectedNumber4(data[0].GAValue4);
                
            });
        });
    };

    // print as PDF 
    function print(){

        const course = document.getElementById('courseNumber').value;
        const prof = document.getElementById('profName').value;

        if(course != '' && prof!=''){ // This makes sure primary key is not empty !
            fetch(`http://localhost:3333/api/getInfo/${course}/${prof}`).then((res)=>{
            res.json().then((data)=>{
                    if (data.length === 0) { // This makes sure data will be found
                        alert("Data not found");
                      } else {
                        if(data[0].approved == "true"){ // We will give two different result when it is approved or not !
                            var element = document.querySelector("#myPage");
                var doc = new jsPDF("p", "pt", [2100, element.offsetHeight*10]);
                doc.html(element,{
                    callback: function(pdf){
                        pdf.save("mupdf.pdf");
                    }
                })
                        }else{
                            alert("Print disabled !");
                        }
                      }
                
            });
        });
        }else{
            alert("Empty primary key !")
        }



    }

    // define the GA indicator drop down menu 
    const options = {
        KB:  ["1", "2", "3", "4"],
        PA:  ["1", "2", "3"],
        I:   ["1", "2", "3"],
        D:   ["1", "2", "3", "4"], 
        ET:  ["1", "2", "3"],
        ITW: ["1", "2", "3"],
        CS:  ["1", "2", "3"],
        PR:  ["1", "2", "3"],
        IESE:["1", "2", "3"],
        EE:  ["1", "2", "3"],
        EPM: ["1", "2", "3", "4"],
        LL:  ["1", "2"]
    };

    // Set up state for the selected GA and values 
    const [selectedGA1, setSelectedGA1] = useState("");
    const [selectedNumber, setSelectedNumber] = useState("");

    const [selectedGA2, setSelectedGA2] = useState("");
    const [selectedNumber2, setSelectedNumber2] = useState("");

    const [selectedGA3, setSelectedGA3] = useState("");
    const [selectedNumber3, setSelectedNumber3] = useState("");

    const [selectedGA4, setSelectedGA4] = useState("");
    const [selectedNumber4, setSelectedNumber4] = useState("");


    // Handle changes to the GA select element
    const handleGA1Change = (event) => {
        const value = event.target.value;
        setSelectedGA1(value);
        setSelectedNumber("");
        const id = event.target.id;
        matchedData[id] = event.target.value
    }

    const handleGA2Change = (event) => {
        const value = event.target.value;
        setSelectedGA2(value);
        setSelectedNumber2("");
        const id = event.target.id;
        matchedData[id] = event.target.value
    }

    const handleGA3Change = (event) => {
        const value = event.target.value;
        setSelectedGA3(value);
        setSelectedNumber3("");
        const id = event.target.id;
        matchedData[id] = event.target.value
    }

    const handleGA4Change = (event) => {
        const value = event.target.value;
        setSelectedGA4(value);
        setSelectedNumber4("");
        const id = event.target.id;
        matchedData[id] = event.target.value
    }

    // Generate the options for the number select element based on the selected GA indicator
    const numberOptions1 = selectedGA1 ? options[selectedGA1].map(number => (
        <option key={number} value={number}>{number}</option>
    )) : null;

    const numberOptions2 = selectedGA2 ? options[selectedGA2].map(number => (
        <option key={number} value={number}>{number}</option>
    )) : null;

    const numberOptions3 = selectedGA3 ? options[selectedGA3].map(number => (
        <option key={number} value={number}>{number}</option>
    )) : null;

    const numberOptions4 = selectedGA4 ? options[selectedGA4].map(number => (
        <option key={number} value={number}>{number}</option>
    )) : null;

    // click the button, add a new textarea box 
    // Set up state for the textareas
    const [textareas, setTextareas] = useState([{id: 1}]);
    const [nextId, setNextId] = useState(2);
    
    const [textareas2, setTextareas2] = useState([{id: 100}]);
    const [nextId2, setNextId2] = useState(2);

    const [textareas3, setTextareas3] = useState([{id: 1000}]);
    const [nextId3, setNextId3] = useState(2);

    const [textareas4, setTextareas4] = useState([{id: 10000}]);
    const [nextId4, setNextId4] = useState(2);

    // Handle click event for the "Add" button
    const handleAddTextarea = () => {
        setTextareas([...textareas, {id: nextId}]);
        setNextId(nextId + 1);
    }

    const handleAddTextarea2 = () => {
        setTextareas2([...textareas2, {id: nextId2}]);
        setNextId2(nextId2 + 1);
        console.log(document.getElementById('100').value);
    }

    const handleAddTextarea3 = () => {
        setTextareas3([...textareas3, {id: nextId3}]);
        setNextId3(nextId3 + 1);
    }

    const handleAddTextarea4 = () => {
        setTextareas4([...textareas4, {id: nextId4}]);
        setNextId4(nextId4 + 1);
    }

    // Handle click event for the "Remove" button
    const handleRemoveTextarea = (id) => {
        setTextareas(textareas.filter(textarea => textarea.id !== id));
    }

    const handleRemoveTextarea2 = (id) => {
        setTextareas2(textareas2.filter(textarea => textarea.id !== id));
    }

    const handleRemoveTextarea3 = (id) => {
        setTextareas3(textareas3.filter(textarea => textarea.id !== id));
    }

    const handleRemoveTextarea4 = (id) => {
        setTextareas4(textareas4.filter(textarea => textarea.id !== id));
    }

    // Render the textareas
    const textareaElements = textareas.map(textarea => (
        <div key={textarea.id}>
            <textarea type="text" />
            <button onClick={() => handleRemoveTextarea(textarea.id)}>Remove</button>
        </div>
    ));

    const textareaElements2 = textareas2.map(textarea => (
        <div key={textarea.id}>
            <textarea type="text" />
            <button onClick={() => handleRemoveTextarea2(textarea.id)}>Remove</button>
        </div>
    ));

    const textareaElements3 = textareas3.map(textarea => (
        <div key={textarea.id}>
            <textarea type="text" />
            <button onClick={() => handleRemoveTextarea3(textarea.id)}>Remove</button>
        </div>
    ));

    const textareaElements4 = textareas4.map(textarea => (
        <div key={textarea.id}>
            <textarea type="text" />
            <button onClick={() => handleRemoveTextarea4(textarea.id)}>Remove</button>
        </div>
    ));
 
    return(
        <div>
            <div>
                <div>

                    <input id="courseShow" placeholder="Enter course number"/>
                    <input id="profShow" placeholder="Enter prof name"/>
                    <button id="show" onClick={showInfo}> Show </button>
                    <button id="archive" onClick={goArchive}>View Archive</button>
                    <button id="indicator" onClick={goIndicator}>GA indicator</button>
                    <button id="editOutline" onClick={goEditOutline}>View History</button>
                    <button id="printPDF" onClick={print}>Print as PDF</button>
                    <button id="logOut" onClick={goLogin}>Log Out</button>
                    <button id="home" onClick={goHome}>Back to Home</button>
                </div>

                <div className="scroll-bar1" id='myPage'>

                    <button id="saveBtn" onClick={handleForm}>Save</button>
                    <input type="text" id='timeStamp' placeholder="Enter time you edited"/>
                    <h3 className="line1">Western University</h3>
                    <h3 className="line1">Faculty of Engineering</h3>
                    <h3 className="line1">Department of Electrical and Computer Engineering</h3>
            
                    <h3 className="line1">
                        Course ID <input type="text" id="courseNumber" className="classNumber" name='courseNumber'  onChange={handleInput} placeholder="XXXX A/B" required/>
                        A/B:<input type="text"   id="courseTitle"  className="classTitle" name='courseTitle'  onChange={handleInput} placeholder="Course Title"/>
                    </h3>
                    
                    <h3 className="line1">
                        Year 20 <input type="number"  id="yearFrom" className="classDate" name='yearFrom'  onChange={handleInput} placeholder="YY"/>
                        - <input type="number" id="yearTo" className="classDate" name='yearTo'  onChange={handleInput} placeholder="YY"/>
                    </h3>
                    <h3 className="titles">Description:</h3>
                    <textarea type="text" id="description" className="description-box" name='description'  onChange={handleInput} placeholder="Enter Course Description"/>

                    <h3 className="titles">Instructor:</h3>

                    <div className="profName">
                        Dr. <input id="profName" type="text" className="prof-box" name='profName'  onChange={handleInput} placeholder="Name" required/>,P.Eng.
                    </div>

                    <div className="profOther">
                        TEB <input id="office" type="number" className="prof-box" name='office'  onChange={handleInput} placeholder="XXXX"/>, 519-661-2111 ext.
                        <input id="extension" type="number" className="prof-box" name='extension'  onChange={handleInput} placeholder="XXXXX"/>
                        <input id ="email" type="email" className="prof-box" name='email'  onChange={handleInput} placeholder="Email" pattern=".*@uwo.ca"/>
                    </div>

                    <div className="profHours">
                        Consultation hours: <input id="consulation" type="text" className="prof-box" name='consultation'  onChange={handleInput} placeholder="Consulation"/>
                    </div>
                    
                    <h3 className="titles">Academic Calendar Copy:</h3>
                    <br></br>
                    <input id="calender" type="text" className="title" name='calender'  onChange={handleInput} placeholder="Enter Academic Calendar Copy"/>

                    <h3 className="titles">Contact Hours:</h3>

                    <div className="school-hours">
                        <input id="lectureHours" type="number" className="hour-box" name='lectureHours' onChange={handleInput} placeholder="X"/> lecture hours,
                        <input id="labHours" type="number" className="hour-box" name='labHours'  onChange={handleInput} placeholder="Y"/> laboratory hours,
                        <input id="tutHours" type="number" className="hour-box" name='tutHours' onChange={handleInput} placeholder="Z"/> tutorial hours, 0.5 course.
                    </div>

                    <h3 className="titles">Antirequisite:</h3>
                    <input id="antirequisite" type="text" className="title" name='antirequisite'  onChange={handleInput} placeholder="Enter Antirequisite:"/>

                    <h3 className="titles">Prerequisites:</h3>
                    <input id="prerequisite" type="text" className="title" name='prerequisites'  onChange={handleInput} placeholder="Enter Prerequisites"/>

                    <h3 className="titles">Co-requisite:</h3>
                    <input id="corequisite" type="text" className="title" name='corequisite'  onChange={handleInput} placeholder="Enter Co-requisites"/>
                    
                    <span className="policy1"><br></br><br/>Unless you have either the requisites for this course or written special permission from your Dean to enroll in it, you will be removed from this course and it will be deleted from your re-</span>
                    <span className="policy1">cord. This decision may not be appealed. You will receive no adjustment to your fees in the event that you are dropped from a course for failing to have the necessary prerequisites</span>

                    <br></br>
                    <h3 className="titles">CEAB Academic Units:</h3>

                    <div className="ceab-box">
                        Engineering Sciences <input id="CEABScience" type="number" className="hour-box" name='CEABScience'  onChange={handleInput} placeholder="X"/>%,
                        Engineering Design <input id="CEABDesign" type="number" className="hour-box" name='CEABDesign'  onChange={handleInput} placeholder="Y"/>%.
                    </div>

                    <h3 className="titles">Required Textbook:</h3>
                    <input id="textbook" type="text" className="title" name='textbook'  onChange={handleInput} placeholder="Enter Textbook Information"/>

                    <h3 className="titles">Other Required References:</h3>
                    <input id="requiredRef" type="text" className="title" name='requiredRef'  onChange={handleInput} placeholder="Enter Other Required References"/>

                    <h3 className="titles">Recommended References:</h3>
                    <input id="recommendRef" type="text" className="title" name='recommendRef'  onChange={handleInput} placeholder="Enter Other Recommended References"/>

                    {/* design table for CEAB attributes */}    
                    <h3 className="titles">General Learning Objectives (CEAB Graduate Attributes)</h3>
                    <table className="indicator-table">
                        <tbody>
                            <tr>
                                <td className="table-left">Knowledge Base</td>
                                <td className="table-right"><input type="text" id="knowledge-base" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Use of Engineering Tools</td>
                                <td className="table-right"><input type="text" id="engineering-tools" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Impact on Society and the Environment</td>
                                <td className="table-right"><input type="text" id="impact" className="table-text" onChange={handleInput} placeholder="X"/></td>
                            </tr>
                            <tr>
                                <td className="table-left">Problem Analysis</td>
                                <td className="table-right"><input type="text" id="problem-analysis" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Individual and Team Work</td>
                                <td className="table-right"><input type="text" id="individual-team" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Ethics and Equity</td>
                                <td className="table-right"><input type="text" id="ethic-equity" className="table-text" onChange={handleInput} placeholder="X"/></td>
                            </tr>
                            <tr>
                                <td className="table-left">Investigation</td>
                                <td className="table-right"><input type="text" id="investigation" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Communication Skills</td>
                                <td className="table-right"><input type="text" id="communication-skills" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Economics and Project Management</td>
                                <td className="table-right"><input type="text" id="project-management" className="table-text" onChange={handleInput} placeholder="X"/></td>
                            </tr>
                            <tr>
                                <td className="table-left">Design</td>
                                <td className="table-right"><input type="text" id="design" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Professionalism</td>
                                <td className="table-right"><input type="text" id="professionalism" className="table-text" onChange={handleInput} placeholder="X"/></td>
                                <td className="table-left">Life Long Learning</td>
                                <td className="table-right"><input type="text" id="life-long-learning" className="table-text" onChange={handleInput} placeholder="X"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>

                    <span className="policy1">Notation: where x be I: Introductory, D: Intermediate, A: Advanced, or empty. I – The instructor will introduce the topic at the level required.  It is not necessary for the student to have seen </span>
                    <span className="policy1">the material before. D – There may be a reminder or review, but the student is expected to have seen and been tested on the material before taking the course. A – It is expected that the</span>
                    <span className="policy1">student can apply the knowledge without prompting (e.g. no review).</span>
                    
                    <table className="ga-table">
                        <tbody>
                            <tr>
                                <td>Course Topics and Specific Learning Outcomes</td>
                                <td>CEAB Graduate Attributes Indicators</td>
                            </tr>
                            <tr>
                                <td className="ga-left">
                                    <p>At the end of the section, student will able to:</p>
                                    {/* {textareaElements}
                                    <button onClick={handleAddTextarea}>Add</button> */}
                                    <textarea type="text" id="textarea01" onChange={handleInput} />
                                    <textarea type="text" id="textarea02" onChange={handleInput} />
                                    <textarea type="text" id="textarea03" onChange={handleInput} />
                                    <textarea type="text" id="textarea04" onChange={handleInput} />
                                </td>
                                <td className="ga-right">
                                    <select id='ga1' value={selectedGA1} onChange={handleGA1Change}>
                                        <option value="">Select GA Type</option>
                                        <option value="KB">KB</option>
                                        <option value="PA">PA</option>
                                        <option value="I">I</option>
                                        <option value="D">D</option>
                                        <option value="ET">ET</option>
                                        <option value="ITW">ITW</option>
                                        <option value="CS">CS</option>
                                        <option value="PR">PR</option>
                                        <option value="EE">EE</option>
                                        <option value="EPM">EPM</option>
                                        <option value="IESE">IESE</option>
                                        <option value="LL">LL</option>
                                    </select>
                                    <select id='nm1' value={selectedNumber} onChange={(event) => {setSelectedNumber(event.target.value);const id = event.target.id; matchedData[id] = event.target.value}}>
                                        <option value="">Select GA Value</option>
                                        {numberOptions1}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="ga-left">
                                    <p>At the end of the section, student will able to:</p>
                                    {/* {textareaElements2}
                                    <button onClick={handleAddTextarea2}>Add</button> */}
                                    <textarea type="text" id="textarea11" onChange={handleInput} />
                                    <textarea type="text" id="textarea12" onChange={handleInput} />
                                    <textarea type="text" id="textarea13" onChange={handleInput} />
                                    <textarea type="text" id="textarea14" onChange={handleInput} />
                                </td>
                                <td className="ga-right">
                                <select id='ga2' value={selectedGA2} onChange={handleGA2Change}>
                                        <option value="">Select GA Type</option>
                                        <option value="KB">KB</option>
                                        <option value="PA">PA</option>
                                        <option value="I">I</option>
                                        <option value="D">D</option>
                                        <option value="ET">ET</option>
                                        <option value="ITW">ITW</option>
                                        <option value="CS">CS</option>
                                        <option value="PR">PR</option>
                                        <option value="EE">EE</option>
                                        <option value="EPM">EPM</option>
                                        <option value="IESE">IESE</option>
                                        <option value="LL">LL</option>
                                    </select>
                                    <select id='nm2' value={selectedNumber2} onChange={(event) => {setSelectedNumber2(event.target.value);const id = event.target.id;matchedData[id] = event.target.value}}>
                                        <option value="">Select GA Value</option>
                                        {numberOptions2}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="ga-left">
                                    <p>At the end of the section, student will able to:</p>
                                    {/* {textareaElements3}
                                    <button onClick={handleAddTextarea3}>Add</button> */}
                                    <textarea type="text" id="textarea21" onChange={handleInput} />
                                    <textarea type="text" id="textarea22" onChange={handleInput} />
                                    <textarea type="text" id="textarea23" onChange={handleInput} />
                                    <textarea type="text" id="textarea24" onChange={handleInput} />
                                </td>
                                <td className="ga-right">
                                <select id='ga3' value={selectedGA3} onChange={handleGA3Change}>
                                        <option value="">Select GA Type</option>
                                        <option value="KB">KB</option>
                                        <option value="PA">PA</option>
                                        <option value="I">I</option>
                                        <option value="D">D</option>
                                        <option value="ET">ET</option>
                                        <option value="ITW">ITW</option>
                                        <option value="CS">CS</option>
                                        <option value="PR">PR</option>
                                        <option value="EE">EE</option>
                                        <option value="EPM">EPM</option>
                                        <option value="IESE">IESE</option>
                                        <option value="LL">LL</option>
                                    </select>
                                    <select id='nm3' value={selectedNumber3} onChange={(event) => {setSelectedNumber3(event.target.value);const id = event.target.id;matchedData[id] = event.target.value}}>
                                        <option value="">Select GA Value</option>
                                        {numberOptions3}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="ga-left">
                                    <p>At the end of the section, student will able to:</p>
                                    {/* {textareaElements4}
                                    <button onClick={handleAddTextarea4}>Add</button> */}
                                    <textarea type="text" id="textarea31" onChange={handleInput} />
                                    <textarea type="text" id="textarea32" onChange={handleInput} />
                                    <textarea type="text" id="textarea33" onChange={handleInput} />
                                    <textarea type="text" id="textarea34" onChange={handleInput} />
                                </td>
                                <td className="ga-right">
                                <select id='ga4' value={selectedGA4} onChange={handleGA4Change}>
                                        <option value="">Select GA Type</option>
                                        <option value="KB">KB</option>
                                        <option value="PA">PA</option>
                                        <option value="I">I</option>
                                        <option value="D">D</option>
                                        <option value="ET">ET</option>
                                        <option value="ITW">ITW</option>
                                        <option value="CS">CS</option>
                                        <option value="PR">PR</option>
                                        <option value="EE">EE</option>
                                        <option value="EPM">EPM</option>
                                        <option value="IESE">IESE</option>
                                        <option value="LL">LL</option>
                                    </select>
                                    <select id='nm4' value={selectedNumber4} onChange={(event) => {setSelectedNumber4(event.target.value);const id = event.target.id; matchedData[id] = event.target.value}}>
                                        <option value="">Select GA Value</option>
                                        {numberOptions4}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br/>
                    <h3 className="titles">Evaluation:</h3>
                    <table className="grade-table">
                        <tr>
                            <td>Course Component</td>
                            <td>Weight</td>
                        </tr>
                        <tr>
                            <td>Homework Assignments</td>
                            <td><input type="number" id="homeworkWeight" name="homeworkWeight" onChange={handleInput} />%</td>
                        </tr>
                        <tr>
                            <td>Quizzes</td>
                            <td><input type="number" id="quizWeight" name="quizWeight" onChange={handleInput} />%</td>
                        </tr>
                        <tr>
                            <td>Laboratory</td>
                            <td><input type="number" id="labWeight" name="labWeight" onChange={handleInput} />%</td>
                        </tr>
                        <tr>
                            <td>Midterm Test</td>
                            <td><input type="number" id="midtermWeight" name="midtermWeight" onChange={handleInput} />%</td>
                        </tr>
                        <tr>
                            <td>Final Examination</td>
                            <td>50%</td>
                        </tr>
                    </table>

                    <br/>
                    <br/>
                    <br/>
                    <span className="policy1">To obtain a passing grade in the course, a mark of 50% or more must be achieved on the final examination as well as on the laboratory. A final examination or laboratory mark less than 50%</span>
                    <span className="policy1">will result in a final course grade of 48% or less.</span>

                    <h3 className="titles">Homework Assignments:</h3>
                    <input type="text" className="title" id="homework-assignment-info" onChange={handleInput} placeholder="Enter Homework Assignments Information"/>
                    <h3 className="titles">Quizzes: </h3>
                    <input type="text" className="title" id="quizzes-info" onChange={handleInput} placeholder="Enter Quizzes Information"/>
                    <h3 className="titles">Laboratory: </h3>
                    <input type="text" className="title" id="lab-info" onChange={handleInput} placeholder="Enter Laboratory Information"/>
                    <h3 className="titles">Midterm Test:</h3>
                    <input type="text" className="title" id="midterm-info" onChange={handleInput} placeholder="Enter Midterm Information"/>

                    <h3 className="titles">Final Examination: </h3>
                    <span className="policy1">The final examination will be take place during the regular examination period. </span>

                    <h3 className="titles">Late Submission Policy: </h3>
                    <input type="text" className="title" id="late-policy" placeholder="Enter Late Policy" onChange={handleInput} />

                    <h3 className="titles">Assignment Submission Locker:</h3>
                    <input type="text" className="title" id="locker-location" placeholder="Enter Locker Location" onChange={handleInput} />

                    <h3 className="titles">Use of English:</h3>
                    <span className="policy1">In accordance with Senate and Faculty Policy, students may be penalized up to 10% of the marks on all assignments, tests, and examinations for improper use of English. Additionally, poorly </span>
                    <span className="policy1">written work with the exception of the final examination may be returned without grading. If resubmission of the work is permitted, it may be graded with marks deducted for poor Engl- </span>
                    <span className="policy1">ish and/or late submission.</span>

                    <h3 className="titles">Attendance</h3>
                    <span className="policy1">Any student who, in the opinion of the instructor, is absent too frequently from class, laboratory, or tutorial periods will be reported to the Dean ( after due warning has been given ). On  </span>
                    <span className="policy1">the recommendation of the department, and with the permission of the Dean, the student will be debarred from taking the regular final examination in the course.</span>

                    <h3 className="titles">Absence Due to Illness or Other Circumstances:</h3>
                    <span className="policy1">Students should immediately consult with the instructor or department Chair if they have any problems that could affect their performance in the course. Where appropriate, the problem </span>
                    <span className="policy1">should be documented (see the attached “Instructions for Students Unable to Write Tests or Examinations or Submit Assignments as Scheduled”). The student should seek advice from the </span>
                    <span className="policy1">instructor or department Chair regarding how best to deal with the problem. Failure to notify the instructor or department Chair immediately (or as soon as possible thereafter) will have </span>
                    
                    <span className="policy1">a negative effect on any appeal.<br></br><br></br>For more information concerning medical accommodations, see the relevant section of the Academic Handbook:</span>
                    <span className="policy1">
                        <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf">http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf</a >
                    </span>

                    <span className="policy1"><br></br>For more information concerning accommodations for religious holidays, see the relevant section of the Academic Handbook:</span>
                    <span className="policy1">
                        <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf">http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf</a>
                    </span>
                    
                    <h3 className="titles">Missed Midterm Examinations:</h3>
                    <span className="policy1">If a student misses a midterm examination, she or he must follow the Instructions for Students Unable to Write Tests and provide documentation to Undergraduate Services Office within </span>
                    <span className="policy1">24 hours of the missed test. If accommodation is granted, the department will decide whether to provide a make-up test or allow reweighting of the test, where reweighting means the m-</span>
                    <span className="policy1">arks normally allotted for the midterm will be added to the final exam. If no reasonable justification for missing the test can be found, then the student will receive a mark of zero for the</span>
                    <span className="policy1">test.<br></br><br></br>If a student is going to miss the midterm examination for religious reasons, they must inform the instructor in writing within 48 hours of the announcement of the exam date or they will</span>
                    <span className="policy1">be required to write the exam. </span>

                    <h3 className="titles">Cheating and Plagiarism:</h3>
                    <span className="policy1">Students must write their essays and assignments in their own words. Whenever students take an idea or a passage from another author, they must acknowledge their debt both by using </span>
                    <span className="policy1">quotation marks where appropriate and by proper referencing such as footnotes or citations. University policy states that cheating, including plagiarism, is a scholastic offence. The commis-</span>
                    <span className="policy1">sion of a scholastic offence is attended by academic penalties, which might include expulsion from the program. If you are caught cheating, there will be no second warning.</span>
                    <span className="policy1"><br></br>All required papers may be subject to submission for textual similarity review to commercial plagiarism-detection software under license to the University for the detection of plagiarism.</span>
                    <span className="policy1">All papers submitted will be included as source documents on the reference database for the purpose of detecting plagiarism of papers subsequently submitted to the system. Use of the s-</span>
                    <span className="policy1">ervice is subject to the licensing agreement, currently between the University of Western Ontario and Turnitin.com (<a href="http://www.turnitin.com">http://www.turnitin.com</a>). </span>
                    <span className="policy1"><br></br>Scholastic offences are taken seriously and students are directed to read the appropriate policy, specifically, the definition of what constitutes a Scholastic Offence, in the relevant section of</span>
                    
                    <span className="policy1">the Academic Handbook:<br></br></span>
                    <span className="policy1">
                        <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf">http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf</a>
                    </span>

                   
                    <h3 className="titles">Use of Electronic Devices:</h3>
                    <input type="text" className="title" id="device-info" placeholder="Enter Electronic Devices Information" onChange={handleInput} />
                    <h3 className="titles">Use of Personal Response Devices (“Clickers”):</h3>
                    <input type="text" className="title" id="clicker-info" placeholder="Enter Clicker Information" onChange={handleInput} />

                    <h3 className="titles">Policy on Repeating All Components of a Course:</h3>
                    <span className="policy1">Students who are required to repeat an Engineering course must repeat all components of the course. No special permissions will be granted enabling a student to retain laboratory, assig-</span>
                    <span className="policy1">nment, or test marks from previous years. Previously completed assignments and laboratories cannot be resubmitted by the student for grading in subsequent years.</span>

                    <h3 className="titles">Internet and Electronic Mail:</h3>
                    <span className="policy1">Students are responsible for regularly checking their Western email and the course web site (<a href="https://owl.uwo.ca/portal/">https://owl.uwo.ca/portal/</a>) and making themselves aware of any information that is posted</span>
                    <span className="policy1">about the course.</span>

                    <h3 className="titles">Accessibility:</h3>
                    <span className="policy1">Please contact the course instructor if you require material in an alternate format or if any other arrangements can make this course more accessible to you. You may also wish to contact </span>
                    <span className="policy1">Services for Students with Disabilities (SSD) at 519-661-2111 ext. 82147 for any specific question regarding an accommodation.</span>

                    <h3 className="titles">Support Services:</h3>
                    <span className="policy1">Office of the Registrar, <a href="http://www.registrar.uwo.ca/"> http://www.registrar.uwo.ca/</a></span>
                    <span className="policy1">Student Development Centre, <a href="http://www.sdc.uwo.ca/"> http://www.sdc.uwo.ca/</a></span>
                    <span className="policy1">Engineering Undergraduate Services, <a href="http://www.eng.uwo.ca/undergraduate/"> http://www.eng.uwo.ca/undergraduate/</a></span>
                    <span className="policy1">USC Student Support Services, <a href="http://westernusc.ca/services/"> http://westernusc.ca/services/</a><br></br></span>
                    <span className="policy1"><br></br>Students who are in emotional/mental distress should refer to Mental Health @ Western for a complete list of options about how to obtain help.</span>
                    <br></br><br></br><br></br>

                </div>
            </div>
        </div>
    )
};

export default Outline1;