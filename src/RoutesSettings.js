import React, {useEffect, lazy, Suspense} from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage'
import Menu from './components/menu'



const RoutesSettings = () => {

    return (
       
        <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path='/' element={<Navigate to='/homepage' replace />} />
        </Routes>
        
       
    )
}
export default RoutesSettings;