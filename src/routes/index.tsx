import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../views/home'
import Quiz from '../views/quiz'
import Results from '../views/results'

// Some Change

const MainRouter = () => (
    <Router>
        <Routes>
            <Route path='/quiz' element={<Quiz/>}/>
            <Route path='/results' element={<Results/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
)

export default MainRouter