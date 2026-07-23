import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";


const FetchApi = () => {
    const [movies, setMovies] = useState([])
    const API_KEY = "d6fb68e7";
    let movie = "Batman"
    useEffect(() => {
        const fetchApi = async () => {
            const request = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`)
            console.log(request)
            const responce = await request.json()
            console.log(responce)
            setMovies(responce.Search)
        }
        fetchApi()
    }, [movie])
    return (
        <div>
            <HeroSection movies={movies} />
        </div>
    )
}

export default FetchApi
