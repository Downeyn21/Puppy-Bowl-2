import FetchPuppy from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RenderAllPlayers() {
    
    const [players, setPlayers] = useState([])

    console.log("here =>", players)

    useEffect(() => {
        async function setPuppy() {
            let puppy = await FetchPuppy()
            setPlayers(puppy)
            
            console.log("Render function =>", puppy)
        }
        
        setPuppy()
        
    }, [])



    return (
        <> 
        {players.map((player) => {
            return (
            <Link key={player.id}>
                <li >{player.name}</li>
            </Link>
            )
        })}
        </>
     );
}

export default RenderAllPlayers;