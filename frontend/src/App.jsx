import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Update from './pages/Update'
import Delete from './pages/Delete'
import View from './pages/View'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/delete/:id' element={<Delete/>}/>
      <Route path='/view/:id' element={<View/>}/>
      
    </Routes>
     
    </>
  )
}

export default App
