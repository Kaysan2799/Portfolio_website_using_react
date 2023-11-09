import './Styles.css';
import React from "react";

function About()
{
    return (
        <div className="about">
            <h1>About</h1>
            <div className='about_p'>
            <p className='about_p1'>Hi, I'm <span className='name'>Abdul Malik</span>, a graphic designer with over 5 years of experience. I've worked on over 100 projects for clients in 
            different countries, and I'm passionate about creating beautiful and effective design solutions.I'm skilled in a variety of design software, including Adobe 
            Illustrator, Photoshop, and InDesign. I'm also proficient in web design and development. I'm always up-to-date on the latest design trends and technologies, 
            and I'm always looking for new ways to use my skills to help my clients achieve their goals. I'm a creative and innovative thinker, and I'm always looking for 
            new ways to solve problems. I'm also a great communicator, and I'm able to clearly articulate my ideas to my clients. If you're looking for a graphic designer 
            who can create beautiful, effective, and innovative design solutions, I'd love to chat with you. Please feel free to contact me at <span>amabbaxi9876@gmail.com. </span><br />
            Phone no: <span>+92 318 0971788</span><br />
            <span>Thanks for visiting!</span></p>
                <img src={require('./images/36.jpeg')} class="pic1" alt="..."/>
                <img src={require('./images/37.jpg')} class="pic1" alt="..."/>
            </div>
        </div>
    );
}
export default About;