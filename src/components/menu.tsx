import React from 'react';
import { useFoodContext } from './FoodContext';

export default function Menu() {

    const { foods, cart, addFood, reduceFood } = useFoodContext();

    return(
        <ul className="foods flex flex-wrap w-full mb-12 mt-2 mx-auto items-center align-middle">
            {foods.map((food)=>(
                <li key={food.id} className={`food w-[360px] mx-auto food rounded-3xl overflow-hidden shadow-2xl pb-6 my-6`}>
                <img className="w-full h-[250px]" src={food.img_src}></img>
                <div className="food-info mx-6 max-h-[400px] min-h-[300px]">
                    <div className="w-full top-row flex flex-row justify-between">
                        <div className="food-title flex flex-row">
                            <img className="w-6 h-6" src="/src/assets/icons/leaf-icon.png"/>
                            <h1 className="food-name text-[36px] font-semibold">{food.title}</h1> 
                        </div>
                        
                        <button className="shadow-md">
                            <img className="w-6 h-6" src="/src/assets/icons/3dots-icon.png"/>
                        </button>
                    </div>
                    
                    <div className="description h-[200px] overflow-y-auto">
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