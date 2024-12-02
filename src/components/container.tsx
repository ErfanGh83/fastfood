import PopularList from "./popularList"


export default function Container(){

    return(
        <div className="container w-full h-fit rounded-3xl flex flex-col shadow-md pt-6 my-16 mx-auto">
            <h1 className="m-4 text-3xl font-semibold">Popular</h1>
            <PopularList/>  
            <h1 className="m-4 text-3xl font-semibold">Menu</h1>
        </div>
    )
}