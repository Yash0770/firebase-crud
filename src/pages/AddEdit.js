import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const [data, setData] = useState()

  const { name, email, contact } = state;
  const navigate = useNavigate();

  const {id}= useParams()

  useEffect(()=>{
    fireDb.ref('contact').on('value',(snapshot)=>{
      if(snapshot.val() !== null){
      setData({...snapshot.val()});
      }else{
        setData({})
      }
    });
    return ()=>{
      setData({})
    }
  },[id])

  useEffect(()=>{
    if(id && data){
      setState({...data[id]})
    }else{
      setState({...initialState})
    }
    return ()=>{
      setState({...initialState})
    }
  },[id, data])
  
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
      if(!id){
        fireDb.ref('contact').push(state, (err)=>{
          console.log(state);
          if(err){
            toast.error(err.message);
          } else{
            toast.success('Contact has been added successfully')
            setTimeout(()=>navigate('/'),500)
          }
        })
      }else{
        fireDb.ref(`contact/${id}`).set(state, (err)=>{
          console.log(state);
          if(err){
            toast.error(err.message);
          } else{
            toast.success('Contact updated successfully')
            setTimeout(()=>navigate('/'),500)
          }
        })
      }
    }
  };

  return (
    <div className="container mt-5">
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
                className="form-control inputClass col-4"
                id="name"
                name="name"
                autoComplete="none"
                pattern="^[A-Za-z ]+$"
                maxLength={'30'}
                placeholder="Enter name..."
                value={name || ''}
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
                pattern="[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com|email\.com)$"
                autoComplete='none'
                placeholder="Enter email..."
                value={email || ''}
                onChange={handleChange}
              />
            </div>
            <div className="container mb-3 d-flex">
              <label htmlFor="contact" className="form-label col-4">
                Contact : 
              </label>
              <input
                type="tel"
                pattern='[0-9]{10}'
                maxLength={'10'}
                size={'4'}
                inputMode='Numeric'
                className="form-control inputClass col-4"
                id="contact"
                name="contact"
                placeholder="Enter contact number..."
                value={contact || ''}
                onChange={handleChange}
              />
            </div>
            <input type="submit" value={id ? 'Update' : 'Save'} className='btn btn-primary btnC'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;
