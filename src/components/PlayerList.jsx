import {FetchPuppy, FetchSinglePuppy} from "../api";
import RenderAllPlayers from "./RenderAllPlayers";

function PlayerList() {

    FetchPuppy()


    return ( 
        <div className="ListWrapper">
            <div className="ListContainer">
                <RenderAllPlayers />
            </div>
        </div>
);
}

export default PlayerList;