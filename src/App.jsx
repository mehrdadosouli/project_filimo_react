import React from 'react'
import Login from './components/Login/Login'
import Share from './components/Share/Share'
import AllFilm from './components/AllFilm/AllFilm'
import MainApp from './components/MainApp'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainApp />}/>
        <Route path='/فیلیموتور' element={<AllFilm />}/>
        <Route path='/ورود' element={<Login />}/>
        <Route path='/اشتراک' element={<Share />}/>
      </Routes>
    </>
  )
}

