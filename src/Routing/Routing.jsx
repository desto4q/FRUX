import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Mobilenav from '../components/Mobilenav'
import M_sidebar from '../components/M_components/M_sidebar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

function Routing() {

  return (
    <BrowserRouter>
        <Sidebar/>
        <div className="main_page">
          <Header/>
          <Mobilenav/>
          <M_sidebar/>
          <Routes>
              <Route path='' element={<Dashboard/>}/>    
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Routing