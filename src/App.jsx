import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Chart from './Components/Chart/Chart.jsx'
import Nav from './Components/Header/Header.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App