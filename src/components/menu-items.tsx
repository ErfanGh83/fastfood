import CartItem from "./menu items/cart-item"
import HomeItem from "./menu items/home-item"
import ProfilItem from "./menu items/profile-item"


export default function MenuItems(){

    return(
        <div className="menu-items">
            <ul className="items-container w-[380px] h-[40px] flex flex-row justify-evenly">
                <HomeItem/>
                <CartItem/>
                <ProfilItem/>
            </ul>
        </div>
    )
}