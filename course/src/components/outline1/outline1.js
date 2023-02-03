import React, { useEffect } from "react";
import { useState } from "react";
import './outline1.css'

function Outline1(){

    var matchedData={};

    // set input states
    const [FormValue, setFormValue]= useState({profName:'', courseNumber:'', courseTitle:'', yearFrom:'', yearTo:'', description:'',office:'', extension:'', email:'',consultation:'', calender:'',lectureHours:'', labHours:'', tutHours:'', antirequisite:'', prerequisites:'', corequisite:'', CEABScience:'', CEABDesign:'', textbook:'', requiredRef:'', recommendRef:'', });

    // recognzie user input 
    const handleInput = (e) =>{
        const id = e.target.id;
        matchedData[id] = e.target.value
    }

    // prevent refresh page 
    const handleForm = async (e) => {
        e.preventDefault();
        var count = 0;
        await fetch('http://localhost:3333/api/getDoc').then((res)=>{
            res.json().then(data=>{
                for(var i=0; i< data.length; i++){
                    if(data[i].courseNumber == document.getElementById('courseNumber').value && data[i].profName == document.getElementById('profName').value)
                    count++;
                }
                if(count <=0){
                    fetch('http://localhost:3333/api/outline', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
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
                        })
                    });
                }
                else{
                    fetch(`http://localhost:3333/api/putInfo/${document.getElementById('courseNumber').value}/${document.getElementById('profName').value}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
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
        fetch(`http://localhost:3333/api/getInfo/${courseShow}/${profShow}`).then((res)=>{
            res.json().then((data)=>{
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
                matchedData = data[0];
                
            });
        });
    };

    return(
        <div>
            <div >
                <div>
                    <input id="courseShow" placeholder="enter course number"/>
                    <input id="profShow" placeholder="enter prof number"/>
                    <button onClick={showInfo}> show </button>
                </div>
                <div className="scroll-bar">

                    {/* Flow Event (Full Instructions): 
                    Pre-conditions: the user choose a course 
                        1. The user fills the template -> save to mongodb, primary key should be courseNumber, profName, time
                        2. The user clicks the save button (or jump to 6)
                        3. The user close the template 
                        4. The user reopens the template -> should use the primary key to fetch the data
                        5. The user continue fill the template -> notice that the file is not submit, therefore a admin visibility boolean attribute is required
                        6. The user submit to admin 
                        7. The admin approves the file (if diapprove, jump back to 4) -> there should be a boolean attribute called approve 
                        8. The user prints the file  */}

                    <h3 className="line1">Western University</h3>
                    <h3 className="line1">Faculty of Engineering</h3>
                    <h3 className="line1">Department of Electrical and Computer Engineering</h3>
                    
                    <button onClick={handleForm}>Save</button>

                    <input type="number" id="courseNumber" className="title" name='courseNumber'  onChange={handleInput} placeholder="Enter Course Number" required/>
                    <br></br>
                    <input type="text"   id="courseTitle"  className="title" name='courseTitle'  onChange={handleInput} placeholder="Enter Course Title"/>
                    <br></br>
                    <input type="number"  id="yearFrom" className="courseName" name='yearFrom'  onChange={handleInput} placeholder="Enter Start Calendar Year"/>
                    <br></br>
                    <input type="number" id="yearTo" className="courseName" name='yearTo'  onChange={handleInput} placeholder="Enter End Calendar Year"/>
                    
                    <h3 className="titles">Description:</h3>
                    <input type="text" id="description" className="description-box" name='description'  onChange={handleInput} placeholder="Enter Course Description"/>

                    <h3 className="titles">Instructor:</h3>
                    <input id="profName" type="text" className="title" name='profName'  onChange={handleInput} placeholder="Enter Instructor Name" required/>
                    <input id="office" type="number" className="title" name='office'  onChange={handleInput} placeholder="Enter Office Number"/>
                    <input id="extension" type="number" className="title" name='extension'  onChange={handleInput} placeholder="Enter Phone Extension"/>
                    <input id ="email" type="email" className="title" name='email'  onChange={handleInput} placeholder="Enter Instructor Email" pattern=".*@uwo.ca"/>
                    <input id="consulation" type="text" className="title" name='consultation'  onChange={handleInput} placeholder="Enter Consultation Hours"/>

                    <h3 className="titles">Academic Calendar Copy:</h3>
                    <br></br>
                    <input id="calender" type="text" className="title" name='calender'  onChange={handleInput} placeholder="Enter Academic Calendar Copy"/>

                    <h3 className="titles">Contact Hours:</h3>
                    <input id="lectureHours" type="number" className="title" name='lectureHours' onChange={handleInput} placeholder="Enter Lecture Hours"/>
                    <input id="labHours" type="number" className="title" name='labHours'  onChange={handleInput} placeholder="Enter Labortary Hours"/>
                    <input id="tutHours" type="number" className="title" name='tutHours' onChange={handleInput} placeholder="Enter Tutorial Hours"/>

                    <h3 className="titles">Antirequisite:</h3>
                    <input id="antirequisite" type="text" className="title" name='antirequisite'  onChange={handleInput} placeholder="Enter Antirequisite:"/>

                    <h3 className="titles">Prerequisites:</h3>
                    <input id="prerequisite" type="text" className="title" name='prerequisites'  onChange={handleInput} placeholder="Enter Prerequisites"/>

                    <h3 className="titles">Co-requisite:</h3>
                    <input id="corequisite" type="text" className="title" name='corequisite'  onChange={handleInput} placeholder="Enter Co-requisites"/>
                    
                    <span className="policy1"><br></br>Unless you have either the requisites for this course or written special permission from your Dean to enroll in it, you will be removed from this course and it will be deleted from your re-</span>
                    <span className="policy1">cord. This decision may not be appealed. You will receive no adjustment to your fees in the event that you are dropped from a course for failing to have the necessary prerequisites</span>

                    <h3 className="titles">CEAB Academic Units</h3>
                    <input id="CEABScience" type="number" className="title" name='CEABScience'  onChange={handleInput} placeholder="Enter CEAB Sciences Units"/>
                    <input id="CEABDesign" type="number" className="title" name='CEABDesign'  onChange={handleInput} placeholder="Enter CEAB Design Units"/>

                    <h3 className="titles">Required Textbook:</h3>
                    <input id="textbook" type="text" className="title" name='textbook'  onChange={handleInput} placeholder="Enter Textbook Information"/>

                    <h3 className="titles">Other Required References:</h3>
                    <input id="requiredRef" type="text" className="title" name='requiredRef'  onChange={handleInput} placeholder="Enter Other Required References"/>

                    <h3 className="titles">Recommended References:</h3>
                    <input id="recommendRef" type="text" className="title" name='recommendRef'  onChange={handleInput} placeholder="Enter Other Recommended References"/>

                    {/* design table for CEAB attributes */}
                    <h3 className="titles">General Learning Objectives (CEAB Graduate Attributes)</h3>
                    <span className="policy1">Notation: where x be I: Introductory, D: Intermediate, A: Advanced, or empty. I – The instructor will introduce the topic at the level required.  It is not necessary for the student to have seen </span>
                    <span className="policy1">the material before. D – There may be a reminder or review, but the student is expected to have seen and been tested on the material before taking the course. A – It is expected that the</span>
                    <span className="policy1">student can apply the knowledge without prompting (e.g. no review).</span>
                    
                    {/* design table for course topic and specific attributes */}

                    <h3 className="titles">Evaluation:</h3>
                    {/* design table for evaluation  */}
                    <span className="policy1">To obtain a passing grade in the course, a mark of 50% or more must be achieved on the final examination as well as on the laboratory. A final examination or laboratory mark less than 50%</span>
                    <span className="policy1">will result in a final course grade of 48% or less.</span>

                    <h3 className="titles">Homework Assignments:</h3>
                    <h3 className="titles">Quizzes: </h3>
                    <h3 className="titles">Laboratory: </h3>
                    <h3 className="titles">Midterm Test:</h3>

                    <h3 className="titles">Final Examination: </h3>
                    <span className="policy1">The final examination will be take place during the regular examination period. </span>

                    <h3 className="titles">Late Submission Policy: </h3>
                    <h3 className="titles">Assignment Submission Locker:</h3>

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

                    {/* add text box in here */}
                    <h3 className="titles">Use of Electronic Devices:</h3>
                    <h3 className="titles">Use of Personal Response Devices (“Clickers”):</h3>

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