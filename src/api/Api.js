const API_KEY = process.env.REACT_APP_CRIC_API_KEY;
console.log(API_KEY)
// GET ALL THE UPCOMING MATCHES

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches/${API_KEY}`
    console.log(url)
    return fetch(url)
    .then((response) =>response.json())
    .catch((error) => console.log("ERROR : ", error))
}