import HomeItem from "./menu items/home-item"


export default function MenuItems(){

    return(
        <div className="menu-items">
            <ul className="items-container w-[380px] h-[40px] flex flex-row">
                <HomeItem/>
            </ul>
        </div>
    )
}