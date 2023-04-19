// import fireDb from '../firebase'// AddEdit.js

// AddEdit.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fireDb from '../firebase';
import { toast } from 'react-toastify';
import './AddEdit.css'

const initialState = {
  name: '',
  email: '',
  contact: ''
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact) {
      toast.error('Please fill all fields.');
      return;
    }

    // fireDb.ref("contacts").set({
    //   name : name,
    //   email:email,
    //   contact:contact
    // }) 
    else{
      fireDb.ref('contact').push(state, (err)=>{
        console.log(state);
        if(err){
          toast.error(err.message);
        } else{
          toast.success('Contact has been added successfully')
          setTimeout(()=>navigate('/'),500)
        }
      })
    }
  };

  return (
    <div className="container mt-4">
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="container mb-3 d-flex">
              <label htmlFor="name" className="form-label col-4">
                Name : 
              </label>
              <input
                type="text"
                className=" inputClass col-4"
                id="name"
                name="name"
                autoComplete="none"
                // pattern="[A-Za-z]{3}"
                // pattern="[a-z]*"
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="container mb-3 d-flex">
              <label htmlFor="email" className="form-label col-4">
                Email address : 
              </label>
              <input
                type="email"
                className="form-control inputClass col-4"
                id="email"
                name="email"
                autoComplete='none'
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="container mb-3 d-flex">
              <label htmlFor="contact" className="form-label col-4">
                Contact : 
              </label>
              <input
                type="number"
                // pattern='0-9'
                inputMode='Numeric'
                className="form-control inputClass col-4"
                id="contact"
                name="contact"
                placeholder="Enter contact number"
                value={contact}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;
