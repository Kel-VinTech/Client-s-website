import { } from 'react'

import { NavBar,Footer} from "../src/components"

import {Home,Contact,Career} from "../src/pages"
import { Route, Routes} from "react-router-dom"

import './App.scss'

function App() {

  return (
    <div className='container'>
      <NavBar/>
    <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/career' element={<Career/>}/>
        </Routes>
    <Footer/>
    </div>
  )
}

export default App
