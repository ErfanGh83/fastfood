import { useState } from "react";

export default function SearchBar(){

    const [isExpanded, setIsExpanded] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [searchBarSrc, setSearchBarSrc] = useState('/src/assets/icons/search-bar-icon.png');

    const toggleExpand = () => {

        setSearchBarSrc('/src/assets/icons/sharingan-search-icon.webp');

        setIsSpinning(true);

        setTimeout(() => {
        setIsSpinning(false);
        setSearchBarSrc('/src/assets/icons/search-bar-icon.png');
        }, 500);

        setIsExpanded((prev) => !prev);
    };
    
    return(
        <div className="search-bar w-380px h-fit rounded-full border-2 border-black bg-black overflow-hidden flex flex-row">
            <button className={`w-12 h-12 rounded-full border-slate-400 bg-red-600 focus:outline-none transition-transform ${
          isSpinning ? "animate-spin" : ""
        }`} onClick={toggleExpand}>
                <img className="w-6 h-6 rounded-full m-auto" src={searchBarSrc}/>
            </button>
            <input className={`w-0 h-12 rounded-r-full bg-black text-[18px] text-white transition-all duration-300 ease-in-out focus:outline-none ${
          isExpanded ? "w-[200px] ml-2" : "w-[0]"
        }`} placeholder="search" onBlur={()=>{setIsExpanded(false)}}/>
        </div>
    )
}