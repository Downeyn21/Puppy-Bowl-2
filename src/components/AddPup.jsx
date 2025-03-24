import { useEffect, useState } from "react";
import { PostPuppy } from "../api";

function AddPup() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [image, setImage] = useState("")

    
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(name, breed, image)
        
        const player = {
            name: name,
            breed: breed,
            imageUrl: image,
        }

        PostPuppy(player)
        
    }





    return ( 
        <>
            <div className="FormContainer">
                <form onSubmit={handleSubmit} className="PupForm">
                    <label>Name:<input onChange={(e) => setName(e.target.value)} type="text"/> </label>
                    <label>Breed:<input onChange={(e) => setBreed(e.target.value)} type="text"/> </label>
                    <label>Image-Url:<input onChange={(e) => setImage(e.target.value)} type="text"/> </label>
                    <button type="submit"> send your dog to doggy heaven </button>
                </form>
            </div>
        </>
     );
}

export default AddPup;