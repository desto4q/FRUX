import React, { createContext, useEffect, useLayoutEffect } from 'react'
import "./App.scss"
import Routing from './Routing/Routing'
import WebFont from 'webfontloader';
import { values } from './context/Context';
import SignUp from './pages/Signup';
export let AppContext = createContext()

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
    <AppContext.Provider value={values()}>
      <div className="app">
        < SignUp />
        {/* <Routing/> */}
      </div>
    </AppContext.Provider>
  )
}

export default App