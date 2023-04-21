import React, { useEffect, useState } from 'react'
import fireDb from '../firebase'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import './Home.css'

function Home() {
  const [data, setData] = useState([])
  // console.log("data", data);

  useEffect(()=>{
    fireDb.ref('contact').on('value',(snapshot)=>{
      // console.log("snapshot", snapshot.val());
      if(snapshot.val() !== null){  
      setData({...snapshot.val()});
      }else{
        setData({})
      }
    });
    return ()=>{
      setData({})
    }
  },[])

  const onDelete = (id)=>{
    if(window.confirm('Are you sure that you want to delete the contact.')){
      // fireDb.ref(`contact/${id}`).remove()
      // console.log('IDD',id);
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

  }

  return (
    <div style={{marginTop: '100px'}}>
      <table className='styled-table'>
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
          {Object.keys(data).map((id, index)=>{
            return (
              <tr key={id}>
                <td>{index+1}</td>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className='btn btn-primary'>Edit</button>
                  </Link>
                      <button className='btn btn-danger' onClick={()=> onDelete(id)}>Delete</button>
                  <Link  to={`/view/${id}`}>
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