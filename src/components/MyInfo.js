import React from "react";

const MyInfo = (props) => {
    return (
        <div className="content">
            <h1 className="title">ABOUT ME</h1>
            <hr></hr>
            <p className="content-info">
                Hello, my name is {props.info.firstName} {props.info.lastName} and I am a {props.info.major} major.
                My interest in the field are Web Development, App Development,
                Game Development, and Software Engineer. I have knowledge of these
                programming languages: C++, Java, JavaScript, Python, and Bash. I also
                have great knowledge of HTML5 and CSS3. I am more interested in becoming a
                Front End Developer, but might eventually seek to become a Full Stack Developer.
            </p>
            <h1 className="title">SKILLS</h1>
            <hr></hr>
            <ul className="list-info">
                <li>Excellent communication, public speaking, problem solving, and creative skills</li>
                <li>Programming with Python, Java, C++, Bash, Shell Script, AWK, and Assembly Language</li>
                <li>Proficient with Autodesk Sketchbook, Art Rage Studio and Krita</li>
                <li>Knowledge of HTML5 and CSS3</li>
                <li>Proficient with JavaScript/ES6, PHP, SQL and Android Studio using Java and XML.</li>
                <li>Knowledge of Unix/Linux System</li>
                <li>Mathematical skills including Calculus, Differential Equations, and Discrete Structures</li>
            </ul>
            <h1 className="title">EXPERIENCE</h1>
            <hr></hr>
            <h2 className="title-job">App Development Intern</h2>
            <h3 className="title-location">New Jersey City University, Jersey City, NJ</h3>
            <ul className="list-info">
                <li>Development of app to inform students about mental health.</li>
                <li>Researched various security features such as hashing, salting, encryption, and decryption.</li>
                <li>Did both front end and back end of the app development.</li>
                <li>Redesigned the app’s logo and layout and implemented a night mode feature.</li>
                <li>Reduced the app’s registration process by half, making signing up much easier.</li>
            </ul>
        </div>
    );
}

export default MyInfo;