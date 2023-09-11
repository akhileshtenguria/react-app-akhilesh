import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes from './Notes';
import CreateNote from './CreateNote';
// import Header from "./Header";

const AddNotes =()=>{

  const navigate = useNavigate();
  const goToContact =()=>{
    navigate("/contact");
  }
    const [allitems, setAllItems] = useState([]);
    const addNote=(items)=>{
      console.log(allitems);
      console.log("add note ");
      
      setAllItems((oldvalue)=>{
          return [...oldvalue, items];
          console.log(oldvalue)
        });
        console.log(allitems);
    }
    const rmmyfun = (id) => {
      console.log("remove notes - "+id);
      setAllItems((old2value)=>
        // console.log(old2value)
        old2value.filter((cval,indx)=>{
           return indx!==id;
        })
      );
    }
        return (
            <>
            <div className="text-right">
                <button className="btn btn-primary text-right"  onClick={ goToContact } style={{cursor:"pointer"}}>Go TO Contact</button>
            </div>
            
            <CreateNote SubmitClick={addNote} />
        <div className="text-center"><h1>Items List</h1></div>
        <div className='row mt-3 text-center border-0'>
        { allitems.map((val, index)=> {
             return ( 
                <Notes 
                  id={index}
                  key={index}
                  title={val.title}
                  content={val.content}
                  myrmnote={rmmyfun}
                  />
               

               );
          }) 
          }
        </div>
        </>
        )
}

export default AddNotes;