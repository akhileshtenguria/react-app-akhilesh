import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () =>{

    const [value , setValue] = useState()
    const ChangeEvent = (Event) => {
        console.log(Event.target.value);
        setValue(Event.target.value)
    }

    return (
        <>
        {/* https://source.unsplash.com/random/300×300 */}
            <div className="searchdiv">
                <h2> Search HErE</h2>
                <div>Your Search Image Name <b>{value}</b></div>
                <input name="searchbox"  
                value={value}
                onChange={ChangeEvent}
                  />
                  { value != '' ?
                  <Sresult 
                  imagvalue={value}
                  />
                :""}
           </div>

        </>
    )
}
export default Search;