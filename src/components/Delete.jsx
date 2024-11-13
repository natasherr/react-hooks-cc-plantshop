export default function Delete({plant}){

    function deletePlant(){
        fetch(`http://localhost:6001/plants/${plant.id}`, {method:"DELETE"})
         .then((res)=> res.json())
         .then((data)=>{console.log("Deleted!!!");
         })
      }
    
    return(
        <div>
            <button onClick={deletePlant} type="button" className="btn mt-3 btn-danger btn-sm">DELETE</button>

        </div>
    )
}