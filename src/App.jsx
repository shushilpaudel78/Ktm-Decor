import React from 'react'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => (
  <>

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home /> } />


      </Routes>


    </BrowserRouter>








  </>
)

export default App
