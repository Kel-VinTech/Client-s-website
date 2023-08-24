import { } from 'react'

import { NavBar,Footer} from "../src/components"

import {Home,Contact} from "../src/pages"
import { Route, Routes} from "react-router-dom"

import './App.scss'

function App() {

  return (
    <div className='container'>
      <NavBar/>
    <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    <Footer/>
    </div>
  )
}

export default App
