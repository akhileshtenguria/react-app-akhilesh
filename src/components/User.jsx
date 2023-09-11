import React from "react";
import { useParams, useLocation } from "react-router-dom";
// import  useHistory  from 'react-router-dom';


const User = () =>{
    // console.log(match);
    const location  = useLocation();
    // const histry =  useHistory();
    
    const  {fname, lname} = useParams();
    // console.log(params);
    return (
        <>
         <h1>Hi  {fname}  {lname}, welcome to the page! </h1>
         <p>This is your current path {location.pathname}</p>
          { location.pathname ===`/user/akhilesh/T` ? 
             (<div><button onClick={ () => console.log("Hiiii, akhilesh")}>CLICK me</button></div>) : null  
          }
        </>
    )
}

export default User;