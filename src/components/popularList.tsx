import React from 'react';
import { useFoodContext } from './FoodContext';

export default function PopularList() {

    const { foods, cart, addFood, reduceFood } = useFoodContext();

    const popularFoods = foods.filter((food) => food.tags.includes('popular'));

    return(
        <ul className="popular-foods flex flex-row overflow-x-scroll custom-scrollbar w-full mb-12 mt-2 mx-auto snap-x">
            {popularFoods.map((food)=>(
                <li key={food.id} className={`popular-food snap-center sm:min-w-[250px] lg:min-w-[400px] sm:mx-1 lg:mx-2 food rounded-3xl overflow-hidden shadow-2xl sm:pb-3 lg:pb-6 sm:my-3 lg:my-6`}>
                <img className="w-full sm:h-[200px] lg:h-[300px]" src={food.img_src}></img>
                <div className="food-info sm:mx-3 lg:mx-6 sm:max-h-[300px] lg:max-h-[400px] sm:min-h-[200px] lg:min-h-[300px]">
                    <div className="w-full top-row flex flex-row justify-between">
                        <div className="food-title flex flex-row">
                            <img className="w-6 h-6" src="/src/assets/icons/leaf-icon.png"/>
                            <h1 className="food-name sm:text-[20px] lg:text-[36px] font-semibold">{food.title}</h1> 
                        </div>
                        
                        <button className="shadow-md">
                            <img className="w-6 h-6" src="/src/assets/icons/3dots-icon.png"/>
                        </button>
                    </div>
                    
                    <div className="description sm:my-2 lg:my-4 sm:h-[150px] lg:h-[200px] overflow-y-auto">
                        <p>{food.description}</p>
                    </div>
                </div>
                <div className="food-footer flex flex-row justify-between items-center">
                    <div className={`button-container flex flex-row w-[280px] h-[60px] items-center justify-evenly m-4 bg-gray-100 rounded-3xl shadow-md text-center`} >
                        <button onClick={()=>{reduceFood(food)}}>
                            <p className="text-2xl">
                                -
                            </p>
                        </button>

                        <div>
                            {cart.find((cartItem) => cartItem.id === food.id)?.count || 0}
                        </div>

                        <button onClick={()=>{addFood(food)}}>
                            <p className="text-2xl">
                                +
                            </p>
                        </button>
                    </div>
                    <h3 className="text-[36px] font-bold mx-2">
                        ${food.price}
                    </h3>
                </div>
            </li>
            ))}
        </ul>
    )
}