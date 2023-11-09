import './Styles.css';
import React from "react";

function Contact()
{
    return (
        <div className='contact_full'>
        <div className='contact_back'>
            <img src={require('./images/40.gif')} class="d-block w-100" alt="..."/>
            
        </div>
        
        <div class="content">
        <h4><span style={{color: '#9fef00'}}>Hello,</span> my name is</h4>
        <h1>Abdul <span style={{color: '#9fef00'}}>Malik</span></h1>
        <h3>I'am a <span style={{color: '#9fef00'}}>Graphic Designer</span></h3>
        <div class="newslatter">
            <form>
                <input type="email" name="email" id="mail" placeholder="Enter Your Email to chat" />
                <input type="submit" href='https://shorturl.at/einFQ'  className="contact_submit" value="Lets Start" />
                
            </form>
        </div>
    </div>
    </div>
        )
}
export default Contact;