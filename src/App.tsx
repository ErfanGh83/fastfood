import { useState } from 'react'
import Container from './components/container'
import Header from './components/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FoodProvider } from './components/FoodContext';
import Cart from './components/cart';

function App() {

  const [isExpanded, setIsExpanded] = useState(false); 

  const toggleCart = () => {
    setIsExpanded((prev) => !prev);
  }

  return (
    <FoodProvider>
      <div>
        <Header/>
        <Container/>
        <div className={`w-full bottom-0 left-0 h-fit fixed mt-12`}>
          <button className='w-[240px] rounded-t-2xl font-mono mx-auto text-[32px] border-t-2 border-x-2 border-x-black border-t-black text-center font-semibold bg-yellow-400' onClick={toggleCart}>{isExpanded? <div className='flex felx-row items-center '><img className='w-8 h-6 m-auto' src='/src/assets/icons/kunai-down-icon.png'/><p className='mr-6'>Hide Cart</p></div> : <div className='flex felx-row'><img className='w-6 h-6 m-auto' src='/src/assets/icons/kunai-up-icon.png'/><p className='mr-6'>Show Cart</p></div>}</button>
          <div className={`h-fit transition-all duration-300 ease-in-out ${
          isExpanded? "max-h-[1000px]" : "max-h-[0px]"  }`}>
            <Cart/>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </FoodProvider>
  )
}

export default App
