import axios from "axios"

//Publice APIs Key
const KEY = "AIzaSyCyahRa4xivPSjeFcrjlqTYORnGL3zu3Y0"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})