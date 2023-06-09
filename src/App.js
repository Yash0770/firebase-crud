import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import View from './pages/View';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
            <ToastContainer position='top-center' />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/add' element={<AddEdit/>}/>
                <Route path='/update/:id' element={<AddEdit/>}/>
                <Route path='/view/:id' element={<View/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;