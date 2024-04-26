import axios from "axios";


const API_URL = 'https://api.themoviedb.org/3';
   // const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmU3MGY4MTRlNjNiM2RhNjhmM2JlMjQzMTkxOTMzMyIsInN1YiI6IjY2MmJjODU2OWFjNTM1MDExYzhmNWJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YKwb6n71YlnYyHLM3r5WiCOs-MYsUAIqaKZMCA1Of34';
const API_KEY = 'bfe70f814e63b3da68f3be2431919333';


export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}?api_key=${API_KEY}`)
        return response.data.results;
    } catch (error) {
        console.error(' Error ' , error)
        throw error;
    }
}