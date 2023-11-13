import { useState } from 'react'
import Uses from './components/uses'
import Sourcecode from './components/sourcecode'
import Page from './components/page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Contact from './components/contact';

function App() {


  return (
    <BrowserRouter basename='./waifutrade/'>
      <Routes>
        <Route path='./waifuwebsite/' element={<Page />} />
        <Route path='./waifuwebsite/sourcecode' element={<Sourcecode />} />
        <Route path='./waifuwebsite/uses' element={<Uses />} />
        <Route path='./waifuwebsite/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
