import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

function Routing() {

  return (
    <BrowserRouter>
        <Sidebar/>
        <Routes>
            <Route path='' element={<Dashboard/>}/>    
        </Routes>
    </BrowserRouter>
  )
}

export default Routing