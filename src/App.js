import React from 'react'
import './App'
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/home/index'
import CartPage from './pages/cart/index'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
    </div>
  )
} 
export default App
