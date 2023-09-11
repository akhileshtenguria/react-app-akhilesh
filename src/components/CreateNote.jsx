import React, { useState} from "react";

const CreateNote=(props)=>{
    const [items, setItems ] = useState({
        title:"",
        content:""
      });
      const InputEvent =(event)=>{
            const value = event.target.value;
            const name = event.target.name;
            console.log(value+"---"+name);
            setItems((oldvalue)=>{
              return { ...oldvalue, 
                [name]: value
                }
            })      
      }
    
      const addEvent=()=>{
        props.SubmitClick(items);
        setItems({
            title:"",
            content:""
          })
        
      }
      
    
    return (
        <>
        <div className="container text-align-center">
            <div className="col-mx-6 col-auto d-flex justify-content-center flex-nowrap m-5">
                <h1 className="">ADD NOTES</h1>
           </div>
           <div className=" d-flex justify-content-center  text-align-center">
              <div className="w-50">
                <div className="form-group col-auto">
                    <input type="text" className="form-control" placeholder="Title" value={items.title} name="title" onChange={InputEvent} />
                </div>
                <div className="form-group mt-3 col-auto">
                  <textarea className="form-control" placeholder="Write notes description" value={items.content}  name="content" onChange={InputEvent}   />
                </div>
                <div className="text-align-center mt-3"><button className="btn btn-primary" onClick={addEvent} > ADD </button></div>
              </div>
            </div>
        </div> 
           </>
    );
}
export default CreateNote;