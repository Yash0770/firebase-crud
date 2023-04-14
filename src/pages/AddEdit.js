import React, { useReducer, useState } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import fireDb from '../firebase'
import './AddEdit.css'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  email:'',
  contact: ''
}

function AddEdit() {

  const [state, setState] = useState(initialState)
  const [data,setData] = useState({})

  const {name, email, contact} = state

  const history = useHistory()

  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setState({
      ...state,
      [name]:value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefalut()
    if(!name || !email || !contact){
      toast.error('Please provide values in each field')
    }else{
      fireDb.child('contacts').push(state, (err)=>{
        if(err){
          toast.error(err)
        }else{
          toast.success('Contact added successfully')
        }
      });
      setTimeout(() => {
          history.push('/')
      }, 500);
    }
  }
  return (
    <div>
      <form action="" className='form-class' onSubmit={handleSubmit}>
        <label className='label-class sect' id='name' name='name' placeholder='enter' htmlFor="">Name : </label>
        <input className='input-class sect' type="text" value={name} onChange={handleInputChange}/><br />
        <label className='label-class sect' id='email' name='email' placeholder='enter' htmlFor="">Email : </label>
        <input className='input-class sect' type="text" value={email} onChange={handleInputChange}/><br />
        <label className='label-class sect' id='contact' name='contact' placeholder='enter' htmlFor="">Contact : </label>
        <input className='input-class sect' type="text" value={contact} onChange={handleInputChange}/><br />
        <button className='add-btn'>Save</button>
      </form>
    </div>
  )
}

export default AddEdit