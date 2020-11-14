const API_KEY = process.env.REACT_APP_CRIC_API_KEY;

// GET ALL THE UPCOMING MATCHES

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches/${API_KEY}`
    return fetch(url)
    .then((response) =>response.json())
    .catch((error) => console.log("ERROR : ", error))
}

// Load All contacts
export const getMatchData = (id) =>{
    const url = `https://cricapi.com/api/cricketScore/${API_KEY}&unique_id=${id}`
    return fetch(url)
    .then((response) =>response.json())
    .catch((error) => console.log("ERROR : ", error))
}