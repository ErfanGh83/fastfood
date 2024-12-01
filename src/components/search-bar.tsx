import React, { useState } from "react";

export default function SearchBar(){

    const [isExpanded, setIsExpanded] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);

    const toggleExpand = () => {

        setIsSpinning(true);
        setTimeout(() => {
        setIsSpinning(false);
        }, 1000);

        setIsExpanded((prev) => !prev);
    };
    
    return(
        <div className="search-bar w-380px h-fit rounded-full border-2 border-black bg-slate-200 overflow-hidden flex flex-row">
            <button className={`w-12 h-12 rounded-full border-slate-400 bg-slate-300 focus:outline-none transition-transform ${
          isSpinning ? "animate-spin" : ""
        }`} onClick={toggleExpand}>
                <img className="w-6 h-6 m-auto" src="src/assets/icons/search-bar-icon.png"/>
            </button>
            <input className={`w-full h-12 rounded-r-full bg-slate-200 text-[18px] transition-all duration-300 ease-in-out focus:outline-none ${
          isExpanded ? "w-[200px] ml-2" : "w-0"
        }`} placeholder="search"/>
        </div>
    )
}