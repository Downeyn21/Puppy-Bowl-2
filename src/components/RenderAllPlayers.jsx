import { FetchPuppy } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RenderAllPlayers() {    
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState("")
    const playerDisplay = search ? players.filter((player) => 
        player.name.toLowerCase().includes(search)) : players
    

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
        <div>
            <label>search: <input type="text" onChange={(e) => {setSearch(e.target.value.toLowerCase())}} /> </label>
        </div>
        {playerDisplay.map((player) => {
            return (
            <div key={player.id} className="NameWrapper">
                <Link to={`/SinglePup/${player.id}`}>
                    <div>{player.name}</div>
                </Link>
            </div>
            )
        })}
        </>
     );
}

export default RenderAllPlayers;