import Menu from "./menu"
import PopularList from "./popularList"


export default function Container(){

    return(
        <div className="container w-full h-fit rounded-3xl flex flex-col shadow-md pt-6 my-16 mx-auto hover:cursor-custom">
            <h1 className="m-4 text-3xl font-semibold font-mono">Popular</h1>
            <PopularList/>
            <h1 className="m-4 text-3xl font-semibold font-mono">Menu</h1>
            <Menu/>  
        </div>
    )
}