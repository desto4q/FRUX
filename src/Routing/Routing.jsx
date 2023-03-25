import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

function Routing() {

  return (
    <BrowserRouter>
        <Sidebar/>
        <div className="main_page">
          <Header/>
          <Routes>
              <Route path='' element={<Dashboard/>}/>    
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Routing