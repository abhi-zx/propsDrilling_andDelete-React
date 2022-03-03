import React from 'react'
import ContactCard from './ContactCard'
const ContactList = (props) => {
const deleteContactHandller =(id)=>{
  props.getContactId(id)
};
  return (
    <div>
      {props.contacts.map((contact) =>
      <ContactCard contact={contact} clickHandller={deleteContactHandller}></ContactCard>
      )}
    </div>
  )
}

export default ContactList