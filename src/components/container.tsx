
type Food = {
    id: number,
    title: string,
    price: number,
    description: string,
    img_src: string,
    theme: string,
    tags: string[]
}


export default function Container(){

    const foods : Food[] = [
        {
            id: 1,
            title: 'Naruto Ramen',
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
            title: 'Syrup coated anko',
            price: 6.99,
            description: `Japanese sweet red bean paste made from azuki beans. It is the most common filling used in many Japanese sweets. In fact, you can find sweet bean paste in many other Asian pastries and desserts.`,
            img_src: '/src/assets/images/anko-img.webp',
            theme: 'pink',
            tags: ['popular','sweat']
        },
        {
            id: 6,
            title: 'Syrup coated anko',
            price: 6.99,
            description: `Japanese sweet red bean paste made from azuki beans. It is the most common filling used in many Japanese sweets. In fact, you can find sweet bean paste in many other Asian pastries and desserts.`,
            img_src: '/src/assets/images/anko-img.webp',
            theme: 'pink',
            tags: ['popular','sweat']
        },
    ]

    const popularFoods = foods.filter((food)=>food.tags.includes('popular'))

    return(
        <div className="container w-full h-fit rounded-3xl flex flex-col shadow-md my-16 mx-auto">
            <ul className="popular-foods flex flex-row overflow-x-scroll custom-scrollbar w-full my-14 mx-auto snap-x">
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
                    <div className="food-footer flex flex-row justify-between">
                        <button className={`more-button w-[100px] h-[30px] rounded-3xl shadow-md text-center`} >
                            <p>Buy</p>
                        </button>
                        <h3 className="text-[36px] font-bold mx-2">
                            ${food.price}
                        </h3>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}