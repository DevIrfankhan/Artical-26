import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";


const FetchApi = ({ search }) => {
    console.log(search)
    const [movies, setMovies] = useState([])
    const API_KEY = "d6fb68e7";
    // let movie = "Iron man"
    useEffect(() => {
        const fetchApi = async () => {
            const request = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
            console.log(request)
            const responce = await request.json()
            console.log(responce)
            setMovies(responce.Search)
        }
        fetchApi()
    }, [ search])
    return (
        <div>
            <HeroSection movies={movies} />
        </div>
    )
}

export default FetchApi
