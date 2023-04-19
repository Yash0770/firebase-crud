import React, { useEffect, useState } from 'react'
import fireDb from '../firebase'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

function Home() {
  const [data, setData] = useState([])
  // console.log("data", data);


  useEffect(()=>{
    fireDb.ref('contact').on('value',(snapshot)=>{
      // console.log("snapshot", snapshot.val());
      if(snapshot.val() !== null){
      setData(snapshot.val());
      }else{
        setData({})
      }
    })
  },[])

  const onDelete = (id)=>{
    if(window.confirm('Are you sure that you want to delete the contact.')){
      fireDb.ref(`contact/${id}`).remove((err)=>{
        console.log('fireDb:',fireDb.ref('contact'));
        console.log('id:',id);
        if (err) {
          toast.error(err)
        }else{
          toast.success('Contact Deleted Successfully')
        }
      })
    }

    // fireDb.ref(`contact/:${i}`).remove()
  }

  return (
    <div style={{marginTop: '100px'}}>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>No. </th>
            <th style={{textAlign: 'center'}}>Name</th>
            <th style={{textAlign: 'center'}}>Email</th>
            <th style={{textAlign: 'center'}}>Contact</th>
            <th style={{textAlign: 'center'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((el, id)=>{
            return (
              <tr key={id}>
                <td>{id+1}</td>
                <td>{data[el].name}</td>
                <td>{data[el].email}</td>
                <td>{data[el].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className='btn btn-primary'>Edit</button>
                  </Link>
                  <Link>
                      <button className='btn btn-danger' onClick={()=>onDelete(id)}>Delete</button>
                  </Link>
                  <Link  to={`/view`}>
                    <button className='btn btn-secondary '>View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home