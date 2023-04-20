import React, { useEffect, useState } from 'react'
import fireDb from '../firebase'
import { Link, useParams } from 'react-router-dom'

function View() {
  const [user, setUser] = useState({})
  const {id} = useParams()
  useEffect(()=>{
    fireDb.ref(`contact/${id}`)
    .get()
    .then((snapshot)=>{
      if (snapshot.exists()) {
        setUser({...snapshot.val()})
      }else{
        setUser({})
      }
    })
  },[id])
  console.log(user);
  return (
    <center>
    <div style={{marginTop:'110px'}}>
      <div className="card col-4">
        <div className="card-header mb-2">
          <p>Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <Link to={'/'}>
            <button className='btn btn-secondary mb-2'>Go back</button>
          </Link>
        </div>
      </div>
    </div>
    </center>
  )
}

export default View