
type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    img_src: string,
    theme: string
}


export default function Container(){

    const products : Product[] = [
        {
            id: 1,
            title: 'Naruto Figure',
            price: 239.99,
            description: 'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.',
            img_src: '/src/assets/images/naruto-product-img.webp',
            theme: 'orange'
        },
        {
            id: 2,
            title: 'Kakashi Figure',
            price: 199.99,
            description: `Kakashi Hatake is a fictional character and one of the main protagonists in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno.'`,
            img_src: '/src/assets/images/kakashi-product-img.webp',
            theme: 'blue'
        },
        {
            id: 3,
            title: 'Sasuke Figure',
            price: 249.99,
            description: `Sasuke Uchiha is a fictional character in the Naruto manga and anime franchise created by Masashi Kishimoto. Sasuke belongs to the Uchiha clan, a notorious ninja family, and one of the most powerful, allied with Konohagakure.`,
            img_src: '/src/assets/images/sasuke-product-img.webp',
            theme: 'purple'
        },
        {
            id: 3,
            title: 'Sakura Figure',
            price: 159.99,
            description: `Sakura Haruno is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Sakura is depicted as a kunoichi affiliated with Konohagakure and a part of Team 7, which consists of herself, Naruto Uzumaki, Sasuke Uchiha, and their sensei Kakashi Hatake.`,
            img_src: '/src/assets/images/sakura-product-img.jpg',
            theme: 'pink'
        },
    ]

    return(
        <div className="w-full h-fit rounded-3xl flex flex-col shadow-md my-16">
            <ul className="flex flex-col w-1/2 my-8 mx-auto">
                {products.map((product)=>(
                    <li key={product.id} className="product rounded-3xl overflow-hidden shadow-md pb-6 my-6">
                    <img className="w-full max-h-[600px]" src={product.img_src}></img>
                    <div className="product-info mx-6">
                        <div className="w-full top-row flex flex-row justify-between">
                            <div className="product-title flex flex-row">
                                <img className="w-6 h-6" src="/src/assets/icons/leaf-icon.png"/>
                                <h1 className="product-name text-[36px] font-semibold">{product.title}</h1> 
                            </div>
                            
                            <button>
                                <img className="w-6 h-6" src="/src/assets/icons/3dots-icon.png"/>
                            </button>
                        </div>
                        
                        <div className="description my-6">
                            <p>{product.description}</p>
                        </div>
                        <div className="product-footer flex flex-row justify-between">
                            <button className={`more-button w-[100px] h-[30px] bg-${product.theme}-500 text-white rounded-3xl shadow-md text-center`} >
                                <p>Buy</p>
                            </button>
                            <h3 className="text-[36px] font-bold">
                                ${product.price}
                            </h3>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}