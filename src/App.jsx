import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import List from './components/List'
import Patient from './components/Patient'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<List/>}/>
        <Route path='/patient' element={<Patient/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App