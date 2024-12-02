// import { useState } from 'react'
import Container from './components/container'
import Header from './components/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FoodProvider } from './components/FoodContext';
import Cart from './components/cart';

function App() {
  return (
    <FoodProvider>
      <div>
        <Header/>
        <Container/>
        <Cart/>
        <ToastContainer/>
      </div>
    </FoodProvider>
  )
}

export default App
