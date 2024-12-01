import MenuItems from "./menu-items";
import SearchBar from "./search-bar";
import SiteTitle from "./site-title";

export default function Header(){

    return (
        <div className="w-full h-[80px] flex flex-row shadow-md px-12 pt-2 justify-between rounded-b-full">
            <SearchBar/>
            <SiteTitle/>
            <MenuItems/>
        </div>
    )
}