import React, { useEffect, useLayoutEffect } from 'react'
import "./App.scss"
import Routing from './Routing/Routing'

function App() {
  useLayoutEffect(()=>{
    let title = document.querySelector("title").innerHTML = "FRUX"
  })
  return (
    <div className="app">
      <Routing/>
    </div>
  )
}

export default App