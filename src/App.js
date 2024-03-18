import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import React from 'react'
import './App.css'
import './assets/lib/animate/animate.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
         
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
