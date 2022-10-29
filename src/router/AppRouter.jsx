import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import DetailPage from '../pages/DetailPage'
import Favoriler from '../pages/Favoriler'
import Login from "../pages/Login"
import SourceSection from '../pages/SourceSection'

const AppRouter = () => {
  return (
   
<BrowserRouter>
<Navbar />
<Routes>
    <Route path='/'  element={<Home /> }  />
    <Route path='/login'  element={<Login/> }  />
    <Route path='/detail'  element={<DetailPage />} />
    <Route path='/articles'  element={<SourceSection/>} />
    <Route path='/favori'  element={<Favoriler />  } />



</Routes>

</BrowserRouter>


  )
}

export default AppRouter
