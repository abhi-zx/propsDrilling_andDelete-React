import React,{useState,useEffect} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {v4 as uuidv4} from "uuid"; 

const App = () => {
  const local_key ="contacts"
  const [contacts,setContacts]=useState([])
  
    const addContactHandller =(contact)=>{
    setContacts([...contacts,{id:Date.now(),...contact }])
    // console.log(contacts)
  }
  useEffect(()=>{
    const retriveContact=JSON.parse(localStorage.getItem(local_key))
    if(retriveContact)
    setContacts(retriveContact)
  },[])
  useEffect(()=>{
    localStorage.setItem(local_key,JSON.stringify(contacts))
  },[contacts])
const removeHandller=(id)=>{
  // console.log(id)
  // console.log(id)
  const newlist= contacts.filter((contact)=>{
    return contact.id !==id
  })
  setContacts(newlist)
}
  return (
   <>
   <Header></Header>
   <AddContact addContactHandller={addContactHandller}></AddContact>
   <ContactList contacts={contacts} getContactId={removeHandller}></ContactList>
   </>
  )
}

export default App