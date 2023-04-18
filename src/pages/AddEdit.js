// import fireDb from '../firebase'// AddEdit.js

// AddEdit.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fireDb from '../firebase';
import { toast } from 'react-toastify';

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

    fireDb.ref('contacts').set(state, (err) => {
      if (err) {
        toast.error(err.message);
      } else {
        toast.success('Contact has been added successfully.');
        setTimeout(() => navigate('/'), 1000);
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact
              </label>
              <input
                type="number"
                className="form-control"
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
