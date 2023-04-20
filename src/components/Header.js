import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom/dist'
import './Header.css'

function Header() {
    const [activeTab, setActiveTab] = useState('Home')
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname === '/'){
            setActiveTab('Home')
        } else if(location.pathname === '/add'){
            setActiveTab('AddContact')
        }else if(location.pathname === '/about'){
            setActiveTab('About')
        }
    },[location])

  return (
    <div className='header'>
        <div className='mt-2'>
        <p className="logo">Contact App</p>
        <div className="header-right">
            <Link to='/'>
                <p className={`${activeTab === 'Home' ? 'active' : ''} me-2`}
                onClick={()=> setActiveTab('Home')}
                >Home </p>
            </Link>
            <Link to='/add'>
                <p className={`${activeTab === 'AddContact' ? 'active' : ''} me-2`}
                onClick={()=> setActiveTab('AddContact')}
                >Add Contact </p>
            </Link>
            <Link to='/about'>
                <p className={`${activeTab === 'About' ? 'active' : ''} me-2`}
                onClick={()=> setActiveTab('About')}
                >About </p> 
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Header