import React from "react";
import { useState } from "react";


function NewPlantForm() {
  const[name, setName] = useState()
  const[image, setImage] = useState()
  const[price, setPrice] = useState()

  function submitNewPlant(event){
    event.preventDefault()

    const configObj={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: parseInt(price),
      })
    }

    fetch("http://localhost:6001/plants", configObj)
     .then((res)=> res.json())
     .then(()=>{console.log("Successfully added!")
     })

    setName()
    setImage()
    setPrice()

  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={(e)=>setImage(e.target.value)} type="url" name="image" placeholder="Image URL" />
        <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit" className="btn btn-dark">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
