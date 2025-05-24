import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Portal from './components/Portal'
import Layout from './components/Layout'
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portal" element={<Portal />} />
      </Route>
    </Routes>
  )
}

export default App
