import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';


const Notes=(props)=>{

      const removeNote=()=>{
          props.myrmnote(props.id);
      }
        return (
            <>           
               <div className='col-md-3 p-2 m-3  bg-info text-white text-center border-0 bg-color-gray border-1'>
                  <div ><h3 className="text-success">{props.title}</h3>
                     <p>{props.content} </p>
                     <a onClick={removeNote}>  <span className="glyphicon glyphicon-remove">remove</span> </a>
                  </div>
                 
               </div>
            </>
        )
}


export default Notes;