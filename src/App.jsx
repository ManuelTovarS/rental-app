import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import './App.css'
import { Header, Footer, NavBar } from './components/index'


export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <NavBar></NavBar>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  )
}

