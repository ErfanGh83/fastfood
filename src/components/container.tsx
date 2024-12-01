


export default function Container(){

    return(
        <div className="w-full h-[1440px] rounded-3xl flex flex-col shadow-md my-16">
            <ul className="flex flex-col w-1/2 my-8 mx-auto">
                <li className="product rounded-t-3xl overflow-hidden shadow-md">
                    <img className="w-full max-h-[600px]" src="/src/assets/images/product-img.webp"></img>
                    <div className="product-info">
                        <h1 className="product-name text-[24px] font-semibold">Product 1</h1>
                    </div>
                </li>
            </ul>
        </div>
    )
}