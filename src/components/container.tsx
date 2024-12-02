import PopularList from "./popularList"


export default function Container(){

    return(
        <div className="container w-full h-fit rounded-3xl flex flex-col shadow-md my-16 mx-auto">
            <PopularList/>  
        </div>
    )
}