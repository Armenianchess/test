import React from 'react'
import { Switch, BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import {Home} from '../components/pages/Home'
import PageNotFound from '../components/pages/PageNotFound'
import Signup from '../components/pages/Signup'


const AppRoutes = () => {
    // const isAuthorized = getLocalStorage(SESSION.TOKEN)
    // const pathName = useLocation().pathname 
    // const search = useLocation().search
    // const query  = new URLSearchParams[search]
    // const path = `${useLocation().pathname}${useLocation().search}` && pathName && setLocalStorage(SET_STORAGE.SET_CURRENT_ROUTE, pathName)         
    // console.log(pathName)
       
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
