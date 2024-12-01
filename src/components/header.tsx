import MenuItems from "./menu-items";
import SearchBar from "./search-bar";
import SiteTitle from "./site-title";

export default function Header(){

    return (
        <div className="w-full h-[80px] flex flex-row shadow-md bg-white px-12 pt-2 justify-between rounded-b-full top-0 fixed">
            <SearchBar/>
            <SiteTitle/>
            <MenuItems/>
        </div>
    )
}