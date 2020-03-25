import React from 'react';
import './Contact.css'


function Contact() {
  return (

<div className="Contact">
    <div className="avatar"> 
    <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="David Picture" />
       </div>
    <div className="container">
        <div className="name">
            <h2>David Beckham</h2>
        </div>
        <div className="status">
            <div className="status-online"></div>
            <div className="status-text">
                <p>Online</p>
            </div>
        </div>
    </div>
</div>

  );
}

export default Contact;







