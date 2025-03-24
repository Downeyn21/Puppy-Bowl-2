import FetchPuppy from "../api";
import RenderAllPlayers from "./RenderAllPlayers";

function PlayerList() {

    FetchPuppy()


    return ( 
        <div>
            <ul>
                <RenderAllPlayers />
            </ul>
        </div>

     );
}

export default PlayerList;