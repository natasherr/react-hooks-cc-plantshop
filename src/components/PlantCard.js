import React from "react";
import { useEffect, useState } from "react";
import Delete from "./Delete";
import Update from "./Update";

function PlantCard() {
  const[plants, setPlants]= useState([])
  const[isInStock] = useState(true)

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
     .then((res)=> res.json())
     .then((mimea)=>
      setPlants(mimea)
    )
  }, [])

  return (
    <ul className="container mx-auto row" >
    {
      Array.isArray(plants) && plants.map((plant, index)=>(
        <li key={index} className="col-md-3 border">
          <img src={plant.image} className="img-fluid" alt={plant.name}/>
          <h3 style={{color:"green"}}><strong>{plant.name}</strong></h3>
          <h5>Price:{plant.price}</h5>
          
            {isInStock===true ? (<button className="primary">In Stock</button>) : (<button>Out Of Stock</button>)}
        
           <Delete plant={plant}/>
           <Update plant={plant}/>
        </li>
      ))
    }
    </ul>
  )
}

export default PlantCard;
