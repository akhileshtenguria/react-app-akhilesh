import React from "react";

const Sresult = (props) => {
    const imgvalue= `https://source.unsplash.com/random/300×300?${props.imagvalue}`;
    return (
        <>
           <h1>
            Search Result here
            <div >
                <img style={{border:"7px solid #757578"}} className="img img-thumbnail" src={imgvalue} width="400" height="300" />
           </div>
           </h1>
        </>
    )
}

export default Sresult;