import { toast } from 'react-toastify';
import { useFoodContext } from './FoodContext';
import { useState } from 'react';

export default function Cart() {
    const { cart, addFood, reduceFood } = useFoodContext();
    const [isSpinning, setIsSpinning] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [orderDetails, setOrderDetails] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
    });

    const inCartFoods = cart.filter((food) => food.count > 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        setIsPopupVisible(true);
    };

    const handlePopupSubmit = (e) => {
        e.preventDefault();
        console.log('Order details:', orderDetails);
        toast.info(`order ${Math.floor(Math.random()*100000)} submited successfully,\n will be ready in ${Math.floor(Math.random()*60)} minutes`)

        setIsPopupVisible(false);
    };

    return (
        <div className="cart-container w-full h-fit rounded-t-3xl p-4 pr-0 bg-yellow-50 font-mono">
            <h1 className="text-right text-[36px] font-bold m-4">Cart</h1>
            <div>
                <ul className="foods w-full flex flex-col h-fit max-h-[400px] overflow-y-auto">
                    {inCartFoods.map((food) => (
                        <li
                            key={food.id}
                            className="food w-4/5 justify-between flex flex-row-reverse items-center mx-auto border-b-2 border-b-orange-200"
                        >
                            <div className="w-1/3">
                                <h1 className="w-1/3 text-center text-xl">{food.title}</h1>
                            </div>

                            <div className="button-container flex flex-row w-[200px] h-[50px] items-center justify-evenly m-4 bg-gray-100 rounded-3xl shadow-md text-center">
                                <button onClick={() => reduceFood(food)}>
                                    <p className="text-2xl">-</p>
                                </button>

                                <div className="border-x-black">{food.count}</div>

                                <button onClick={() => addFood(food)}>
                                    <p className="text-2xl">+</p>
                                </button>
                            </div>

                            <div className="w-1/3 text-center">
                                <h1 className="text-xl">${(food.price * food.count).toPrecision(4)}</h1>
                            </div>
                        </li>
                    ))}
                </ul>

                <form className="flex flex-row justify-between items-center my-4" onSubmit={handleOrderSubmit}>
                    <h1 className="text-[48px] font-bold">
                        Total: ${inCartFoods.reduce((a, b) => a + b.count * b.price, 0).toPrecision(4)}
                    </h1>
                    <button
                        type="submit"
                        className="bg-yellow-400 rounded-l-3xl flex flex-row items-center pr-4 justify-evenly w-[200px] h-[60px] border-2 border-black hover:scale-105"
                        onMouseEnter={() => setIsSpinning(true)}
                        onMouseLeave={() => setIsSpinning(false)}
                    >
                        <img
                            className={`w-8 h-8 ${isSpinning ? 'animate-spin' : ''}`}
                            src="/src/assets/icons/scrollbar-icon.png"
                            alt="Order icon"
                        />
                        <p
                            className={`order-button text-3xl mr-[-20px] text-center font-semibold ${
                                isSpinning ? 'animate-pulse' : ''
                            }`}
                        >
                            Order
                        </p>
                    </button>
                </form>
            </div>

            {isPopupVisible && (
                <div className="popup-overlay fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
                    <div className="popup-form bg-yellow-50 p-6 rounded-lg shadow-lg w-1/3">
                        <h2>Order Submission</h2>
                        <form onSubmit={handlePopupSubmit}>
                        <div className="mb-4">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={orderDetails.fullName}
                                    onChange={handleInputChange}
                                    placeholder='full name'
                                    className="border p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={orderDetails.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder='phone number'
                                    className="border p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={orderDetails.address}
                                    onChange={handleInputChange}
                                    placeholder='address'
                                    className="border p-2 w-full"
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-green-500 text-white p-2 rounded">
                                Submit Order
                            </button>
                        </form>
                        <button
                            onClick={() => setIsPopupVisible(false)}
                            className="mt-4 text-red-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
