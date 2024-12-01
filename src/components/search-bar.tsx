import React, { useState } from "react";

export default function SearchBar(){

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };
    
    return(
        <div className="search-bar w-380px h-[48px] rounded-full bg-slate-200 overflow-hidden flex flex-row">
            <button className="w-12 h-full rounded-full bg-slate-300" onClick={toggleExpand}>
                <img className="w-6 h-6 m-auto" src="src/assets/icons/search-bar-icon.png"/>
            </button>
            <input className={`w-full h-full rounded-r-full bg-slate-200 text-[18px] transition-all duration-300 ease-in-out focus:outline-none ${
          isExpanded ? "w-[200px] ml-2" : "w-0"
        }`} placeholder="search"/>
        </div>
    )
}