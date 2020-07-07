import React from 'react';
import './Contact.css'

const Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar}/>
            <div className="contact-info">
                <div className="name">{props.name}</div>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <div className="status-text">
                        <div className={props.online ? 'status-online::after' : 'status-offline::after'}></div>    
                    </div>            
                </div>
            </div>    
        </div>
    )
}


export default Contact;