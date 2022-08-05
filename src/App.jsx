import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import './App.css'
import { Header, Footer } from './components/index'


export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  )
}

