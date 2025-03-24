const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2505-ftb-et-web-ft/players"


async function FetchPuppy() {


    try {
        const response = await fetch(apiUrl);
        const result = await response.json()
        // console.log("Fetching all puppies =>", result.data.players)
        return result.data.players
        
    } catch (error) {
        console.error(error)
    }
}





export default FetchPuppy;