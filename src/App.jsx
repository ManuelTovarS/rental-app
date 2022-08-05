import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import './App.css'


export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

