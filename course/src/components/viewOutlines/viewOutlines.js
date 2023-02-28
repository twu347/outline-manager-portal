import React, { useEffect, useState } from "react";
import "./viewOutlines.css";
import { Link,Outlet, useNavigate } from "react-router-dom";
import process from "process";

function ViewOutlines(){
    let navigate = useNavigate();
    const [courseOutlines, setCourseOutlines] = useState([]);
    
    function goManagerPortal(){
        navigate('/Courses');
    }
    
    useEffect(() => {
    fetch(process.env.REACT_APP_CLIENT_APP_API_ADDRESS + '/api/courseOutlines')
    .then(res=>res.json())
    .then(data => setCourseOutlines(data));
    }, []);

    return(
        <div>
            <button class="managerPortal" onClick={goManagerPortal}>Assign Courses</button>
            <div class="header"> 
                <h2 class="heading">All Course Outlines</h2>
            </div>
            <div class="box">
                {courseOutlines.map(courseOutline => 
                    <div class="boxes" key={courseOutline._id}>
                        <p>Course Title: {courseOutline.courseTitle}, Course Number: {courseOutline.courseNumber}</p>
                        <p>Year From: {courseOutline.yearFrom}, Year To: {courseOutline.yearTo}</p>
                        <p>Description: {courseOutline.description}</p>
                        <p>Instructor: {courseOutline.profName}, Office: {courseOutline.office}, Email: {courseOutline.email}</p>
                        <p>Lecture Hours: {courseOutline.lectureHours}, Lab Hours: {courseOutline.labHours}, Tutorial Hours: {courseOutline.tutHours}</p>
                        <p>Antirequisites: {courseOutline.antirequisite}, Prerequisites: {courseOutline.prerequisites}, Corequisite: {courseOutline.corequisite}</p>
                        <p>Calendar: {courseOutline.calender}</p>
                    </div>
                )}
            </div>
            <div class="box">
                <p>Use of English: In accordance with Senate and Faculty Policy, students may be penalized up to 10% of the marks on all assignments, tests, and examinations for improper use of English.
                    Additionally, poorly written work with the exception of the final examination may be returned without grading. 
                    If resubmission of the work is permitted, it may be graded with marks deducted for poor English and/or late submission.
                </p>
                <p>
                Attendance: Any student who, in the opinion of the instructor, is absent too frequently from class, laboratory, or tutorial periods will be reported to the Dean (after due warning has been given). 
                On the recommendation of the department, and with the permission of the Dean, the student will be debarred from taking the regular final examination in the course.
                </p>
                <p>
                Absence Due to Illness or Other Circumstances: Students should immediately consult with the instructor or department Chair if they have any problems that could affect their performance in the course. 
                Where appropriate, the problems should be documented (see the attached “Instructions for Students Unable to Write Tests or Examinations or Submit Assignments as Scheduled”). 
                The student should seek advice from the instructor or department Chair regarding how best to deal with the problem. 
                Failure to notify the instructor or department Chair immediately (or as soon as possible thereafter) will have a negative effect on any appeal.
                </p>
                <p>
                For more information concerning medical accommodations, see the relevant section of the Academic Handbook:
                <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf">
                    http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf
                </a>
                </p>
                <p>
                For more information concerning accommodations for religious holidays, see the relevant section of the Academic Handbook:
                <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf">
                    http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf
                </a>
                </p>
                <p>
                Missed Midterm Examinations: If a student misses a midterm examination, she or he must follow the Instructions for Students Unable to Write Tests and provide documentation to Undergraduate Services Office within 24 hours of the missed test. 
                If accommodation is granted, the department will decide whether to provide a make-up test or allow reweighting of the test, where reweighting means the marks normally allotted for the midterm will be added to the final exam. 
                If no reasonable justification for missing the test can be found, then the student will receive a mark of zero for the test.
                If a student is going to miss the midterm examination for religious reasons, they must inform the instructor in writing within 48 hours of the announcement of the exam date or they will be required to write the exam. 
                </p>
                <p>
                Cheating and Plagiarism: Students must write their essays and assignments in their own words. 
                Whenever students take an idea or a passage from another author, they must acknowledge their debt both by using quotation marks where appropriate and by proper referencing such as footnotes or citations. 
                University policy states that cheating, including plagiarism, is a scholastic offence. 
                The commission of a scholastic offence is attended by academic penalties, which might include expulsion from the program. 
                If you are caught cheating, there will be no second warning.
                All required papers may be subject to submission for textual similarity review to commercial plagiarism-detection software under license to the University for the detection of plagiarism. 
                All papers submitted will be included as source documents on the reference database for the purpose of detecting plagiarism of papers subsequently submitted to the system. 
                Use of the service is subject to the licensing agreement, currently between the University of Western Ontario and Turnitin.com 
                (<a href="http://www.turnitin.com">http://www.turnitin.com</a>).
                Scholastic offences are taken seriously and students are directed to read the appropriate policy, specifically, the definition of what constitutes a Scholastic Offence, in the relevant section of the Academic Handbook:
                <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf">http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf</a>
                </p>
                <p>
                Policy on Repeating All Components of a Course: 
                Students who are required to repeat an Engineering course must repeat all components of the course. 
                No special permissions will be granted enabling a student to retain laboratory, assignment, or test marks from previous years. 
                Previously completed assignments and laboratories cannot be resubmitted by the student for grading in subsequent years.

                Internet and Electronic Mail: 
                Students are responsible for regularly checking their Western e mail and the course web site (<a href="https://owl.uwo.ca/portal/">https://owl.uwo.ca/portal/</a>) and making themselves aware of any information that is posted about the course.
                </p>
                <p>
                Accessibility: Please contact the course instructor if you require material in an alternate format or if any other arrangements can make this course more accessible to you. 
                You may also wish to contact Services for Students with Disabilities (SSD) at 519-661-2111 ext. 82147 for any specific question regarding an accommodation.
                </p>
                <p>
                Support Services:	
                    Office of the Registrar, <a href="http://www.registrar.uwo.ca/">http://www.registrar.uwo.ca/</a>
				    Student Development Centre, <a href="http://www.sdc.uwo.ca/">http://www.sdc.uwo.ca/</a>
					Engineering Undergraduate Services, <a href="http://www.eng.uwo.ca/undergraduate/">http://www.eng.uwo.ca/undergraduate/</a>
					USC Student Support Services, <a href="http://westernusc.ca/services/">http://westernusc.ca/services/</a>
                Students who are in emotional/mental distress should refer to Mental Health @ Western, <a href="http://www.health.uwo.ca/mental_health/">http://www.health.uwo.ca/mental_health/</a>, for a complete list of options about how to obtain help.
                </p>
            </div>
        </div>
    )
}
export default ViewOutlines;