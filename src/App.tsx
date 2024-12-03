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
          <button className='w-[200px] rounded-t-2xl mx-auto text-[36px] border-t-2 border-x-2 border-x-black border-t-black text-center font-semibold bg-yellow-400' onClick={toggleCart}>{isExpanded? "Hide Cart" : "Show Cart"}</button>
          <div className={`${
          isExpanded? "block" : "hidden"  }`}>
            <Cart/>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </FoodProvider>
  )
}

export default App
