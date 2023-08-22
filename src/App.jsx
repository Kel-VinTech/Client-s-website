import { } from 'react'

import { NavBar,Footer} from "../src/components"

import {Home} from "../src/pages"
import { Route, Routes} from "react-router-dom"

import './App.scss'

function App() {

  return (
    <div className='container'>
      <NavBar/>
    <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    <Footer/>
    </div>
  )
}

export default App
