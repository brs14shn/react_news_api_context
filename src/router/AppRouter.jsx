import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import DetailPage from '../pages/DetailPage'

import Login from "../pages/Login"
import SourceSection from '../pages/SourceSection'
import Favorites from '../pages/Favorites'

const AppRouter = () => {
  return (
   
<BrowserRouter>
<Navbar />
<Routes>
    <Route path='/'  element={<Home /> }  />
    <Route path='/login'  element={<Login/> }  />
    <Route path='/detail'  element={<DetailPage />} />
    <Route path='/articles'  element={<SourceSection/>} />
    <Route path='/favorite'  element={<Favorites/>} />



</Routes>

</BrowserRouter>


  )
}

export default AppRouter
