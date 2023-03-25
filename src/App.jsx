import React, { useEffect, useLayoutEffect } from 'react'
import "./App.scss"
import Routing from './Routing/Routing'
import WebFont from 'webfontloader';

function App() {
  useLayoutEffect(()=>{
    let title = document.querySelector("title").innerHTML = "FRUX"
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
  })
  return (
    <div className="app">
      <Routing/>
    </div>
  )
}

export default App