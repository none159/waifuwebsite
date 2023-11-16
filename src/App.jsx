import { useState } from 'react'
import Uses from './components/uses'
import Sourcecode from './components/sourcecode'
import Page from './components/page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Contact from './components/contact';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/waifuwebsite' element={<Page />} />
        <Route path='/sourcecode' element={<Sourcecode />} />
        <Route path='/uses' element={<Uses />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
