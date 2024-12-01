import SearchBar from "./search-bar";
import SiteTitle from "./site-title";

export default function Header(){

    return (
        <div className="w-full h-[80px] flex flex-row shadow-md p-4 justify-between">
            <SearchBar/>
            <SiteTitle/>
        </div>
    )
}