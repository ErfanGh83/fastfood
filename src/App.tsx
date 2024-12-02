// import { useState } from 'react'
import Container from './components/container'
import Header from './components/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header/>
      <Container/>
      <ToastContainer/>
    </div>
  )
}

export default App
