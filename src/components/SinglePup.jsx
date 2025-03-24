import { useEffect, useState } from "react";
import { FetchSinglePuppy } from "../api";
import { useParams } from "react-router-dom";

function SinglePup() {
    const { playerId } = useParams();
    const [pup, setPup] = useState([])

    useEffect(() => {
        async function setSinglePup() {
            try {
                let puppy = await FetchSinglePuppy(playerId)
                setPup(puppy)
                // console.log("single pup function result => ", puppy)
            } catch (error) {
                console.error(error)
            }
        }

        setSinglePup()

    }, [playerId])
    
    console.log("hey guy ",pup)


    return ( 
        <>
            <div className="SinglePupWrapper">
                <h1>{pup.name}</h1>
                <div className="SinglePupContainer">
                    <div>
                        {pup.breed}
                    </div>
                    <div>
                        {pup.status}
                    </div>
                    <div className="PuppyPicture">
                        <img src={pup.imageUrl === 'https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png' ? 'https://dthezntil550i.cloudfront.net/2c/latest/2c2203021257533060016988584/e2417ceb-258f-4c29-a8d7-b9423378d3fe.jpg' : pup.imageUrl } />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePup;