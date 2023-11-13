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
        <Route path='/waifutrade' element={<Page />} />
        <Route path='/waifutrade/sourcecode' element={<Sourcecode />} />
        <Route path='/waifutrade/uses' element={<Uses />} />
        <Route path='/waifutrade/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
