import React from "react";
import {useNavigate} from 'react-router-dom';
const Contact = () =>{
    const navigate = useNavigate();

    const goToHome =()=>{
        navigate("/");
    }

    const goToBack =()=>{
        navigate(-1);
    }

    return (
        <>
         <section>
            <h1>THis is Contact page!</h1>
            <div className="text-right">
                <button className="btn btn-primary text-right"  onClick={ goToHome } style={{cursor:"pointer"}}>Go TO Home</button>
            </div>
            <div className="text-right">
                <button className="btn btn-secondary text-right"  onClick={ goToBack } style={{cursor:"pointer"}}>Go TO BACK</button>
            </div>
         </section>
        </>
    )
}

export default Contact;