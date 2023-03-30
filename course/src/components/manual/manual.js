import React from "react";
import Footer from "../footer/footer";
import './manual.css'

// render manual html 
function Manual(){
    
    return(
        <div>
            <div className="manualContainer">

                <h2 className="manual-title">Course Outline Manager User Manual</h2>

                <div className="introduction">
                    <h3 className="intro-title">Introduction</h3>
                    <p className="intro-content">
                        Welcome to the Course Outline Manager System user manual. 
                        This manual provides detailed instructions on how to use the Course Outline Manager System. 
                        The system is specifically designed to assist professors and administrators in creating, managing course outlines for ECE courses at Western University. 
                        This manual covers the system's fundamental functions and provides step-by-step instructions to help you become familiar with it. As a user of this system, 
                        you will be able to create, edit, and manage course outlines with ease. Whether you are a professor or administrator,
                        this manual will guide you through the various features of the system. 
                    </p>
                </div>

                <div className="login-page">
                    <h3 className="login-title">Login</h3>
                    <p className="login-content">
                        Welcome to the Course Outline Manager System Login Page. To access the system, you will need a valid username and password. These credentials are provided by the Faculty of Engineering at Western University. If you have not been provided with a username and password, please contact the Faculty of Engineering to request access to the system.
                        To log in to the system, follow these steps: <br/><br/>
                        &emsp; 1. Open a web browser and go to the Course Outline Manager System login page. The web address should be provided to you by the Faculty of Engineering. <br/>
                        &emsp; 2. Enter your username and password in the designated fields on the login page.<br/>
                        &emsp; 3. Click the "Login" button to access the system.<br/><br/>
                        If you have lost your username or password, please use the link provided on the login page to access the system's support section. There, you will be able to request assistance in retrieving your login information.
                        It is important to note that the Course Outline Manager System is an internal system, and as such, the credentials provided to you should be kept confidential. Do not share your login information with anyone, and make sure to log out of the system when you are finished using it to ensure the security of your data.
                        Thank you for using the Course Outline Manager System. If you have any questions or concerns, please contact the Faculty of Engineering for assistance.
                    </p>
                </div>

                <div className="view-account">
                    <h3 className="account-title">View My Account</h3>
                    <p className="account-content">
                        To view your account information, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password. <br/>
                        &emsp; 2. On the main menu, click on the "View My Account" tab. <br/>
                        &emsp; 3. Your account information, such as your name, email address, and contact information, will be displayed on this page.<br/><br/>
                        Please note that this feature is designed for users to view their own account information only. If you need to update or change any of your account information, please contact the Faculty of Engineering Technologies Service for further assistance.
                    </p>
                </div>

                <div className="change-password">
                    <h3 className="password-title">Change Password</h3>
                    <p className="password-content">
                    If you wish to change your password for the Course Outline Manager System, you can do so by logging in to the system and navigating to the "Change Password" page. 
                    On this page, you will be prompted to enter your existing username and password, as well as your desired new password. It is important to choose a strong and unique password to ensure the security of your account. However, if you have forgotten your password and cannot log in to the system, you will need to contact the Faculty of Engineering Technologies Service for further assistance. They will be able to guide you through the process of resetting your password and regaining access to the system.
                    </p>
                </div>

                <div className="creating-outline">
                    <h3 className="creating-outline-title">Instructor Side Application - Creating an Outline</h3>
                    <p className="creating-outline-content">
                        Welcome to the Instructor Side of the Course Outline Manager System. This side of the system is designed specifically for instructors to create and manage course outlines for their courses.
                        To create a new course outline, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password. <br/>
                        &emsp; 2. On the main menu, click on the "Create New Course Outline" button. <br/>
                        &emsp; 3. Begin filling in the sections of the course outline, including course description, learning objectives, etc. <br/>
                        &emsp; 4. Once you have completed editing the course outline, you can click the "Save" button to save your work.<br/>
                        &emsp; 5. If you are ready to submit the course outline to the administrators for approval, you can click the "Submit" button. The administrators will review the course outline and provide feedback if necessary.<br/><br/>
                        In addition to creating and managing course outlines, the Instructor Side of the Course Outline Manager System also provides a search function to allow you to retrieve previous editions of your course outlines. To search for a previous edition of a course outline, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password.<br/>
                        &emsp; 2. On the main menu, click on the "Search Previous Editions" button.<br/>
                        &emsp; 3. Enter your name, the course number, and the version number of the course outline you wish to retrieve.<br/>
                        &emsp; 4. Click the "Search" button to retrieve the previous edition of the course outline.<br/><br/>
                        If you have any questions or concerns, please contact the administrators for assistance.
                    </p>
                </div>

                <div className="printing-outline">
                    <h3 className="printing-outline-title">Instructor Side Application - Printing Course Outline </h3>
                    <p className="printing-outline-content">
                        Once your course outline has been approved by the administrators, you will be able to print it as a PDF file. To do so, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password. <br/>
                        &emsp; 2. On the main menu, click on the "Print Course Outline" button.<br/>
                        &emsp; 3. Select the course outline that you wish to print from the list of approved outlines.<br/>
                        &emsp; 4. Click the "Print" button to generate a PDF of the course outline.<br/>
                        &emsp; 5. Once the PDF has been generated, you will be able to save it to your computer or print it out.<br/><br/>
                        It is important to note that you will only be able to print the outline as a PDF once it has been approved by the administrators. If the course outline has not yet been approved, you will not be able to print it.
                    </p>
                </div>

                <div className="accessing-ga">
                    <h3 className="accessing-ga-title">Instructor Side Application - Accessing GA Indicator </h3>
                    <p className="accesssing-ga-content">
                        The GA Indicators feature allows instructors to view all types of GA indicator elements, which can be used as a reference when editing the course outline. The GA Indicators can be accessed at any time during the course outline editing process.
                        To access the GA Indicators, follow these steps: <br/><br/>
                        &emsp; 1. Click on the "GA Indicators" button in this system.<br/>
                        &emsp; 2. The GA Indicators page will display all of the available GA indicator elements.<br/>
                        &emsp; 3. To view more information about a specific GA indicator element, click on the element's name.<br/>
                        &emsp; 4. You can then use the information from the GA Indicators as a reference when editing the course outline.<br/><br/>
                        It is important to note that the GA Indicators feature is only a reference tool and does not automatically add GA indicators to your course outline. You will need to manually add any GA indicators that you want to include in your course outline.
                    </p>
                </div>

                <div className="access-archive">
                    <h3 className="archive-title">Instructor Side Application - Accessing Archive Materials</h3>
                    <p className="archive-content">
                        As an instructor, you have the ability to review and compare previous versions of your course outline by accessing the Archive Materials. The Archive Materials are previous versions of your course outline that have been approved by the faculty. To access the Archive Materials, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password.<br/>
                        &emsp; 2. On the main menu, click on the "Archive" tab.<br/>
                        &emsp; 3. Enter the course number and instructor name in the designated fields.<br/>
                        &emsp; 4. Click on the "Search" button to retrieve the previous versions of the course outline.<br/>
                        &emsp; 5. You will be directed to a page where you can view the previous versions of the course outline and compare them with the current version.<br/>
                        &emsp; 6. You can also use the Archive Materials as a reference when editing your current course outline. <br/><br/>
                        Please note that the Archive Materials are approval material only, meaning that the faculty has already approved these outlines. If you wish to make changes to your current course outline, you will need to submit it to the administrators for approval. If you have any questions or concerns, please contact the administrators for assistance.
                    </p>
                </div>

                <div className="view-comments">
                    <h3 className="comments-title">Instructor Side Application - View Comments</h3>
                    <p className="comments-content">
                        As an instructor, you have the ability to view comments that have been posted by administrators on your course outlines. Viewing comments allows you to receive feedback on the course outlines and make changes that could be made to improve the quality of the course. To view comments on a course outline, follow these steps: <br/><br/>
                        1. Log in to the system using your provided username and password. <br/>
                        2. On the main menu, click on the "View Course Outlines" tab. <br/>
                        3. Select the course outline that you wish to view comments on from the list of available outlines. <br/>
                        4. Scroll down to the "Comments" section at the bottom of the page.<br/>
                        5. All comments that have been posted by administrators will be displayed in this section.<br/>
                        6. Read through the comments and use them as a reference when making changes to your course outline.<br/><br/>
                    </p>
                </div>

                <div className="approving-outline">
                    <h3 className="approving-outline-title">Administrator Side Application - Approving Course Outline </h3>
                    <p className="approving-outlint-content">
                        As an administrator, you have the ability to approve or disapprove course outlines that are submitted by instructors. To access the Admin Side of the Course Outline Manager System, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password.<br/>
                        &emsp; 2. On the main menu, click on the "Admin Dashboard" button.<br/>
                        &emsp; 3. You will be directed to the Admin Dashboard page, where you can manage and approve course outlines.<br/>
                        &emsp; 4. To approve a course outline, select the outline from the list of available outlines and review it for accuracy and completeness.<br/>
                        &emsp; 5. If the outline meets the required standards, click on the "Approve" button to approve the outline<br/>
                        &emsp; 6. You can also use the search function to retrieve previously approved course outlines by entering the course number and version number.<br/>
                        &emsp; 7. To view an instructor's submitted work, select the course outline from the list of available outlines and click on the "View" button.<br/><br/>
                        Please note that only approved course outlines can be printed by the instructor. If an outline has not been approved, the instructor will not be able to print it as a PDF file.
                    </p>
                </div>

                <div className="assign-course">
                    <h3 className="assign-course-title">Administrator Side Application - Assign Courses</h3>
                    <p className="assign-course-content">
                        As an administrator, you have the ability to assign and remove assigned courses from instructors. To access the Admin Side of the Course Outline Manager System, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password.<br/>
                        &emsp; 2. On the main menu, click on the "Admin Dashboard" button.<br/>
                        &emsp; 3. You will be directed to the Admin Dashboard page, where you can manage and assign courses to instructors.<br/>
                        &emsp; 4. To assign a course to an instructor, enter the name of the instructor and the course number in the designated fields.<br/>
                        &emsp; 5. Click on the "Assign" button to assign the course to the instructor.<br/>
                        &emsp; 6. To remove an assigned course from an instructor, select the instructor from the list of available instructors and the course from the list of assigned courses.<br/>
                        &emsp; 7. Click on the "Remove" button to remove the assigned course from the instructor.<br/><br/>
                        Please note that all courses are offered by the Faculty of Engineering at Western University, and administrators are not able to add courses to the system. Administrators are only able to assign courses to instructors who have been approved by the Faculty of Engineering at Western University.
                    </p>
                </div>

                <div className="post-comments">
                    <h3 className="post-comments-title">Administrator Side Application - Post Comments</h3>
                    <p className="post-comments-content">
                        As an administrator, you have the ability to post comments on course outlines that have been submitted by instructors. Posting comments allows you to provide feedback on the course outlines and suggest changes that could be made to improve the quality of the course. To post a comment on a course outline, follow these steps: <br/><br/>
                        &emsp; 1. Log in to the system using your provided username and password. <br/>
                        &emsp; 2. On the main menu, click on the "View Outline" tab. <br/>
                        &emsp; 3. Enter the course number and instructor name in the designated fields. <br/>
                        &emsp; 4. Click on the "Search" button to retrieve the course outline. <br/>
                        &emsp; 5. Once the course outline is displayed, scroll down to the "Comments" section at the bottom of the page. <br/>
                        &emsp; 6. Click on the "Add Comment" button to post a comment on the course outline. <br/>
                        &emsp; 7. Enter your comment in the designated field and click on the "Submit" button to post the comment. <br/>
                        &emsp; 8. The instructor will be able to view the comment on their side of the system and make changes to the course outline based on the feedback provided. <br/><br/>
                        Please note that the comments section is designed for constructive feedback only. All comments should be respectful and professional in nature. If you have any questions or concerns, please contact the Faculty for further assistances.
                    </p>
                </div>

            </div>
            <Footer/>
        </div>
    )
};
export default Manual;