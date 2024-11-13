import { useState } from "react";

export default function Update({plant}){
    const[price,setPrice]=useState(plant.price)

    function updatePrice(event){
        event.preventDefault()

      const configObj = {
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            price: price,
        }),
      }

      fetch(`http://localhost:6001/plants/${plant.price}`, configObj)
       .then((res)=> res.json())
       .then(()=>{console.log("Updated!!");
       })
    }
    return(
        <div>
         <form onSubmit={updatePrice}>
            <div className="mb-3"> 
                <label>Change Price</label>
                <input className="form-control" type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
         </form>
        </div>
       )
    
}