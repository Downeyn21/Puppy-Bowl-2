const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players"


export async function FetchPuppy() {


    try {
        const response = await fetch(apiUrl);
        const result = await response.json()
        // console.log("Fetching all puppies =>", result.data.players)
        return result.data.players
        
    } catch (error) {
        console.error(error)
    }
};

export async function FetchSinglePuppy(pupId) {
    try {
        const response = await fetch(`${apiUrl}/${pupId}`)
        const result = await response.json()
        return result.data.player
    } catch (error) {
        console.error(error)
    }
    
}

export async function PostPuppy(data) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
    )
        const result = response.json()
        console.log("post result =>", result)
    } catch (error) {
        console.error(error)
    }
}



// export default {FetchPuppy, FetchSinglePuppy};