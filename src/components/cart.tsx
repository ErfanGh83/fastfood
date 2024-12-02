import { useFoodContext } from './FoodContext';

export default function Cart(){

    const {cart, addFood, reduceFood } = useFoodContext();

    const inCartFoods = cart.filter((food)=>food.count > 0)

    return(
        <div className='cart-container w-full h-fit rounded-t-3xl p-4 bg-gray-100'>
            <h1 className='text-right text-[36px] font-bold m-4'>Cart</h1>
            <div>
                <ul className='foods w-full flex flex-col h-fit max-h-[400px] overflow-y-auto'>
                    {inCartFoods.map((food)=>(
                        <li className='food justify-betwee justify-start flex flex-row-reverse items-center border-2 border-gray-200 justify-between'>
                            <div className='w-1/3'>
                                <h1 className='w-1/3 text-center'>{food.title}</h1>
                            </div>

                            <div className={`button-container flex flex-row w-[300px] h-[50px] items-center justify-evenly m-4 bg-gray-100 rounded-3xl shadow-md text-center`} >
                                <button onClick={()=>{reduceFood(food)}}>
                                    <p className="text-2xl">
                                        -
                                    </p>
                                </button>

                                <div className='border-y-x border-x-black'>
                                    {cart.find((cartItem) => cartItem.id === food.id)?.count || 0}
                                </div>

                                <button onClick={()=>{addFood(food)}}>
                                    <p className="text-2xl">
                                        +
                                    </p>
                                </button>
                            </div>

                            <div className='w-1/3 text-center'>
                                <h1>${food.price*food.count}</h1>
                            </div>
                        </li>
                    ))}
                </ul>

                <div>
                    <h1 className='text-[48px] font-bold'>Total : {inCartFoods.reduce((a, b) => a + b.count*b.price, 0)}</h1>
                </div>
            </div>
        </div>
    )
}