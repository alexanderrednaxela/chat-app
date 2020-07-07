import React from 'react';
import Contact from './Contact';

const ContactList = (props) => {
    return(
        <div className="contactList">
            {props.contactData.map(contacts => <Contact {...contacts} key={contacts.id} />)}
        </div>
    )
}
    
    export default ContactList;