import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Food = {
    id: number,
    title: string,
    price: number,
    description: string,
    img_src: string,
    theme: string,
    tags: string[],
    count?: number
}

export default function PopularList() {

    const [cart, setCart] = useState<Food[]>([]);
    const [lastAction, setLastAction] = useState<string | null>(null);

   const foods : Food[] = [
        {
            id: 1,
            title: 'Ramen',
            price: 9.99,
            description: `Naruto's favorite ramen is miso based with extra chasu, or pork. Ramen broth comes served in one of three ways- miso, salt, or soy sauce based. You may also see soup classed as tonkotsu, which refers to the pork stock base most commonly used in ramen.`,
            img_src: '/src/assets/images/naruto-ramen-img.webp',
            theme: 'orange',
            tags: ['popular','classic']
        },
        {
            id: 2,
            title: 'Nasu Dengaku',
            price: 14.99,
            description: `Nasu dengaku is a Japanese miso-glazed eggplant dish. Nasu means eggplant (or aubergine) and dengaku refers to food coated in a sweet dengaku miso sauce. You'll often find skewered tofu or vegetables served this way. And from all the different types of miso dengaku, eggplant dengaku is my favourite.`,
            img_src: '/src/assets/images/nasu-dengaku-img.jpg',
            theme: 'blue',
            tags: ['popular']
        },
        {
            id: 3,
            title: 'Onigiri',
            price: 13.99,
            description: `a Japanese rice ball made from white rice. It is usually formed into triangular or cylindrical shapes, and wrapped in nori (seaweed).`,
            img_src: '/src/assets/images/onigiri-img.jpg',
            theme: 'purple',
            tags: ['popular']
        },
        {
            id: 4,
            title: 'Syrup coated anko',
            price: 6.99,
            description: `Japanese sweet red bean paste made from azuki beans. It is the most common filling used in many Japanese sweets. In fact, you can find sweet bean paste in many other Asian pastries and desserts.`,
            img_src: '/src/assets/images/anko-img.webp',
            theme: 'pink',
            tags: ['popular','sweat']
        },
        {
            id: 5,
            title: 'Sake',
            price: 9.99,
            description: `Sake, saké, or saki, also referred to as Japanese rice wine, is an alcoholic beverage of Japanese origin made by fermenting rice that has been polished to remove the bran. `,
            img_src: '/src/assets/images/sake-img.jpg',
            theme: 'green',
            tags: ['popular','drink']
        },
        {
            id: 6,
            title: 'Red bean soup',
            price: 6.99,
            description: `Hong dou tang, hong dou sha, or red bean soup is a sweet Chinese dessert made from azuki beans. served in Mainland China, Taiwan, Hong Kong, Macau, and places with Chinese diaspora. It is categorized as a tong sui, or sweet soup. It is often served cold during the summer, and hot in the winter. `,
            img_src: '/src/assets/images/red-bean-img.jpg',
            theme: 'pink',
            tags: ['popular']
        },
    ]

    useEffect(() => {
        if (lastAction) {
            toast.info(lastAction);
        }
    }, [lastAction]);

    function initializeCart() {
        return foods.map((food) => ({
            ...food,
            count: 0
        }));
    }

    if (cart.length === 0) {
        setCart(initializeCart());
    }

    function addFood(food: Food) {
        setCart((prevCart) => {
            const existingFood = prevCart.find(item => item.id === food.id);
            if (existingFood) {
                setLastAction(`${food.title} added to the cart!`);
                return prevCart.map(item => 
                    item.id === food.id ? { ...item, count: item.count + 1 } : item
                );
            }
            return [...prevCart, { ...food, count: 1 }];
        });
    }

    function reduceFood(food: Food) {

        setCart((prevCart) => {
            const updatedCart = prevCart.map(item =>
                item.id === food.id && item.count? { ...item, count: item.count - 1 } : item
            );

            for(let i = 0; i < updatedCart.length; i++){
                if(updatedCart[i].id == food.id){
                    if(updatedCart[i].count == 0){
                        setLastAction(`${food.title} removed from the cart!`);
                    }
                    break;
                }
            }

            return updatedCart;
        });
    }

    const popularFoods = foods.filter((food)=>food.tags.includes('popular'))

    return(
        <ul className="popular-foods flex flex-row overflow-x-scroll custom-scrollbar w-full my-12 mx-auto snap-x">
            {popularFoods.map((food)=>(
                <li key={food.id} className={`popular-food snap-center min-w-[400px] mx-2 food rounded-3xl overflow-hidden shadow-2xl pb-6 my-6`}>
                <img className="w-full h-[300px]" src={food.img_src}></img>
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
                    
                    <div className="description my-4 h-[200px]">
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
                            {cart.map((cartFood) => cartFood.id === food.id ? <p key={cartFood.id}>{cartFood.count}</p> : null)}
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