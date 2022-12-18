import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
        <>
            <Header/>
            <div className='container mx-auto pt-4'></div>
            <Outlet/>
        </>
  )
}

export default MainLayout