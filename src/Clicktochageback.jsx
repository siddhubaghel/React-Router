import React, { useState } from "react";

const Clicktochangeback = ()=>{

   let [color,changecolor] = useState("black"); 
   let css = {
    background:color,color:"white",height:500,width:1000,
    margin:"auto",
   }
    
   
  return <>

    <div style={css}></div>

      <button className="px-2 rounded bg-danger text-white ms-5" onClick={()=>changecolor("red")}>Red</button>
      <button className="px-2 rounded bg-success text-white ms-5" onClick={()=>changecolor("green")}>green</button>
      <button className="px-2 rounded bg-info text-white mt-3 ms-5" onClick={()=>changecolor("aqua")}>aqua</button>

     </>
}

export  default Clicktochangeback;