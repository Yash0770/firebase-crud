import React, { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
// import fireDb from '../firebase';
import { toast } from 'react-toastify';
import {getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore/lite';
import { db } from "../firebase";
import './AddEdit.css';

const initialState = {
  name: '',
  email:'',
  contact: ''
}

function AddEdit() {

  const [state, setState] = useState(initialState);
  const {name, email, contact} = state;
  const { id } = useParams();

  // const db = getFirestore(); // create a Firestore database instance
  console.log("db", db)

  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setState({
      ...state,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    console.log('done');
    console.log("e", e);
    e.preventDefault();
    if(!name || !email || !contact){
      toast.error('Please provide values in each field')
    } else {
      try {
        console.log('calling');
        // const docRef = await addDoc(collection(db, 'contact'), state);
        const docRef = await db.collection("contacts")
        console.log('state', state);
        console.log('doc', docRef);
        console.log('123');
        // add the contact data to Firestore database
        toast.success('Contact added successfully');
        // setTimeout(() => {
        //   window.location.href = '/'; // navigate back to home page
        // }, 500);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div>
      <form action="" className='form-class' onSubmit={handleSubmit}> 
        <label className='label-class sect' htmlFor="name">Name</label>
        {/* <label className='label-class sect' id='name' name='name' placeholder='enter' htmlFor="">Name : </label> */}
        <input className='input-class sect' type="text" name='name' id='name' placeholder='Your name...' value={name} onChange={handleInputChange}/><br />
        <label className='label-class sect' htmlFor="email">Email</label>
        {/* <label className='label-class sect' id='email' name='email' placeholder='enter' htmlFor="">Email : </label> */}
        <input className='input-class sect' type="email" name='email' id='email' placeholder='Your email...' value={email} onChange={handleInputChange}/><br />
        <label className='label-class sect' htmlFor="contact">Contact</label>
        {/* <label className='label-class sect' id='contact' name='contact' placeholder='enter' htmlFor="">Contact : </label> */}
        <input className='input-class sect' type="number" name='contact' id='contact' placeholder='Your contact...' value={contact} onChange={handleInputChange}/><br />
        <input type="submit" value = 'save'/>
      </form>
    </div>
  )
}

export default AddEdit;
