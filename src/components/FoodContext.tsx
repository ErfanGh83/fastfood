import React, { createContext, useContext, useState, useEffect } from 'react';
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

export const FoodProvider = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [foods, setFoods] = useState([]);

    

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

        const availableFoods : Food[] = [
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
            {
                id: 7,
                title: 'Sushi',
                price: 8.99,
                description: `traditional Japanese dish made with vinegared rice (鮨飯, sushi-meshi), typically seasoned with sugar and salt, and combined with a variety of ingredients (ねた, neta), such as seafood, vegetables, or meat: seafood is the most common, and may be served raw, cooked, ...`,
                img_src: '/src/assets/images/sushi-img.webp',
                theme: 'black',
                tags: []
            },
            {
                id: 8,
                title: 'Natto',
                price: 4.99,
                description: `traditional Japanese dish made with vinegared rice (鮨飯, sushi-meshi), typically seasoned with sugar and salt, and combined with a variety of ingredients (ねた, neta), such as seafood, vegetables, or meat: seafood is the most common, and may be served raw, cooked, ...`,
                img_src: '/src/assets/images/natto-img.jpg',
                theme: 'brown',
                tags: []
            },
            {
                id: 9,
                title: 'Sukiyaki',
                price: 24.99,
                description: `Sukiyaki is a type of hot pot dish known for its sweet and salty flavor, seasoned with shoyu, sugar, and mirin. In addition to thin slices of beef, common ingredients for sukiyaki include naganegi (Japanese leek), shungiku green, shiitake, tofu, and shirataki noodles.`,
                img_src: '/src/assets/images/sukiyaki-img.jpg',
                theme: 'gray',
                tags: []
            },
            {
                id: 10,
                title: 'Miso soup',
                price: 7.99,
                description: `Miso soup is a traditional Japanese soup consisting of miso paste mixed with a dashi stock. It is commonly served as part of an ichijū-sansai meal, meaning "one soup, three dishes," a traditional Japanese meal structure that includes rice, soup, and side dishes. `,
                img_src: '/src/assets/images/miso-soup-img.jpg',
                theme: 'gray',
                tags: []
            },
            {
                id: 11,
                title: 'Japanese curry',
                price: 12.99,
                description: `Japanese curry is commonly served in three main forms: curry over rice, curry udon, and curry bread. It is one of the most popular dishes in Japan. The very common "curry rice" is most often referred to simply as "curry". Along with the sauce, a wide variety of vegetables and meats are used to make Japanese curry.`,
                img_src: '/src/assets/images/japanese-curry-img.webp',
                theme: 'brown',
                tags: []
            },
            {
                id: 12,
                title: 'Donburi',
                price: 16.99,
                description: `Donburi is a Japanese "rice-bowl dish" consisting of fish, meat, vegetables or other ingredients simmered together and served over rice. Donburi meals are usually served in oversized rice bowls which are also called donburi.`,
                img_src: '/src/assets/images/donburi-img.webp',
                theme: 'brown',
                tags: []
            },
            {
                id: 13,
                title: 'Japanese hamburger',
                price: 16.99,
                description: `Hamburg (ハンバーグ, hanbāgu, Hamburg steak) is a popular dish in Japan. It is made from ground meat with finely chopped onion, egg, and breadcrumbs flavored with various spices, and made into a flat, oval shape about 4 cm thick and 10 to 15 cm in diameter.`,
                img_src: '/src/assets/images/japanese-hamburger-img.jpg',
                theme: 'brown',
                tags: []
            },
            {
                id: 14,
                title: 'Kani salad',
                price: 16.99,
                description: `Kani salad combines shredded crab sticks with a homemade, mayo-based dressing made from Japanese mayonnaise (Kewpie). The dressing is spiced with sriracha, and the salad is tossed with tobiko and panko breadcrumbs added for textural contrast and flavor!`,
                img_src: '/src/assets/images/kani-salad-img.jpg',
                theme: 'brown',
                tags: []
            },
            {
                id: 15,
                title: 'Teriyaki chicken pizza',
                price: 9.99,
                description: `Teriyaki chicken is simply chicken that is coated in teriyaki sauce. The dish comes from the Japanese cooking technique called teriyaki, where meat is grilled or broiled with a soy sauce, mirin, and sugar glaze. Today, teriyaki chicken refers to any chicken with teriyaki sauce — regardless of the cooking method.`,
                img_src: '/src/assets/images/teriyaki-pizza-img.jpg',
                theme: 'brown',
                tags: []
            },
            {
                id: 16,
                title: 'Coca cola',
                price: 9.99,
                description: `The Coca-Cola Company is an American corporation founded in 1892 and today engaged primarily in the manufacture and sale of syrup and concentrate for Coca-Cola, a sweetened carbonated beverage that is a cultural institution in the United States and a global symbol of American tastes.`,
                img_src: '/src/assets/images/coca-cola-img.jpg',
                theme: 'black',
                tags: []
            },
            {
                id: 17,
                title: 'Furikake fries',
                price: 2.99,
                description: `Furikake is a Japanese seasoning blend of toasted sesame seeds, dried seaweed, sugar, salt, and other savory ingredients. When sprinkled over a piping hot plate of crispy fries, it's like a flavor explosion in your mouth that's impossible to resist.`,
                img_src: '/src/assets/images/furikake-fries-img.jpg',
                theme: 'black',
                tags: []
            },
            {
                id: 18,
                title: 'Japdog',
                price: 6.99,
                description: `These Japanese hot dogs, or Japadog, are glazed with sweet and tangy teriyaki sauce, Kewpie mayo, bonito flakes, and nori (seaweed) flakes/ strips. They are an umami bombs in hot dog form, inspired by Japadog (the Vancouver street food chain).`,
                img_src: '/src/assets/images/japdog-img.jpg',
                theme: 'red',
                tags: []
            },
            {
                id: 19,
                title: 'Tonkatsu sauce',
                price: 0.99,
                description: `This tonkatsu sauce is made sweet and savory with ketchup, soy sauce, and mirin and can be served with fried pork cutlets, coconut shrimp, ...`,
                img_src: '/src/assets/images/tonkatsu-sauce-img.jpg',
                theme: 'red',
                tags: []
            },
            {
                id: 20,
                title: 'Jidori chicken',
                price: 6.99,
                description: `This tonkatsu sauce is made sweet and savory with ketchup, soy sauce, and mirin and can be served with fried pork cutlets, coconut shrimp, ...`,
                img_src: '/src/assets/images/jidori-chicken-img.webp',
                theme: 'red',
                tags: []
            },
        ];

        setFoods(availableFoods);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    function addFood(food : Food) {
        setCart((prevCart) => {
            const existingFood = prevCart.find((item) => item.id === food.id);
            if (existingFood) {
                return prevCart.map((item) =>
                    item.id === food.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                toast.success(`Added ${food.title} to the cart`)
                return [...prevCart, { ...food, count: 1 }];
            }
        });
    }

    function reduceFood(food : Food) {
        setCart((prevCart) => {
            const existingFood = prevCart.find((item) => item.id === food.id);
            if (existingFood && existingFood.count > 1) {
                return prevCart.map((item) =>
                    item.id === food.id ? { ...item, count: item.count - 1 } : item
                );
            } else {
                if(existingFood?.count == 1){
                    toast.warning(`Removed ${food.title} from cart`)
                }
                return prevCart.filter((item) => item.id !== food.id);
            }
        });
    }

    return (
        <FoodContext.Provider value={{ foods, cart, addFood, reduceFood }}>
            {children}
        </FoodContext.Provider>
    );
}

export function useFoodContext() {
    return useContext(FoodContext);
}