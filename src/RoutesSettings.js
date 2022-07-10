import React, {useEffect, lazy, Suspense} from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage'
import Ordering from './components/ordering'



const RoutesSettings = () => {

    return (
       
        <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/ordering" element={<Ordering />} />
            <Route path='/' element={<Navigate to='/homepage' replace />} />
        </Routes>
        
       
    )
}
export default RoutesSettings;