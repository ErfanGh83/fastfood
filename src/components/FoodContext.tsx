import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from "react-toastify";

type Food = {
    id: number;
    title: string;
    price: number;
    description: string;
    img_src: string;
    theme: string;
    tags: string[];
};

type CartItem = Food & { count: number };

type FoodContextType = {
    foods: Food[];
    cart: CartItem[];
    addFood: (food: Food) => void;
    reduceFood: (food: Food) => void;
    clearCart: () => void;
};

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

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
    ];

    const addFood = (food: Food) => {
        setCart((prevCart) => {
            const existingFood = prevCart.find((item) => item.id === food.id);
            if (existingFood) {
                return prevCart.map((item) =>
                    item.id === food.id ? { ...item, count: item.count + 1 } : item
                );
            }
            
            toast.success(`${food.title} added to the cart!`);
            return [...prevCart, { ...food, count: 1 }];
        });
    };

    const reduceFood = (food: Food) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.id === food.id ? { ...item, count: item.count - 1 } : item
            );

            for(let i=0 ; i<cart.length; i++){
                console.log(cart[i])
                if(cart[i].id == food.id){
                    if(cart[i].count == 1){
                        toast.warn(`${food.title} removed from the cart!`);
                        cart[i].count = 0;
                    }
                    break;
                }
            }

            return updatedCart.filter((item) => item.count > 0);
        });
    };

    const clearCart = () => setCart([]);

    return (
        <FoodContext.Provider value={{ foods, cart, addFood, reduceFood, clearCart }}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFoodContext = () => {
    const context = useContext(FoodContext);
    if (!context) {
        throw new Error('useFoodContext must be used within a FoodProvider');
    }
    return context;
};
