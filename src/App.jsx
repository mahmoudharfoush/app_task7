import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import {Routes, Route , BrowserRouter} from 'react-router-dom'
import PageNotFound from './components/pagenotfound/PageNotFound.jsx'
import Restaurant from './components/restaurant/Restaurant.jsx'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/products' element={<Products />} />
    <Route path='/restaurant' element={<Restaurant />} />
    <Route path='*' element={<PageNotFound />} />
    </Routes>
 
    </>

  )
}
