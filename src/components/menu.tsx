import { useFoodContext } from './FoodContext';

export default function Menu() {

    const { foods, cart, addFood, reduceFood } = useFoodContext();

    return(
        <ul className="foods flex flex-wrap w-full mb-12 mt-2 mx-auto items-center align-middle">
            {foods.map((food)=>(
                <li key={food.id} className={`food lg:w-[360px] mx-auto food rounded-3xl overflow-hidden shadow-2xl sm:pb-3 lg:pb-6 sm:my-3 lg:my-6 sm:w-[200px]`}>
                <img className="w-full lg:h-[250px] sm:h-[125px]" src={food.img_src}></img>
                <div className="food-info lg:mx-6 lg:max-h-[400px] lg:min-h-[300px] sm:max-h-[200px] sm:min-h-[150px] sm:mx-3">
                    <div className="w-full top-row flex flex-row justify-between">
                        <div className="food-title flex flex-row">
                            <img className="w-6 h-6" src="/src/assets/icons/leaf-icon.png"/>
                            <h1 className="food-name text-[36px] font-semibold sm:text-[18px]">{food.title}</h1> 
                        </div>
                        
                        <button className="shadow-md">
                            <img className="w-6 h-6" src="/src/assets/icons/3dots-icon.png"/>
                        </button>
                    </div>
                    
                    <div className="description lg:h-[200px] sm:h-[100px] overflow-y-auto">
                        <p className='sm:text-[12px] lg:text-[24px]'>{food.description}</p>
                    </div>
                </div>
                <div className="food-footer flex flex-row justify-between items-center">
                    <div className={`button-container flex flex-row lg:w-[280px] lg:h-[60px] sm:w-[140px] sm:h-[30px] items-center justify-evenly m-4 bg-gray-100 rounded-3xl shadow-md text-center`} >
                        <button onClick={()=>{reduceFood(food)}}>
                            <p className="lg:text-2xl sm:text-sm">
                                -
                            </p>
                        </button>

                        <div className='sm:text-[12px] lg:text-[24px]'>
                            {cart.find((cartItem) => cartItem.id === food.id)?.count || 0}
                        </div>

                        <button onClick={()=>{addFood(food)}}>
                            <p className="lg:text-2xl sm:text-sm">
                                +
                            </p>
                        </button>
                    </div>
                    <h3 className="sm:text-[18px] lg:text-[36px] font-bold mx-2">
                        ${food.price}
                    </h3>
                </div>
            </li>
            ))}
        </ul>
    )
}